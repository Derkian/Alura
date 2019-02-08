var campo = document.querySelector("#filtrar-tabela");

campo.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(paciente => {
        if (this.value.length > 0) {
            var nome = paciente.querySelector(".info-nome").textContent;
            var expressao = new RegExp(this.value, "i");    
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }    
        }else{
            paciente.classList.remove("invisivel");
        }
    });
});