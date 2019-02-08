var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < trPacientes.length; index++) {

    let trPaciente = trPacientes[index];    

    var tdAltura = trPaciente.querySelector(".info-altura");
    var tdPeso = trPaciente.querySelector(".info-peso");
    var tdImc = trPaciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);    

    if(!pesoEhValido){            
        trPaciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){            
        trPaciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){        
        tdImc.textContent = calculaImc(peso,altura)
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){    
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0  && altura < 3.0){    
        return true;
    }else{
        return false;
    }
}








