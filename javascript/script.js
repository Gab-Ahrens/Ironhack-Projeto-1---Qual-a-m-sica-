const musicPlayer = new Player
const comecarButton = document.getElementById('startbtn');
const welcomeText = document.getElementById('instructionsText')
const jogoMain = document.getElementById('question-container')
const enviarButton = document.getElementById('submitbtn')
const proximaButton = document.getElementById('nextbtn')
const ouvirButton = document.getElementById('listenbtn')


comecarButton.addEventListener("click", iniciarJogo);
ouvirButton.addEventListener("click", escutarMusica);
proximaButton.addEventListener("click", proximaPergunta);
enviarButton.addEventListener("click", enviarResposta);

let rodada = 0;

function iniciarJogo() { // vai dar inicio ao jogo, faz o botão 'Começar' desaparecer.
    musicPlayer.shuffleMusicArray()
    comecarButton.classList.add('hide');
    welcomeText.classList.add('hide');
    jogoMain.classList.remove('hide');
    enviarButton.classList.remove('hide');
    proximaButton.classList.remove('hide');
    console.log(musicPlayer.shuffleMusicArray())
}

function escutarMusica() {
    let index = rodada;
    let audio = new Audio(musicPlayer.playSong(index));
    audio.play();
}

function nomeMusica() {
}


function nomeArtista() {
}

function enviarResposta() {
    // Resposta que o jogador escolher(ou escrever)?
}

function proximaPergunta() {
    rodada++;
}

