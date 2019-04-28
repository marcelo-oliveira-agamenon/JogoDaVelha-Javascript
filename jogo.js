var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

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
        $('#' + id_campo_clicado).off();
        jogada(id_campo_clicado);
    })

    function jogada(id) {
        var icone = '';
        var ponto = 0;
        //atribui uma imagem a posição marcada e uma pontuação
        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        } else {
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }

        rodada++;
        //insere imagem
        $('#' + id).css('background-image', icone);
        //separa o id para inserir num array para posterior verificação
        var linha_coluna = id.split('-');
        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
        verifica_combinacao(); //chama função para veriicar a pontuação
    }

    function verifica_combinacao() {
        //verifica na horizontal
        var pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['a'][i];
        }
        ganhador(pontos); // verifica se ganhou

        pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['b'][i];
        } 
        ganhador(pontos);
        
        pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['c'][i];
        } 
        ganhador(pontos);

        //verificar na vertical
        for(var l = 1; l <= 3; l++){
            pontos = 0;
            pontos += matriz_jogo['a'][l];
            pontos += matriz_jogo['b'][l];
            pontos += matriz_jogo['c'][l];
            ganhador(pontos);
        }

        //verificar na diagonal
        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        ganhador(pontos);

        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        ganhador(pontos);
    }

    function ganhador(pontos) {
        if (pontos == -3) {
            var jogada_1 = $('#entrada_apelido_1').val();
            alert(jogada_1 + ' é o vencedor!');
            $('.jogada').off();
        } else if(pontos == 3){
            var jogada_2 = $('#entrada_apelido_2').val();
            alert(jogada_2 + ' é o vencedor!');
            $('.jogada').off();
        }
    }

});