import { Negociacao } from './Negociacao';
import { logarTempoDeExecucao } from '../helpers/index';

export class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    @logarTempoDeExecucao()
    adiciona(negociacao : Negociacao){

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}