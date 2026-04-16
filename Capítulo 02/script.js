import { escrever } from "./utilitarios.js";

escrever("Olá mundo!", "resultado");
escrever("Esse é o meu segundo programa!", "resultado");
escrever(`A minhda idade é: ${22}`, "resultado");
escrever(`${(25 + 25) + "25" + "25"}`, "resultado");
escrever(`Eu nasci em ${2026 - 23}`, "resultado");
escrever(`A soma das primeiras três dezenas é: ${10 + 20 + 30}`, "resultado");
escrever(`A média das primeiras três dezenas é: ${(10 + 20 + 30) / 3}`, "resultado");
escrever(`A soma das nossas idades é: ${22 + 20 + 21}`, "resultado");
escrever(`A média das nossas idades é: ${((22 + 20 + 21) / 3)}`, "resultado");
escrever(`O Marlon tem ${22} anos e o seu irmão Gustavo tem ${20} anos.`, "resultado");
escrever(`A diferença de idade entre os dois irmãos é de ${2} anos.`, "resultado");
escrever(`Em média, um casal gera um filho aos 28 anos de idade, então podemos considerar que desde o "Ano 0" se passaram ${(2026 / 28).toFixed(0)} gerações.`, "resultado");

var ano = 2026; var marlonIdade = 23; var gustavoIdade = 21; var taiseIdade = 20;
var totalIdades = marlonIdade + gustavoIdade + taiseIdade;
var mediaIdades = ((marlonIdade + gustavoIdade + taiseIdade) / 3).toFixed(0);

escrever(`O Marlon nasceu em ${ano - marlonIdade}. O Gustavo nasceu em ${ano - gustavoIdade}. A Taíse nasceu em ${ano - taiseIdade}.`, "resultado");
escrever(`A soma das idades é: ${totalIdades}`, "resultado");
escrever(`A média das idades é: ${mediaIdades}`, "resultado");