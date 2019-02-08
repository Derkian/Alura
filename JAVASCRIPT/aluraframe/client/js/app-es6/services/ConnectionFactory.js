var ConnectionFactory = (function () {
    
    const stores = ['negociacoes']
    const version = 1;
    const dbName = 'aluraframe';

    var connection = null;

    var close = null;
    
    return class ConnectionFactory{
    
        constructor(){
    
            throw new Error('Não é possível criar instâncias de ConnectionFactory');
        }
    
        static getConnection(){
    
            return new Promise((resolve, reject) => {
    
                let openRequest = window.indexedDB.open(dbName, version);
    
                openRequest.onupgradeneeded = e => {
    
                    ConnectionFactory._createStores(e.target.result);                
                };
                
                openRequest.onsuccess = e => {
                  
                    if(!connection){

                        connection = e.target.result;

                        close = connection.close.bind(connection);

                        connection.close = function () {
                            throw new Error('Não é possível fechar a conexão fora da classe ConnectionFactory')    
                        };
                    } 

                    resolve(connection);
                };
                
                openRequest.onerror = e => {
                    
                    reject(e.target.result.name);
                };
            });
        }
        
        static _createStores(connection){
            
            stores.forEach(store => {
        
                if(connection.objectStoreNames.contains(store)){
                    connection.deleteObjectStore(store);
                }    
        
                connection.createObjectStore(store, { autoIncrement : true});
            });
        }

        static closConnection(){
            close();
            close = null;
            connection = null;
        }
    }
})()
