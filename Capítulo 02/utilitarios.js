export function escrever(texto, idElemento="resultado") {
    // seleciona o elemento que criamos no html
    const saida = document.getElementById(idElemento);
    // adiciona o texto dentro do elemento e quebra a linha
    saida.innerHTML += texto + "<hr>";
}

export function calcularIMC(peso, altura) {
    const imc = (peso / (altura * altura)).toFixed(0);
    return imc;
}