import { escrever } from "../Capítulo 02/utilitarios.js"

let nVitorias = parseInt(prompt("Quantos jogos o SPFC venceu?"));
let nEmpates = parseInt(prompt("Quantos jogos o SPFC empatou?"));
let pontos = (nVitorias * 3) + nEmpates;

escrever(`O SPFC está com ${pontos} pontos.`);

if (pontos > 12) { // na data de hoje, 22/04/2026 o SCCP se encontra com 12 pontos na 17ª posição do campeonato
    escrever(`O SPFC está com mais pontos e melhor posicionado no campeonato do que o SCCP!`);
} else if (pontos == 12) {
    escrever(`O SPFC e o SCCP estão empatados no campeonato!`);
} else {
    escrever(`A campanha do SCCP é melhor do que a do SPFC.`);
}
