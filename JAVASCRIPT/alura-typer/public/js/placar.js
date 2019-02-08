$('#botao-placar').click(mostrarPlaca);
$('#botao-sincroniza').click(sincronizaPlacar);

function sincronizaPlacar() {
    var corpoTabela = $('.placar').find('tbody>tr');

    let placar = [];

    corpoTabela.each(function(){
        let dados = {
            usuario : $(this).find('td:nth-child(1)').text(),
            pontos : $(this).find('td:nth-child(2)').text()
        }    

        placar.push(dados);                
    });

    $.post('http://localhost:3000/placar', { placar : placar }, function () {
       $('.tooltip').tooltipster('open');
    })
    .fail(function () {
        $('.tooltip').tooltipster('open').tooltipster("content", "Falha ao sincronizar");
    })
    .always(function () {
        setTimeout(() => {
            $('.tooltip').tooltipster('close')    
        }, 1200);         
    });
}

function consultaDadosPlacar() {
    var corpoTabela = $('.placar').find('tbody');

    $.get('http://localhost:3000/placar', function (dados) {
       $(dados).each(function (indice,placar) {           
           var linha = novaLinha(placar.usuario,placar.pontos);
           corpoTabela.append(linha);                
       });
    });
}

function inserePlacar() {
    var corpoTabela = $('.placar').find('tbody');
    var usuario = $('#usuarios').val();
    var numeroPalavras = $('#contador-palavras').text();

    var linha = novaLinha(usuario,numeroPalavras);

    corpoTabela.append(linha);    

    mostrarPlaca();
}

function mostrarPlaca() {
    $('.placar').stop().slideToggle(600);    
    scrollPlacar();
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;
    $("html, body").animate({ scrollTop: posicaoPlacar + "px"}, 1000);
}
function novaLinha(usuario,palavras) {
    var tr = $('<tr>');
    var tdNome = $('<td>').text(usuario);
    var tdPalavras = $('<td>').text(palavras);

    var tdRemover = $('<td>');
    var link = $('<a>').attr('href','#').click(removerLinha);
    var icon = $('<i>').addClass('small').addClass('material-icons').text('delete');

    link.append(icon);
    tdRemover.append(link);

    tr.append(tdNome);
    tr.append(tdPalavras);
    tr.append(tdRemover);

    return tr;
}

function removerLinha(event) {
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);

    setTimeout(function () {
        linha.remove();
    },1000);
}