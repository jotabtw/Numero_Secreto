function verificaSeOChuteEValido(chute){
    const numero = +chute

    if(chuteValorInvalido(numero)){
        elementoChute.innerHTML += `<div> Valor Inválido: Necessário informar apenas números de 1 a 1000 </div>`
    return
    }

    if (numeroForMaiorOuMenorPermitido(numero))
    {
        elementoChute.innerHTML += `<div> Valor Inválido: O número precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `<h1>Parabéns!! você acertou!</h1>
        <h3> O número secreto era ${numeroSecreto}</h3>
        <button id='botao'>Jogar Novamente</button> 

        `

        } else if (numero < numeroSecreto){
        elementoChute.innerHTML += `<div>o número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
    else {
        elementoChute.innerHTML += `<div>o número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }

function chuteValorInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorPermitido(numero){
        return numero > maiorValor || numero < menorValor 
    }
}