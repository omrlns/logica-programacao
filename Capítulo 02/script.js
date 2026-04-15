// alert("Olá mundo!");
// alert("Esse é o meu segundo programa!");

function pulaLinha() {
    document.write("<br>");
}

document.write("Olá mundo!"); // isso escreve diretamente no index.html
pulaLinha()
document.write("Esse é o meu segundo programa!");

document.write("<br>A minha idade é: ");
document.write(22);
pulaLinha()

document.write(25 + 25); // resultado = 50 (soma dos valores)
document.write("25" + "25"); // resultado = 2525 (concatenação dos valores)
pulaLinha()

document.write("Eu nasci em ");
document.write(2026 - 23);
pulaLinha()

document.write("A soma das primeiras três dezenas é: ");
document.write(10 + 20 + 30);
pulaLinha()

document.write("A média das primeiras três dezenas é: ");
document.write((10 + 20 + 30) / 3);
pulaLinha()

document.write("A minha idade é " + 22);
pulaLinha()
document.write("A soma das nossas idades é: " + (22 + 20 + 21));
pulaLinha()
document.write("A média das nossas idades é: " + ((22 + 20 + 21) / 3));
pulaLinha()
document.write("Eu tenho " + 22 + " anos e o meu irmão tem " + 20 + " anos");
pulaLinha()
document.write("A diferença de idade entre nós dois é de " + (22 -  20) + " anos");
pulaLinha()
document.write("Em média, um casal gera um filho aos 28 anos de idade, então podemos considerar que desde o 'Ano 0' se passaram " + (2026 / 28).toFixed(0) + " gerações.");
pulaLinha()

var ano = 2026;
document.write("Eu nasci em " + (ano - 23));
pulaLinha()
document.write("O Gustavo nasceu em " + (ano - 21));
pulaLinha()
document.write("A Taíse nasceu em " + (ano - 20));
pulaLinha()

var marlonIdade = 22; gustavoIdade = 20; taiseIdade = 20;
var totalIdades = marlonIdade + gustavoIdade + taiseIdade;
document.write("A soma das nossas idades é: " + totalIdades);
pulaLinha()
var mediaIdades = (marlonIdade + gustavoIdade + taiseIdade) / 3;
document.write("A média das nossas idades é: " + mediaIdades.toFixed(0));