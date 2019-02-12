import React, { Component } from 'react'
import PubSub from 'pubsub-js';

class InputCustomizado extends Component {

    constructor(){
        super();
        this.state = {msgErro : ''}
    }

    componentWillMount(){
        PubSub.subscribe('atualiza-erros', (mensagem, conteudo) => {

            conteudo.errors.forEach(erro => {
                if (erro.field === this.props.name) {
                    this.setState( {msgErro : erro.defaultMessage} )
                }  
            });
        });
    }

    render() {
        return (
            <div className="pure-control-group">
                <label 
                    htmlFor={this.props.id}>{this.props.label}</label> 
                <input 
                    id={this.props.id} 
                    type={this.props.type} 
                    name={this.props.nome} 
                    value={this.props.value} 
                    onChange={this.props.onChange}  />
                <span className="error">{this.state.msgErro}</span>
            </div>
        );
    }
}

export default InputCustomizado;
