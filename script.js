let numero = prompt("Digite um número");

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

tabuada(numero);