import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TimelineApi from '../logicas/TimelineApi';

export default class Header extends Component {    

    constructor () {
      super();
      this.state = { msg : '' };
    }  

    envia = event => {
      event.preventDefault();      
      this.props.store.dispatch( TimelineApi.pesquisa(this.pesquisa.value) );
    }

    componentDidMount() {
      this.props.store.subscribe( () => {
        this.setState( { msg : this.props.store.getState().notificacao } );
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