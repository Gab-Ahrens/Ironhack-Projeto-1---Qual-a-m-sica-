const comecarButton = document.getElementById('startbtn');
const welcomeText = document.getElementById('instructionsText')
const jogoMain = document.getElementById('question-container')
const enviarButton = document.getElementById('submitbtn')
const proximaButton = document.getElementById('nextbtn')


comecarButton.addEventListener("click", iniciarJogo)

function iniciarJogo() { // vai dar inicio ao jogo, faz o botão 'Começar' desaparecer.
    comecarButton.classList.add('hide');
    welcomeText.classList.add('hide');
    jogoMain.classList.remove('hide');
    enviarButton.classList.remove('hide');
    proximaButton.classList.remove('hide');
}

function proximaPergunta() {
    // Passa para a próxima pergunta
}

function resposta() {
    // Resposta que o jogador escolher(ou escrever)
}