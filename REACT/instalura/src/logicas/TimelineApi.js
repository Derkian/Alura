import { listagem, comentario, like, notifica } from '../actions/actionCreator';

export default class TimelineApi {
    
    static lista = urlPerfil => {
        
        return dispatch => {
            fetch(urlPerfil)
                .then(response => response.json())
                .then(fotos => {
                    dispatch(listagem(fotos));
                    return fotos;
                })
        }
    }

    static comenta = (fotoId, textoComentario) => {

        return dispatch => {
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
                    dispatch( comentario(fotoId, novoComentario) );
                    return novoComentario;
                })
            }
    }

    static like = fotoId =>{
        
        return dispatch => {

            fetch(`https://instalura-api.herokuapp.com/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`,{method:'POST'})
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {                
                    throw new Error('Não foi possível adicionar o like na foto');
                }                
            }).then(liker => {                    
                dispatch( like ( fotoId, liker ) );                
            });    
        }
    }   

    static pesquisa = login => {

        return dispatch => {
            fetch(`https://instalura-api.herokuapp.com/api/public/fotos/${login}`)
                .then(response => {
                    if (response.ok) {
                    return response.json();
                    } else {
                    throw new Error('Não foi possível consultar o usuário');
                    }
                })
                .then(fotos => {
                    if (fotos.length === 0) {                    
                        dispatch(notifica('usuário não encontrado'));
                    }
                    else{
                        dispatch(notifica('usuário encontrado'));
                    }

                    dispatch(listagem(fotos));                
                    return fotos
                })
                .catch(erro => {
                    console.log(erro);
                });
            }
        }
}