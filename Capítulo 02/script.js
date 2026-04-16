// alert("Olá mundo!");
// alert("Esse é o meu segundo programa!");

function pularLinha() {
    document.write("<hr>");
}

function escrever(texto) {
    document.write(texto);
    pularLinha();
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
escrever(`A diferença de idade entre os dois irmãos é de ${2} anos.`)
escrever(`Em média, um casal gera um filho aos 28 anos de idade, então podemos considerar que desde o "Ano 0" se passaram ${(2026 / 28).toFixed(0)} gerações.`)

var ano = 2026;
document.write("Eu nasci em " + (ano - 23));
pularLinha()
document.write("O Gustavo nasceu em " + (ano - 21));
pularLinha()
document.write("A Taíse nasceu em " + (ano - 20));
pularLinha()

var marlonIdade = 22; gustavoIdade = 20; taiseIdade = 20;
var totalIdades = marlonIdade + gustavoIdade + taiseIdade;
document.write("A soma das nossas idades é: " + totalIdades);
pularLinha()
var mediaIdades = (marlonIdade + gustavoIdade + taiseIdade) / 3;
document.write("A média das nossas idades é: " + mediaIdades.toFixed(0));