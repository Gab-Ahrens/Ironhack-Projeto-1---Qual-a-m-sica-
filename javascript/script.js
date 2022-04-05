const musicPlayer = new Player
const comecarButton = document.getElementById('startbtn');
const welcomeText = document.getElementById('instructionsText')
const jogoMain = document.getElementById('question-container')
const enviarButton = document.getElementById('submitbtn')
const proximaButton = document.getElementById('nextbtn')
const ouvirButton = document.getElementById('listenbtn')


comecarButton.addEventListener("click", iniciarJogo);
ouvirButton.addEventListener("click", escutarMusica);
proximaButton.addEventListener("click", randomMusic);
enviarButton.addEventListener("click", enviarResposta);

function iniciarJogo() { // vai dar inicio ao jogo, faz o botão 'Começar' desaparecer.
    musicPlayer.shuffleMusicArray()
    comecarButton.classList.add('hide');
    welcomeText.classList.add('hide');
    jogoMain.classList.remove('hide');
    enviarButton.classList.remove('hide');
    proximaButton.classList.remove('hide');
    console.log(musicPlayer.shuffledMusic())
}



function randomMusic() {
    let randomSong = music[Math.floor(Math.random()*music.length)];
    return randomSong.src;

}


function escutarMusica() {
    let audio = new Audio(musicPlayer.playSong(0));
    audio.play();
    console.log(audio);
}

function nomeMusica() {
}


function nomeArtista() {
}

function enviarResposta() {
    // Resposta que o jogador escolher(ou escrever)?
}

function proximaPergunta() {
    // Passa para a próxima pergunta
}

