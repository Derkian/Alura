import Pubsub from 'pubsub-js';

export default class TimelineStore {
    
    constructor(fotos) {
        this.fotos = fotos;
    }

    lista = urlPerfil => {

        fetch(urlPerfil)
            .then(response => response.json())
            .then(fotos => {
                this.fotos = fotos;
                Pubsub.publish('timeline', this.fotos);
            })
    }

    comenta = (fotoId, textoComentario) => {

        const requestInfo = {
            method : 'POST',
            body : JSON.stringify({texto : textoComentario}),
            headers : new Headers({
                'content-type' : 'application/json'
            })
        };

        fetch(`https://instalura-api.herokuapp.com/api/fotos/${fotoId}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }else{
                    throw new Error('não foi possível comentar');
                }
            })            
            .then(novoComentario => {
                const fotoAchada = this.fotos.find(foto => foto.id === fotoId);
                fotoAchada.comentarios.push(novoComentario);
                Pubsub.publish('timeline', this.fotos);
            })
    }

    like = fotoId =>{

        fetch(`https://instalura-api.herokuapp.com/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`,{method:'POST'})
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {                
                throw new Error('Não foi possível adicionar o like na foto');
            }                
        }).then(foto => {                

            let fotoEncontrada = this.fotos.find( foto => foto.id === fotoId);
            fotoEncontrada.likeada = !fotoEncontrada.likeada;                               
            
            let possivelLiker = fotoEncontrada.likers.find(liker => liker.login === foto.login );

            if (possivelLiker === undefined) {

                fotoEncontrada.likers.push(foto);
            } else {                                       
                
                fotoEncontrada.likers.splice(fotoEncontrada.likers.indexOf(possivelLiker));
            }

            Pubsub.publish('timeline', this.fotos);

        });    
    }

    subscribe = callback => {
        Pubsub.subscribe('timeline', (topico,fotos) => {
            callback(fotos)
        });
    }
}