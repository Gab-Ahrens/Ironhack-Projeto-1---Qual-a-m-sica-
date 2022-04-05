const comecarButton = document.getElementById('startbtn');
const welcomeText = document.getElementById('instructionsText')
const jogoMain = document.getElementById('question-container')
const enviarButton = document.getElementById('submitbtn')
const proximaButton = document.getElementById('nextbtn')
const ouvirButton = document.getElementById('listenbtn')


comecarButton.addEventListener("click", iniciarJogo);
ouvirButton.addEventListener("click", escutarMusica);
proximaButton.addEventListener("click", randomMusic);

function iniciarJogo() { // vai dar inicio ao jogo, faz o botão 'Começar' desaparecer.
    comecarButton.classList.add('hide');
    welcomeText.classList.add('hide');
    jogoMain.classList.remove('hide');
    enviarButton.classList.remove('hide');
    proximaButton.classList.remove('hide');
}

function randomMusic() {
    return music[Math.floor(Math.random()*music.length)];
}


function escutarMusica() {
    var audio = new Audio("./assets/audio/hey-ya-outkast.mp3");
    audio.play();
}

function nomeMusica() {
}


function nomeArtista() {
}


function reposta() {
    
}

function proximaPergunta() {
    // Passa para a próxima pergunta
}

function enviarResposta() {
    // Resposta que o jogador escolher(ou escrever)?
}