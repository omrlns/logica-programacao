//cria referência ao form e ao elemento onde será exibido a resposta
//obtém elementos da página
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

//"ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o refresh da página
    const saque = Number(frm.inSaque.value) //obtém o valor do saque
    if (saque % 10 != 10) { //se saque não é múltipo de 10
        alert("valor invalido para notas disponíveis (R$10, R$50 e R$100)")
        frm.inSaque.focus()
    }
    const notasCem = Math.floor(saque / 100) //calcula as notas de 100
    let resto = saque % 100 //quanto sobra para pagar
    const notasCinquenta = Math.floor(resto / 50) //calcula as notas de 50
    resto = resto % 50 //quando ainda sobra
    const notasDez = Math.floor(resto / 10) //calcula as as notas de 10
    //exibe as notas se tiver
    if (notasCem > 0) {
        resp1.innerText = `Notas de R$100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de R$10: ${notasDez}`
    }

})