import { escrever, calcularIMC } from "../Capítulo 02/utilitarios.js";

let nomeUsuario = prompt("Bom dia! Qual é o seu nome?");
alert(`Prazer ${nomeUsuario}, vamos calcular o seu IMC!`);
let alturaUsuario = prompt("Qual é a sua altura?");
let pesoUsuario = prompt("E o seu peso? Nos informe, por favor.");

let imcDoUsuario = calcularIMC(pesoUsuario, alturaUsuario);
escrever(`${nomeUsuario} o seu IMC é '${imcDoUsuario}'.`, "resultado");

if (imcDoUsuario < 18.5) {
    escrever(`O seu IMC indica que você está ABAIXO do peso!`)
}

