var rodada = 1;
var matriz_jogo = Array(3);

$(document).ready( function () {
    
    $('#btn_iniciar_jogo').click(function () {
        //validação apelido dos jogadores

        if (($('#entrada_apelido_1').val() == '') || ($('#entrada_apelido_2').val() == '')) {
            alert('Coloque um apelido!');
            return false;
        }
        //exibir os apelidos nos elementos span

        $('#nome_jogador_1').html($('#entrada_apelido_1').val());
        $('#nome_jogador_2').html($('#entrada_apelido_2').val());
    
        //esconder um menu e habilitar o palco do jogo

        $('#pagina_inicial').hide();
        $('#palco_jogo').show();
    });

    //evento de clique dentro de uma div, classe comum
    $('.jogada').click( function () {
        
        var id_campo_clicado = this.id;
        jogada(id_campo_clicado);
    })

    function jogada(id) {
        var icone = '';
        var ponto = 0;
        
        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        } else {
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }

        rodada++;

        $('#' + id).css('background-image', icone);
    }

});