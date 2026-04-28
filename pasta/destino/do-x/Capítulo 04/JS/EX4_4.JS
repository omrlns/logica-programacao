//cria referência ao form e ao elemento onde será exibido a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o refresh da página
    //obtém e converte o conteúdo do campo inHoraBr
    const horaBr = Number(frm.inHoraBr.value)
    let horaFranca = horaBr + 5 //calcula o horário na frança
    if (horaFranca > 24) { //se passar das 24h na frança
        horaFranca = horaFranca - 24 //...subtrai 24
    }
    //exibi a resposta (altera o contéudo do elemento h3 da página)
    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
    
})