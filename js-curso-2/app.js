let listaNumerosSorteados = [];
let limiteNumeros = 10;
let tentativas = 0;
let numAleatorio = gerarNumeroAleatorio(10);
console.log(`Número aléatorio: ${numAleatorio}`);

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){
    exibirTextoTela("h1", "Jogo do número secreto");
    exibirTextoTela("p", "Escolha um número de 1 a 10");
}
mensagemInicial();

exibirTextoTela("h1", "Jogo do número secreto");
exibirTextoTela("p", "Escolha um número de 1 a 10");

function verificarChute(){
    tentativas ++;
    console.log("clicou");
    let chute = document.querySelector("input").value;
    console.log(`Acertou: ${chute == numAleatorio}`);

    if(chute == numAleatorio){
        let palavraTentativa = tentativas > 1 ? "tentativas": "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}!`;
        exibirTextoTela("h1", "Acertou!");
        exibirTextoTela("p", mensagemTentativas);
        //exibirTextoTela("p", "Você descobriu o número secreto!");
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chutar").setAttribute("disabled", true);

    }else if(chute > numAleatorio){
        exibirTextoTela("p", "O número secreto é menor");
    }else if(chute < numAleatorio){
        exibirTextoTela("p", "O número secretro é maior");
    }
    limparCampo();
}

function gerarNumeroAleatorio(limite) {
    let numeroSorteado = parseInt(Math.random() * limite + 1);
    let quantidadeElementos = listaNumerosSorteados.length;

    if (quantidadeElementos == limiteNumeros){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio(10);
    }else{
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    limparCampo()
    numAleatorio = gerarNumeroAleatorio(10);
    console.log(`Número aléatorio: ${numAleatorio}`);
    mensagemInicial();
    tentativas = 0;
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chutar").removeAttribute("disabled");
}