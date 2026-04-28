const prompt = require("prompt-sync")() //adiciona o pacote para entrada de dados
//lê os dados de entrada
const veiculo = prompt("infome o modelo do veículo: ")
const preco = Number(prompt("informe o valor do veículo (R$): "))

const entrada = preco * 0.50 //calcula o valor da entrada
const parcela = (preco * 0.50) / 12 //... e das parcelas
//exibe as respostas
console.log(`promoção: ${veiculo}`)
console.log(`entrada de R$${entrada.toFixed(2)}`)
console.log(`+12x de R$${parcela.toFixed(2)}`)

