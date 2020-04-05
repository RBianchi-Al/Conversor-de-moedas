import React from 'react';

function ListarMoedas(){

    const MOEDAS = [
        {"sigla": "AUD", "descricao": "Dólar australiano"},
        {"sigla": "BNG", "descricao": "Lev búlgaro"},
        {"sigla": "BRL", "descricao": "Real brasileiro"},
        {"sigla": "CAD", "descricao": "Dólar canadense"},
        {"sigla": "CHF", "descricao": "Franco Suíço"},
        {"sigla": "CNY", "descricao": "Yan chinês"},
        {"sigla": "CZK", "descricao": "Coroa República Tcheca"},
        {"sigla": "DKK", "descricao": "Coroa dinamarquesa"},
        {"sigla": "EUR", "descricao": "Euro"},
        {"sigla": "GBP", "descricao": "Libra Esterlina"},
        {"sigla": "HKD", "descricao": "Dólar de Hong Kong"},
        {"sigla": "HRK", "descricao": "Coroa Croácia"},
        {"sigla": "HUF", "descricao": "Florin Hungaro"},
        {"sigla": "IDR", "descricao": "Rúpia indiana"},
        {"sigla": "JPY", "descricao": "Iene Japonês"},
        {"sigla": "KRW", "descricao": "Won Sul-coreano"},
        {"sigla": "MXN", "descricao": "Peso Mexicano"},
        {"sigla": "MYR", "descricao": "Malásia Hinggit"},
        {"sigla": "NOK", "descricao": "Coroa Noruega"},
        {"sigla": "NZD", "descricao": "Dólar da Nova Zelândia"},
        {"sigla": "PHP", "descricao": "Peso filipino"},
        {"sigla": "PLN", "descricao": "Zloty Polônia"},
        {"sigla": "RON", "descricao": "Lev Romeno"},
        {"sigla": "RUB", "descricao": "Belarus Ruble"},
        {"sigla": "SEK", "descricao": "Coroa Suécia"},
        {"sigla": "SGD", "descricao": "Dólar de Singapura"},
        {"sigla": "THB", "descricao": "Baht Tailândia"},
        {"sigla": "TRY", "descricao": "Lira turca"},
        {"sigla": "USD", "descricao": "Dólar dos Estados Unidos"},
        {"sigla": "ZAR", "descricao": "Rand África do Sul"},
        
    ];

    function compare(moeda1, moeda2){
        if(moeda1.descricao < moeda2.descricao){
            return -1;
    
        } else if (moeda1.descricao > moeda2.descricao){
            return 1;
        } else {
            return 0;
        }

    }

    return MOEDAS.sort(compare).map(moeda => 
        <option value={moeda.sigla} key={moeda.sigla}>
            {moeda.descricao}
        </option>
        );

}

export default ListarMoedas;