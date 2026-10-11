let sorteados = [];

function adicionarSorteado() {
    let numero = document.getElementById("numero").value;
    for (let i = 0; i < sorteados.length; i++ ) {
        if(sorteados[i] == numero ) {
            alert("O número já foi sorteado!");
            return;
        }
    }
    sorteados.push(numero);
    console.log(sorteados);
}

let botao = document.getElementById("verificar");
botao.onclick = adicionarSorteado;