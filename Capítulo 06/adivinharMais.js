let caixaDoPalpite = document.getElementById("palpite");
let btnAdivinhar = document.getElementById("adivinhar");

btnAdivinhar.onclick = btnClicado;

function btnClicado() {
    alert(caixaDoPalpite.value);
}

