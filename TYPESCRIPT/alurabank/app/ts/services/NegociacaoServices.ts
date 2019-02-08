import { Negociacao } from '../models/index';

export class NegociacaoServices{

    obterNegociacoes(isOk : HandlerResponse): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
                .then(res => isOk(res))
                .then(res => res.json())
                .then((dados: Dados[]) => 
                        dados.map((dado: Dados) => 
                            new Negociacao(new Date(),dado.montante, dado.vezes))
                );
    }
}

export interface HandlerResponse {

    (res : Response) : Response;
}

export interface Dados{

    montante : number;
    vezes : number;
}