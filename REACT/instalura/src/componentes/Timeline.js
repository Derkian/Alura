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

        this.props.store.lista(urlPerfil);
    }

    comenta = (fotoId, infoComentario) => {
        
        this.props.store.comenta(fotoId,infoComentario);
    }

    like = (fotoId) => {

       this.props.store.like(fotoId);
    }


    componentDidMount(){
        this.carregarFotos();
    }

    componentWillMount(){
        this.props.store.subscribe(fotos => {
            this.setState({fotos});
        })
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

                    return <FotoItem 
                                foto={foto} 
                                key={foto.id} 
                                comenta={this.comenta}
                                like={this.like}   />
                })                 
            }                
            </div>            
        );
    }
}