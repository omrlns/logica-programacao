import { escrever } from "../Capítulo 02/utilitarios.js";

let nome = prompt("Olá! Qual é o seu nome?");
let idade = prompt(`${nome}, qual é a sua idade?`);
// let diasVividos = idade * 365;
// let calculoBPM = diasVividos * 24 * 60 * 80; // calcular os batimentos cardíacos do usuário considerando 24 (horas), 60 (minutos) e 80 (média de batimentos por minuto)

function calcularDiasVividos(idade) {
    const diasVividos = idade * 365;
    return diasVividos;
}

function calcularBatimentos(diasVividos) {
    const batimentos = diasVividos * 24 * 60 * 80;
    return batimentos;
}

let diasVividos = calcularDiasVividos(idade);
let batimentos =  calcularBatimentos(diasVividos);

escrever(`Uau! ${nome}, você já viveu aproximadamente ${diasVividos} dias.`, "resultado");
escrever(`Uma curiosidade! O seu coração já bateu aproximadamente ${batimentos} vezes. HAJA CORAÇÃO!`, "resultado");