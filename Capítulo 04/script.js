import { escrever } from "../Capítulo 02/utilitarios.js"

let nVitoriasA = parseInt(prompt("Quantos jogos o SPFC venceu?"));
let nEmpatesA = parseInt(prompt("Quantos jogos o SPFC empatou?"));
let nVitoriasB = parseInt(prompt("Quantos jogos o SCCP venceu?"));
let nEmpatesB = parseInt(prompt("Quantos jogos o SCCP empatou?"));

function calcularPontos(nVitorias, nEmpates) {
    return (nVitorias * 3) + nEmpates;
}

let pontosTimeA = calcularPontos(nVitoriasA, nEmpatesA);
let pontosTimeB = calcularPontos(nVitoriasB, nEmpatesB);

escrever(`O SPFC está com ${pontosTimeA} pontos.`);
escrever(`O SCCP está com ${pontosTimeB} pontos.`);

if (pontosTimeA > pontosTimeB) {
    escrever(`O SPFC está com mais pontos e melhor posicionado no campeonato do que o SCCP!`);
} else if (pontosTimeA == pontosTimeB) {
    escrever(`O SPFC e o SCCP estão empatados no campeonato!`);
} else {
    escrever(`A campanha do SCCP é melhor do que a do SPFC.`);
}