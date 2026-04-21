import { escrever } from "../Capítulo 02/utilitarios.js";

let nome = prompt("Olá! Qual é o seu nome?");
let idade = prompt(`${nome}, qual é a sua idade?`);
let diasVividos = idade * 365;
let calculoBPM = diasVividos * 24 * 60 * 80; // calcular os batimentos cardíacos do usuário considerando 24 (horas), 60 (minutos) e 80 (média de batimentos por minuto)

escrever(`Uau! ${nome}, você já viveu aproximadamente ${diasVividos} dias.`, "resultado");
escrever(`Uma curiosidade! O seu coração já bateu aproximadamente ${calculoBPM} vezes. HAJA CORAÇÃO!`, "resultado");
