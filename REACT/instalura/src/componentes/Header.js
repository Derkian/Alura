import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pubsub from 'pubsub-js';

export default class Header extends Component {
    
    envia = event => {
      event.preventDefault();      
      
      fetch(`https://instalura-api.herokuapp.com/api/public/fotos/${this.pesquisa.value}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Não foi possível consultar o usuário');
        }
      })
      .then(fotos => {
        Pubsub.publish('atualiza-fotos', fotos);
      })
      .catch(erro => {
        console.log(erro);
      });
    }
    
    render(){
        return (
        <header className="header container">
          <h1 className="header-logo">
            Instalura
          </h1>

          <form className="header-busca" onSubmit={this.envia}>
            <input type="text" name="search" ref={input => this.pesquisa = input} placeholder="Pesquisa" className="header-busca-campo"/>
            <input type="submit" value="Buscar" className="header-busca-submit"/>
          </form>


          <nav>
            <ul className="header-nav">
              <li className="header-nav-item">
                <Link to="/logout">
                  ♡
                  {/*                 ♥ */}
                  {/* Quem deu like nas minhas fotos */}
                </Link>
              </li>
            </ul>
          </nav>
        </header>            
        );
    }
}