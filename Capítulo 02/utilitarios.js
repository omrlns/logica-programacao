export function escrever(texto, idElemento) {
    // seleciona o elemento que criamos no html
    const saida = document.getElementById(idElemento);
    // adiciona o texto dentro do elemento e quebra a linha
    saida.innerHTML += texto + "<hr>";
}