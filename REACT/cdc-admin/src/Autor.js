import React, { Component } from 'react'
import $ from 'jquery';
import InputCustomizado from './component/InputCustomizado';
import ButtonCustomizado from './component/ButtonCustomizado';
import PubSub from 'pubsub-js';

class FormularioAutor extends Component {

  constructor(){
    super();
    this.state = { nome : '', senha : '', email : '' };
  }

  enviaForm = event => {
    event.preventDefault();    

    $.ajax({
        url : 'https://5c61f8b61325a20014976513.mockapi.io/autores/autores',
        method: 'post',
        contentType : 'application/json',
        dataType : 'json',
        data : JSON.stringify({ nome : this.state.nome , email: this.state.email, senha : this.state.senha }),
        success : resposta => {            
            console.log(resposta);
            PubSub.publish('atualiza-lista', resposta);
        },
        error : resposta => {
            PubSub.publish('atualiza-erros',resposta.responseJSON);
            console.log(resposta);
        }      
    });
  }

  setNome = event => {
    this.setState({nome : event.target.value});
  }

  setEmail = event => {
    this.setState({email : event.target.value});
  }

  setSenha = event => {
    this.setState({senha : event.target.value});
  }

  render() {
    return (
        <div className="pure-form pure-form-aligned">
            <form 
            className="pure-form pure-form-aligned"
            onSubmit={this.enviaForm} 
            method="post">

            <InputCustomizado 
                label="Nome" 
                id="nome" 
                type="text" 
                nome="nome" 
                value={this.state.nome} 
                onChange={this.setNome} />

            <InputCustomizado 
                label="Email" 
                id="email" 
                type="email" 
                nome="email" 
                value={this.state.email} 
                onChange={this.setEmail} />

            <InputCustomizado 
                label="Senha" 
                id="senha" 
                type="password" 
                nome="senha" 
                value={this.state.senha} 
                onChange={this.setSenha} />                                                              
            
            <ButtonCustomizado name="Gravar" type="submit"/>                        
            </form>             
        </div>  
    )
  }
}

class TabelaAutor extends Component {
    
    render() {
        return (
            <div>            
                <table className="pure-table">
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.props.lista.map(autor => {
                        return (
                            <tr key={autor.id}>
                                <td>{autor.nome}</td>
                                <td>{autor.email}</td>
                            </tr>
                        );
                    })
                    }                          
                </tbody>
                </table> 
            </div>             
        )
    }
}

class AutorBox extends Component{

    constructor(){
        super();
        this.state = { lista : [] };
    }

    componentWillMount(){
        $.ajax({
            url : 'https://5c61f8b61325a20014976513.mockapi.io/autores/autores',
            dataType : 'JSON',
            success : resposta => {
            this.setState( { lista : resposta } );
            }
        })
        
        PubSub.subscribe('atualiza-lista', (mensagem, novoItem) => {                 
            this.setState( { lista : [...this.state.lista, novoItem]} );
        });        
    }  

    render(){
        return (
            <div>
                <div className="header">
                    <h1>Cadastro de Autores</h1>                    
                </div>
                <div className="content" id="content">                                
                    <FormularioAutor />
                    <TabelaAutor lista={this.state.lista}/>
                </div>
            </div>
        );
    }
}

export default AutorBox;


