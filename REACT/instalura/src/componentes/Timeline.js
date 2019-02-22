import React, { Component } from 'react';
import FotoItem from './Foto';
import Pubsub from 'pubsub-js';

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

    comenta = (fotoId, infoComentario) => {
        
        let fotoEncontrada = this.state.fotos.find( foto => foto.id === fotoId);
        console.log(fotoEncontrada);        

        let requestInfo = {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({ texto : infoComentario })
        }

        fetch(`https://instalura-api.herokuapp.com/api/fotos/${fotoId}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`,requestInfo)
            .then(response => {

                if (response.ok) {
                    return response.json();                    
                } else {
                    throw new Error('Não foi possível comentar a foto');
                }
            }).then(comentario => {

                fotoEncontrada.comentarios.push(comentario);  

                console.log(this.state.fotos);
                              
                this.setState( { fotos : this.state.fotos } );                
            }).catch(erro => {
                console.log(erro);
            });
    }

    like = (fotoId) => {

        fetch(`https://instalura-api.herokuapp.com/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`,{method:'POST'})
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.log('Não foi possível adicionar o like na foto');
                    throw new Error('Não foi possível adicionar o like na foto');
                }                
            }).then(foto => {                

                let fotoEncontrada = this.state.fotos.find( foto => foto.id === fotoId);
                fotoEncontrada.likeada = !fotoEncontrada.likeada;                               
                
                let possivelLiker = fotoEncontrada.likers.find(liker => liker.login === foto.login );

                if (possivelLiker === undefined) {

                    fotoEncontrada.likers.push(foto);
                } else {                                       
                    
                    fotoEncontrada.likers.splice(fotoEncontrada.likers.indexOf(possivelLiker));
                }

                this.setState( {foto : this.state.fotos} );       

            }).catch(erro => {
                console.log(erro);
            });        
    }


    componentDidMount(){
        this.carregarFotos();
        
        Pubsub.subscribe('atualiza-fotos', (topico,fotos) => {
            console.log(fotos);
            this.setState({fotos : fotos});
        });
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