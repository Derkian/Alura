export function logarTempoDeExecucao(emSegundos: boolean = false){

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor ){

        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args : any[]) {
            
            let dividir = 1;
            let unidade = "milisegundos";

            if (emSegundos) {
                dividir = 1000;
                unidade = "segundos";
            }

            console.log('----------------------------------------------------------------');
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Resultado do método: ${JSON.stringify(resultado)}`);
            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${(t2 - t1)/dividir} ${unidade}`);
            console.log('----------------------------------------------------------------');
            return resultado;            
        }

        return descriptor;
    }
}