//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let nomeAmigo;
let tamanhoArray;
let numerosGerados = [];
function adicionarAmigo(){
    nomeAmigo = document.getElementById('amigo').value;
    
    validarNomeAmigo(nomeAmigo);
    limparInput();
}
function validarNomeAmigo(nome){
    if (nome == ''){
        alert('Por favor, insira um nome.')
    }else {
        atualizarArrayAmigo(nome);
        AdicionarAmigoListaExibicao();
    }
}
function atualizarArrayAmigo(nome){
    amigos.push(nome);
}
function limparInput(){
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
}
function AdicionarAmigoListaExibicao(){
    let listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = '';

    for(let amigo of amigos){
        let text = '<li>' + amigo + '</li>';
        listaExibicao.innerHTML += text;
    } 
}
function sortearAmigo(){
    if(validaAmigosArray()){
        let numero = gerarNumeroAleatorio();

        if(numero == 'limite'){
            btnReinciarSorteio('sim');
        }else{
            mostrarSorteado(numero);
        }
    }
}
function validaAmigosArray() {
    if(amigos.length > 0){
        tamanhoArray = amigos.length;
        return true;
    }else {
        alert('Antes de sortear, adicione amigos, por favor.');
        return false;
    }
}
function gerarNumeroAleatorio(){
    let novoNumeroGerado = parseInt(Math.random() * tamanhoArray);
    
    if (tamanhoArray == numerosGerados.length){
        alert('Todos os nomes já foram sorteados! Reinicie o jogo ou adicione mais amigos para continuar.');
        return 'limite';
    }
    else if(numerosGerados.includes(novoNumeroGerado)){
        return gerarNumeroAleatorio();
    }else{
        numerosGerados.push(novoNumeroGerado);
        return novoNumeroGerado;
    }
}
function mostrarSorteado(numero){
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = '';
    sorteado.innerHTML += '<li>Amigo sorteado: ' + amigos[numero] +'</li>';
}
function btnReinciarSorteio(set){
    
    let divReiniciar = document.getElementById('reiniciarSorteio');
    
    if(set =='sim'){
        divReiniciar.hidden = false;
    }else{
        divReiniciar.hidden = true;
    }
}
function limparArray(){
    amigos = [];
    numerosGerados = [];
    let listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = '';
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = '';
    btnReinciarSorteio('nao');
}
