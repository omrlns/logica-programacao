import { escrever } from "../Capítulo 02/utilitarios.js"

let nVitoriasA = parseInt(prompt("Quantos jogos o SPFC venceu?"));
let nEmpatesA = parseInt(prompt("Quantos jogos o SPFC empatou?"));
let nDerrotasA = parseInt(prompt("Quantos jogos o SPFC perdeu?"));
let nVitoriasB = parseInt(prompt("Quantos jogos o SCCP venceu?"));
let nEmpatesB = parseInt(prompt("Quantos jogos o SCCP empatou?"));
let nDerrotasB = parseInt(prompt("Quantos jogos o SCCP perdeu?"));

function calcularPontos(nVitorias, nEmpates, nDerrotas) {
    return ((nVitorias * 3) + nEmpates) - nDerrotas;
}

let pontosTimeA = calcularPontos(nVitoriasA, nEmpatesA, nDerrotasA);
let pontosTimeB = calcularPontos(nVitoriasB, nEmpatesB, nDerrotasB);

escrever(`O SPFC está com ${pontosTimeA} pontos.`);
escrever(`O SCCP está com ${pontosTimeB} pontos.`);

if (pontosTimeA > pontosTimeB) {
    escrever(`O SPFC está com mais pontos e melhor posicionado no campeonato do que o SCCP!`);
} else if (pontosTimeA == pontosTimeB) {
    escrever(`O SPFC e o SCCP estão empatados no campeonato!`);
} else {
    escrever(`A campanha do SCCP é melhor do que a do SPFC.`);
}