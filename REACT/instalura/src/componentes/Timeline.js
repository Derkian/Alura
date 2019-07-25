import React, { Component } from 'react';
import FotoItem from './Foto';
import TimelineApi  from '../logicas/TimelineApi';

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

        this.props.store.dispatch(TimelineApi.lista(urlPerfil));
    }

    comenta = (fotoId, infoComentario) => {
        
        this.props.store.dispatch(TimelineApi.comenta(fotoId, infoComentario));
    }

    like = (fotoId) => {        

        this.props.store.dispatch(TimelineApi.like(fotoId));       
    }


    componentDidMount(){
        this.carregarFotos();
    }

    componentWillMount(){
        this.props.store.subscribe(fotos => {
            this.setState({fotos : this.props.store.getState()});            
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