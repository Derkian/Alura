import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { NegociacaoServices }  from '../services/index';
import { throttle } from '../helpers/throttle';

export class NegociacaoController {

    private _inputData : JQuery;
    private _inputValor : JQuery;
    private _inputQuantidade : JQuery;
    private _negociacoes : Negociacoes = new Negociacoes();
    private _negociacaoView : NegociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView : MensagemView = new MensagemView("#mensagemView");
    private _service : NegociacaoServices = new NegociacaoServices();
        
    constructor() {
        
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacaoView.update(this._negociacoes);
    }
    
    @throttle()
    adiciona(event : Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g,","))

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente dia da semana, por favor.');
            return;
        }

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
    }

    @throttle()
    importar(){
        
        this._service
            .obterNegociacoes((res) => {
                
                    if (res.ok) 
                        return res;
                    else
                        throw Error(res.statusText);                        
                })            
                .then(negociacoes => {
                        negociacoes
                            .forEach(negociacao => 
                                this._negociacoes.adiciona(negociacao))

                        this._negociacaoView.update(this._negociacoes);
                })
                .catch((mensagem: Error) => 
                        this._mensagemView.update(mensagem.message));
    }

    private _ehDiaUtil(data : Date){
        return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
    }    
}


enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}