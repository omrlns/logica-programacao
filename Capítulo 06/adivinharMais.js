let caixaDoPalpite = document.getElementById("palpite");
let btnAdivinhar = document.getElementById("adivinhar");

let segredo = (Math.random() * 10).toFixed(0);

btnAdivinhar.onclick = btnClicado;

function btnClicado() {
    if (segredo == caixaDoPalpite.value) {
        alert("Parabéns! Você acertou o número secreto!");
    } else {
        alert("Errou! Tente novamente!")
    }
    caixaDoPalpite.value = "";
}

