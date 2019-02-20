import React, { Component } from 'react'
import { Redirect }  from 'react-router-dom';

export class Login extends Component {

  constructor(){
    super();                
    this.state = { msg : (new URL(window.location)).searchParams.get('msg'), redirectToReferrer: false };
  }

  envia = event => {
      event.preventDefault();

      fetch('https://instalura-api.herokuapp.com/api/public/login', 
      {
          method : 'POST',
          body : JSON.stringify( { login : this.usuario.value, senha : this.senha.value } ),
          headers : {
              'Content-type' : 'application/json'
          }
      })
      .then(resposta => {
          if (resposta.ok) {

              return resposta.text();
          }else{
              throw new Error('Não foi possível fazer o login');
            
          }
      })
      .then( token => {
          localStorage.setItem('auth-token', token); 
          this.setState( {redirectToReferrer : true} );
      })
      .catch(erro => {
        this.setState( { msg : erro.message } );
      });
  }

  render() {    
    
    if (this.state.redirectToReferrer){
        return <Redirect to="/timeline" />
    }

    return (
      <div className="login-box">
        <h1 className="header-logo">Instalura</h1>
        <form onSubmit={this.envia} method="POST">
            <spa>{this.state.msg}</spa>
            <input type="text" ref={ input => this.usuario = input }/>
            <input type="password" ref = { input => this.senha = input }/>
            <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login;