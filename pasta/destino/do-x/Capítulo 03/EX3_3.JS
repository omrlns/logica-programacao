const prompt = require("prompt-sync")() //adiciona o pacote para entrada de dados
//lê os dados de entrada
const salario = Number(prompt("informe o salário do funcionário (R$): "))
const tempo = Number(prompt("informe o tempo de trabalho deste mesmo funcionário (tempo em anos): "))

const quadrienios = Math.floor(tempo / 4) //calcula os quadrienios
const acrescimo = salario * quadrienios / 100 //... e o acréscimo
//exibe as respostas
console.log(`quadriênios: ${quadrienios}`)
console.log(`o salári final do usuário será R$${(salario+acrescimo).toFixed(2)}`)
