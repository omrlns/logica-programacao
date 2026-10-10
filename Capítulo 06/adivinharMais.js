let caixaDoPalpite = document.getElementById("palpite");
let btnAdivinhar = document.getElementById("adivinhar");

let segredos = []; 

for (let i = 0; i < 5; i++) {
    let segredo = Number((Math.random() * 10).toFixed(0));
    segredos.push(segredo);
}

console.log(segredos);

btnAdivinhar.onclick = btnClicado;

function btnClicado() {
    if (caixaDoPalpite.value in segredos) {
        alert("Parabéns! Você acertou o número secreto!");
    } else {
        alert("Errou! Tente novamente!");
    }
    caixaDoPalpite.value = "";
}

