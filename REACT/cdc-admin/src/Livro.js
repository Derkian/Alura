import React, { Component } from 'react'
import InputCustomizado from './component/InputCustomizado';
import ButtonCustomizado from './component/ButtonCustomizado';
import SelectCustomizado from './component/SelectCustomizado';
import $ from 'jquery';
import PubSub from 'pubsub-js';

export class FormularioLivro extends Component {

    constructor(){
        super();
        this.state = { titulo : '', preco : 0, autor : 0,  listaAutores : [] }
    }

    componentWillMount(){
        $.ajax({
            url : 'https://5c61f8b61325a20014976513.mockapi.io/autores/autores',
            dataType : 'json',
            success : resposta =>{
                this.setState( {listaAutores : resposta} );
            }
        });

        PubSub.subscribe('atualiza-lista-autores', (mensagem, novoItem) => {            
            this.setState( { listaAutores : [...this.state.listaAutores, novoItem]} );
        });
    }

    setTitulo = event => {
        this.setState( { titulo : event.target.value } );
    }

    setPreco = event => {
        this.setState( {preco : event.target.value} );
    }

    setAutor = event =>{        
        this.setState( { autor : event.target.value } );
    }

    enviaForm = event => {        
        event.preventDefault();

        $.ajax({
            url : 'https://5c61f8b61325a20014976513.mockapi.io/autores/livros',
            data : JSON.stringify({ 
                                     titulo : this.state.titulo,
                                     preco : this.state.preco, 
                                     autorId : this.state.autor
                                   }),
            dataType : 'json',
            contentType : 'application/json',
            method : 'post',
            success : resposta => {                
                PubSub.publish('atualiza-lista-livros', resposta);                
            },
            error : resposta =>{
                console.log(resposta);
            }            
        })
    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form 
                className="pure-form pure-form-aligned"
                onSubmit={this.enviaForm} 
                method="post">

                    <InputCustomizado 
                        label="Titulo" 
                        id="titulo" 
                        type="text" 
                        nome="titulo" 
                        value={this.state.titulo} 
                        onChange={this.setTitulo} />

                    <InputCustomizado 
                        label="Preço" 
                        id="preco" 
                        type="number" 
                        nome="preco" 
                        value={this.state.preco} 
                        onChange={this.setPreco} />
                   
                    <SelectCustomizado 
                        id="autor"
                        label="Autor"
                        dados={
                            this.state.listaAutores.map( autor => {
                                return { id : autor.id, value : autor.nome }
                            })
                        }
                        onChange = {this.setAutor}                        
                    />

                    <ButtonCustomizado name="Gravar" type="submit"/>                        

                </form>
            
            </div>
        )
    }
}

export class TabelaLivro extends Component {
    
    render() {
      return (
        <div>            
            <table className="pure-table">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {
                this.props.lista.map(autor => {
                    return (
                        <tr key={autor.id}>
                            <td>{autor.titulo}</td>
                            <td>{autor.preco}</td>
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

export class LivroBox extends Component {

    constructor(){
        super();
        this.state = { lista : [] }
    }

    componentWillMount(){

        $.ajax({
            url : 'https://5c61f8b61325a20014976513.mockapi.io/autores/livros',
            dataType : 'json',
            success : resposta => {                
                this.setState( { lista : resposta } );
            }
        })

        PubSub.subscribe('atualiza-lista-livros', (mensagem, dado) =>{
            this.setState( {lista : [...this.state.lista, dado]} );
        });
    }

    render() {
      return ( 
        <div>
            <div className="header">
                <h1>Cadastro de Livros</h1>                    
            </div>
            <div className="content" id="content">                                
                <FormularioLivro />                
                <TabelaLivro lista ={this.state.lista}/>
            </div>
        </div>        
      )
    }
}

export default LivroBox;


