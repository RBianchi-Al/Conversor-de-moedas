import React from 'react';
import ReactDOM from 'react-dom';
import ConversorMoedas from './conversor-moedas';
import {render, fireEvent} from '@testing-library/react'
import axiosMock from 'axios';
import '@testing-library/jest-dom/extend-expect'

describe('Teste do componente de voncersao de moedas', () => {
it('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConversorMoedas/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('deve simular uma conversao anonima de moedas', async () => {
  const { findByTestId, getByTestId } = render(<ConversorMoedas/>);
  axiosMock.get.mockResolvedValueOnce({
    data: {success: true, rates: {BRL: 4.564229}, USD: 1.101049}
  });

  fireEvent.click(getByTestId('btn-converter'));
  const modal = await findByTestId('modal');
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(modal).toHaveTextContent('1BRL = 0.24 USD')
});

});