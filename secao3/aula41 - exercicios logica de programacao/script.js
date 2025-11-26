// Escreva uma função que recebe um número e retorne o seguinte:
// Numero divisivel por 3 = Fizz
// Numero divisivel por 5 = Buzz
// Numero divisivel por 3 e 5 = FizzBuzz
// Numero NÃO é divisivel por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número = Retorna o que recebeu de informação
// Use a função com números de 0 a 100

function verificaNumero(numero) {
    if (typeof numero !== 'number') {
        return `Não informou um número, você informou ${numero}`;
    }
}

function divideNumero(numero) {
    if (typeof numero !== 'number') return verificaNumero(numero);
    if (numero === 0) return "O número informado é: 0";
    if (numero % 3 == 0 && numero % 5 == 0) return "FizzBuzz";
    if (numero % 3 == 0) return "Fizz";
    if (numero % 5 == 0) return "Buzz";
    return numero;
}

for (i = 0; i <= 100; i++) {
    console.log(divideNumero(i));
}