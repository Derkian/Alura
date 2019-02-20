import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

    constructor(props){
        super(props);
        this.state = { fotos : [] };        
        this.login = this.props.Login;
    }

    carregarFotos = () => {

        let urlPerfil = '';

        if(this.login === undefined){
            urlPerfil = `https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
        }else{
            urlPerfil = `https://instalura-api.herokuapp.com/api/public/fotos/${this.login}`;
        }

        fetch(urlPerfil)
            .then(response => response.json())
            .then( fotos => {                
                this.setState( { fotos : fotos} );
            });
    }

    componentDidMount(){
        this.carregarFotos();
    }

    componentWillReceiveProps(nextProps){                

        if (nextProps.Login !== undefined) {            
            this.login = nextProps.Login
            this.carregarFotos();            
        }        
    }

    render(){        
        return (
            <div className="fotos container">
            {
                this.state.fotos.map(foto => {
                    return <FotoItem foto={foto} key={foto.id} />
                })                 
            }                
            </div>            
        );
    }
}