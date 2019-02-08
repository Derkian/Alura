var buscar = document.querySelector("#busca-pacientes");

buscar.addEventListener("click", () => {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erro = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erro.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            erro.classList.remove("invisivel");
        }
    });

    xhr.send();
});