import { escrever } from "../Capítulo 02/utilitarios.js"

let numeroCPU = (Math.random() * 10).toFixed(0);
alert("Eu sou a CPU e pensei em um número. Adivinhe!");
alert("Dica: é um número de 0 a 10.");

let palpite = parseInt(prompt("Qual é o seu palpite?"));

if (palpite == numeroCPU) {
    escrever(`PARABÉNS, você acertou! ${numeroCPU} foi exatamente o número que eu pensei!`);
} else if (palpite > numeroCPU) {
    escrever(`Você errou! Eu pensei em um número menor!`);
} else if (palpite < numeroCPU) {
    escrever(`Você errou! Eu pensei em um número maior!`);
}