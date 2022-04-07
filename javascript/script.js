const musicPlayer = new Player;
const comecarButton = document.getElementById('startbtn');
const welcomeText = document.getElementById('instructionsText');
const jogoMain = document.getElementById('question-container');
const enviarButton = document.getElementById('submitbtn');
const proximaButton = document.getElementById('nextbtn');
const ouvirButton = document.getElementById('listenbtn');
const respostaTitle = document.getElementById('repostaTitulo');
const respostaPerformer = document.getElementById('repostaArtista');
const pontosTotal = document.getElementById('points');
const errouAmbas = document.getElementById('errou-tudo');
const acertouUma = document.getElementById('acertou-uma');
const acertouAmbas = document.getElementById('acertou-ambas');
const contaRodadas = document.getElementById('contarodadas')
const finalText = document.getElementById('fimtxt')

comecarButton.addEventListener("click", iniciarJogo);
ouvirButton.addEventListener("click", escutarMusica);
proximaButton.addEventListener("click", proximaPergunta);
enviarButton.addEventListener("click", enviarResposta);

function iniciarJogo() { // vai dar inicio ao jogo, faz o botão 'Começar' desaparecer.
    musicPlayer.shuffleMusicArray()
    comecarButton.classList.add('hide');
    welcomeText.classList.add('hide');
    jogoMain.classList.remove('hide');
    enviarButton.classList.remove('hide');
    pontosTotal.classList.remove('hide');
    console.log(musicPlayer.shuffleMusicArray())
}

function escutarMusica() {
    let audio = new Audio(musicPlayer.playSong(musicPlayer.rodada));
    audio.play(); 
}

function enviarResposta() {
    if ((respostaTitle.value.toUpperCase() === musicPlayer.correctTitle(musicPlayer.rodada).toUpperCase()) && (respostaPerformer.value.toUpperCase() === musicPlayer.correctPerformer(musicPlayer.rodada).toUpperCase())) {
        musicPlayer.points += 10;
        pontosTotal.innerText = musicPlayer.points;
        console.log("acertei as duas");
        acertouAmbas.classList.remove('hide');
    } else if ((respostaTitle.value.toUpperCase() === musicPlayer.correctTitle(musicPlayer.rodada).toUpperCase()) || (respostaPerformer.value.toUpperCase() === musicPlayer.correctPerformer(musicPlayer.rodada).toUpperCase())) {
        console.log("Acertei apenas uma");
        musicPlayer.points += 5;
        pontosTotal.innerText = musicPlayer.points;
        acertouUma.classList.remove('hide');
    } else {
        errouAmbas.classList.remove('hide');
    }
    enviarButton.classList.add('hide');
    proximaButton.classList.remove('hide');
}

function proximaPergunta() {
    musicPlayer.rodada++;
    respostaTitle.value = "";
    respostaPerformer.value = "";
    enviarButton.classList.remove('hide');
    proximaButton.classList.add('hide');
    acertouAmbas.classList.add('hide');
    acertouUma.classList.add('hide');
    errouAmbas.classList.add('hide');
    contaRodadas.innerText = 10 - musicPlayer.rodada;
    if (musicPlayer.rodada === 10) {
        gameOver();
    }
}

// const relogio = setTimeout(gameOver(), 300000);

function gameOver() {
    jogoMain.classList.add('hide');
    enviarButton.classList.add('hide');
    finalText.classList.remove('hide');
    pontosTotal.innerText = musicPlayer.points;
}

