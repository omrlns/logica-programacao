export function escrever(texto) {
    // seleciona o elemento que criamos no html
    const saida = document.getElementById("resultado");
    // adiciona o texto dentro do elemento e quebra a linha
    saida.innerHTML += texto + "<hr>"
}

escrever("Olá mundo!");
escrever("Esse é o meu segundo programa!");
escrever(`A minhda idade é: ${22}`);
escrever(`${(25 + 25) + "25" + "25"}`);
escrever(`Eu nasci em ${2026 - 23}`);
escrever(`A soma das primeiras três dezenas é: ${10 + 20 + 30}`);
escrever(`A média das primeiras três dezenas é: ${(10 + 20 + 30) / 3}`);
escrever(`A soma das nossas idades é: ${22 + 20 + 21}`);
escrever(`A média das nossas idades é: ${((22 + 20 + 21) / 3)}`);
escrever(`O Marlon tem ${22} anos e o seu irmão Gustavo tem ${20} anos.`);
escrever(`A diferença de idade entre os dois irmãos é de ${2} anos.`);
escrever(`Em média, um casal gera um filho aos 28 anos de idade, então podemos considerar que desde o "Ano 0" se passaram ${(2026 / 28).toFixed(0)} gerações.`);

var ano = 2026;
var marlonIdade = 23; 
var gustavoIdade = 21; 
var taiseIdade = 20;
var totalIdades = marlonIdade + gustavoIdade + taiseIdade;
var mediaIdades = ((marlonIdade + gustavoIdade + taiseIdade) / 3).toFixed(0);

escrever(`O Marlon nasceu em ${ano - marlonIdade}. O Gustavo nasceu em ${ano - gustavoIdade}. A Taíse nasceu em ${ano - taiseIdade}.`);
escrever(`A soma das idades é: ${totalIdades}`);
escrever(`A média das idades é: ${mediaIdades}`);