
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obterInformacoesPaciente(form);    

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErros(erros);
        return;        
    }

    adicionaPacienteNaTabela(paciente);

    limparMensagensDeErro();

    form.reset()
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function limparMensagensDeErro(){
    var mensagens = document.querySelector("#mensagens-erro");
    mensagens.innerHTML = "";
}

function exibeMensagensDeErros(erros){    
    limparMensagensDeErro();    
    var mensagens = document.querySelector("#mensagens-erro");

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        mensagens.appendChild(li);
    });
}

function montarTr(paciente){
    var tr = document.createElement("tr");
    tr.classList.add("paciente");

    tr.appendChild(montaTd(paciente.nome,"info-nome"));
    tr.appendChild(montaTd(paciente.peso,"info-peso"));
    tr.appendChild(montaTd(paciente.altura,"info-altura"));
    tr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    tr.appendChild(montaTd(paciente.imc,"info-imc"));

    return tr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    } 
    else if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido!");        
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    } 
    else if(!validaAltura(paciente.altura)){
        erros.push("A altura é inválida!");
    }

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    return erros;
}

function obterInformacoesPaciente(form){
    
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}
