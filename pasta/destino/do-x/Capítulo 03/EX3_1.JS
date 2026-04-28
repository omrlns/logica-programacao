const prompt = require("prompt-sync")() //adiciona o pacote para entrada de dados
//lê os números
const num1 = Number(prompt("digite o 1º número: "))
const num2 = Number(prompt("digite o 2º número: "))
const soma = num1 + num2 //calcula
console.log(`a soma dos dois números é igual a ${soma}`) //exibe o resultado
