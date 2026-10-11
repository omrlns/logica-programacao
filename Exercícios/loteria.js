let loteria = []; 

for (let i = 0; i < 6; i++) {
    loteria.push(Math.floor(Math.random() * 60) + 1);
}

let palpites = [];

for (let i = 0; i < 6; i++) {
    palpites.push(Number(prompt(`Digite o ${i+1}º número: `)));11
}

let acertos = 0;

for (let i = 0; i < 6; i++ ) {
    if (loteria.includes(palpites[i])) {
        acertos++
    }
}

alert(`Números sorteados: ${loteria.join(", ")}\nSeus palpites: ${palpites.join(", ")}\nVocê acertou ${acertos} número(s)!`);