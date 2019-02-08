var botaoFrase = $('#botao-frase');
var botaoFraseId = $('#bota-frase-id');

botaoFrase.on('click',function () {
    $('#spinner').toggle();

   $.get('http://localhost:3001/frases',function (dados) {
        atualizaFrase(dados);             
   })
   .fail(function () {
        $('#erro').toggle();
        setTimeout(() => {
            $('#erro').toggle();
        }, 1500);
   })
   .always(function () {
        $('#spinner').toggle();
   });
});

botaoFraseId.on('click',function () {
    $('#spinner').toggle();
    var fraseId = $('#frase-id').val();
    $.get('http://localhost:3000/frases',{id : fraseId},function (dados) {
        atualizaFraseId(dados)
    })
    .fail(function () {
        $('#erro').toggle();
        setTimeout(() => {
            $('#erro').toggle();
        }, 1500);
    })
    .always(function () {
        $('#spinner').toggle();
    });
});

function atualizaFraseId(dado) {
    var frase = $('.frase');
    frase.text(dado.texto);   

    atualizaTamanhoFrase();
    atualizaTempoFrase(dado.tempo);
}

function atualizaFrase(dados) {
    var posicaoArray =  Math.floor(Math.random() * dados.length);
    var dado = dados[posicaoArray];

    var frase = $('.frase');
    frase.text(dado.texto);   

    atualizaTamanhoFrase();
    atualizaTempoFrase(dado.tempo);
}

function atualizaTempoFrase(tempo) {
    var tempoFrase = $('#tempo-digitacao');
    tempoInicial = tempo;
    tempoFrase.text(tempo);    
}