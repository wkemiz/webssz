let numero = prompt("Digite um número");

function verificaParOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(verificaParOuImpar(numero));