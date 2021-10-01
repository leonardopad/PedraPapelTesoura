const placar = {
    jogador : 0,
    computador : 0,
    jogados : 0
}

function novoPlacar() {
    document.getElementById('placar-jogador').innerText = placar.jogador;
    document.getElementById('placar-computador').innerText = placar.computador;
    document.getElementById('placar-jogados').innerText = placar.jogados;
}


function escolhaUsuario(){
    let escolha = document.getElementById('escolhaJogador').value;
    if(escolha == 'selecione'){
        document.getElementById('imagemEscolha').src = "";
        return 0;
    }
    switch (escolha){
    case 'pedra':
        document.getElementById('imagemEscolha').src = "pedra.png";
        break;
    case 'papel':
        document.getElementById('imagemEscolha').src = "papel.png";
        break;
    case 'tesoura':
        document.getElementById('imagemEscolha').src = "tesoura.png";
        break;
    }

}

function escolhaMaquina(){
    const jogadaMaquina = parseInt(Math.random() * (4 - 1) + 1);
    switch (jogadaMaquina){
        case 1:
            document.getElementById('imagemMaquina').src = ("pedra.png")
            return 'pedra'
        case 2:
            document.getElementById('imagemMaquina').src = ("papel.png")
            return 'papel'
        case 3:
            document.getElementById('imagemMaquina').src = ("tesoura.png")
            return 'tesoura'
    }
}
function jogar(){
    placar.jogados++
    const valorMaquina = escolhaMaquina();
    const valorJogador = document.getElementById('escolhaJogador').value;
    if(valorJogador == valorMaquina) {
        alert("Empate")
    }else if (valorJogador =='pedra' && valorMaquina == 'tesoura'){
        alert("Vitoria");
        placar.jogador++;
    }else if(valorJogador == 'tesoura' && valorMaquina == 'papel' ){
        alert("Vitória!")
    }else if(valorJogador == 'papel' && valorMaquina == 'pedra' ){
        alert("Vitória!");
        placar.jogador++;
    }else{
        alert("derrota")
        placar.computador++;
    }
    novoPlacar();
}


function reinicio() {
    placar.jogador = 0;
    placar.computador = 0;
    placar.jogados = 0;

    document.getElementById('escolhaJogador').value = ('selecione')
    document.getElementById('imagemEscolha').src = ("")
    document.getElementById('imagemMaquina').src = ("")
    document.getElementById('partidasJogadas').src = ("")
    novoPlacar();
 }
novoPlacar();
 
