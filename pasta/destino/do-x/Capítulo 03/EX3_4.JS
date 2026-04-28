const prompt = require("prompt-sync")() //adiciona o pacote para entrada de dados
//lê os dados de entrada
const peso = Number(prompt("informe o peso da ração (kg): "))
const consumo = Number(prompt("informe o consumo diário (g): "))

const pesoGr = peso * 1000 //cria uma variável axuiliar pesoGr
const duracao = Math.floor(pesoGr / consumo) //cálculo das respostas
const sobra = pesoGr % consumo
//exibe as respostas
console.log(`duração: ${duracao} dias`)
console.log(`sobra: ${sobra}g`)

