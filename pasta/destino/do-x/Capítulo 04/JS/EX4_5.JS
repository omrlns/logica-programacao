//cria referência ao form e ao elemento onde será exibido a resposta
//obtém elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evota o refresh da página
    const numero = Number(frm.inNumero.value) //obtém o número digitado no form
    const raiz = Math.sqrt(numero) //calcula a raiz quadrada do número
    if (Number.isInteger(raiz)) { //se o valor da rauz for um número inteiro
        resp.innerText = `a raiz quadrada de ${numero} é ${raiz}.` //mostra a raiz
    } else { //senão,
        resp.innerText = `não a raiz exata para ${numero}` //mostra a mensagem
    }
})
