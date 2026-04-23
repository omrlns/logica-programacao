import { escrever } from "../Capítulo 02/utilitarios.js";

let peso = 78;  
let altura = 1.80;
let imc = (peso / (altura * altura)).toFixed(0);

escrever(`O IMC do usuário é: ${imc}.`, "resultado");

function calcularIMC(peso, altura) {
    const imc = (peso / (altura * altura)).toFixed(0);
    return imc;
}

// calcularIMC(78, 1.80) // a ordem dos paramêtros influencia diretamente no resultado
escrever(`Resultado do IMC: ${calcularIMC(78, 1.80)}.`, "resultado");
escrever(`O usuário está "${calcularIMC(78, 1.80) - 18.5} pontos" acima do limite da magreza!`, "resultado");
escrever(`O usuário está "${calcularIMC(78, 1.80) - 35} pontos" acima do limite da obesidade severa!`, "resultado");

let nomeUsuario = prompt("Bom dia! Qual é o seu nome?");
let idadeUsuario = prompt(`Prazer ${nomeUsuario}, qual é a sua idade?`);
let alturaUsuario = prompt("Qual é a sua altura?");
let pesoUsuario = prompt("E o seu peso? Nos informe, por favor.");

let imcDoUsuario = calcularIMC(pesoUsuario, alturaUsuario);
escrever(`${nomeUsuario} o seu IMC é '${imcDoUsuario}'.`, "resultado");