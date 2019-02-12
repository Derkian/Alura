import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';
import InputCustomizado from './component/InputCustomizado';
import ButtonCustomizado from './component/ButtonCustomizado';

class App extends Component {

  constructor(){
    super();
    this.state = { lista : [], nome : '', senha : '', email : '' };
  }
  
  componentWillMount(){
    $.ajax({
      url : 'https://5c61f8b61325a20014976513.mockapi.io/autores/autores',
      dataType : 'JSON',
      success : resposta => {
        this.setState({lista : resposta});
      }
    })
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
        this.setState( { lista : [...this.state.lista, resposta ] } );
      },
      error : resposta => {
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
      <div id="layout">
          <a href="#menu" id="menuLink" className="menu-link">
              <span></span>
          </a>

          <div id="menu">
              <div className="pure-menu">
                  <a className="pure-menu-heading" href="#top">Company</a>

                  <ul className="pure-menu-list">
                      <li className="pure-menu-item"><a href="#top" className="pure-menu-link">Home</a></li>
                      <li className="pure-menu-item"><a href="#top" className="pure-menu-link">Autor</a></li>
                      <li className="pure-menu-item"><a href="#top" className="pure-menu-link">Livro</a></li>
                  </ul>
              </div>
          </div>
              <div id="main">
                  <div className="header">
                    <h1>Cadastro de Autores</h1>
                  </div>
                  <div className="content" id="content">
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
                            this.state.lista.map(autor => {
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
                  </div>
                </div>  
            </div>    
    );
  }
}

export default App;
