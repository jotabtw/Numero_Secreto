const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start();
recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChuteEValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>`
}

recognition.addEventListener('end', () => recognition.start())

document.body.addEventListener('click', (evento) => {
    if (evento.target.id == 'botao'){
        window.location.reload();
    }
})