var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializarMarcadores();

    $("#botao-reiniciar").click(reiniciaJogo);

    campo.removeClass('campo-desativado');
    campo.removeClass('borda-vermelha');
    campo.removeClass('borda-verde');

    consultaDadosPlacar();

    $('#usuarios').selectize({
        create: true,
        sortField: 'text'
    });

    $(".tooltip").tooltipster({
        trigger: "custom"
    });
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input", function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {    
    campo.one("focus", function() {
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);    
    campo.toggleClass("campo-desativado");
    inserePlacar();    
}

function inicializarMarcadores() {    
    campo.on('input',function () {
       var frase = $('.frase').text();
       var digitado = campo.val();       

       if (frase.startsWith(digitado)) {
           campo.addClass('borda-verde');
           campo.removeClass('borda-vermelha');
       }else{
           campo.addClass('borda-vermelha');
           campo.removeClass('borda-verde');
       }
    });
}

function reiniciaJogo() {
    campo.toggleClass("campo-desativado"); //novo
    campo.attr("disabled", false);
    campo.val("");

    campo.removeClass('borda-vermelha');
    campo.removeClass('borda-verde');

    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);

    inicializaCronometro();
};


