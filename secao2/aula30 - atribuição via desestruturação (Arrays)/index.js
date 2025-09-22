// let a = 'A'; // B
// let b = 'B'; // B
// let c = 'C'; // B

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

//               0  1  2  3  4  5  6  7  8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const primeiroNumero = numeros [0];
// No caso todos os itens do array serão const também
const [primeiroNumero, segundoNumero, terceiroNumero, ,quintoNumero, , setimoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
// O "..." antes do resto é um operador chamada rest que busca o resto do array e retorna o resultado em uma array
// Porém pode ser usado como spread também que é usado no final por exemplo resto...
console.log(resto);
// Pode pular o valor da array, usando espaços vazios entre virgulas ","
console.log(quintoNumero, setimoNumero);

// É possível fazer uma lista dentro da lista
//                   0          1          2
//                0  1  2     0  1  2    0  1  2
const numeros1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Aqui estou chamando o item da posição 1 da lista principal e o item da posição 2 de dentro da lista chamada
// No caso foi chamado o item da posição 2 dentro da lista da posição 1 
console.log(numeros1[1][2]);

// Aqui foi usado as virgulas para "pular as posições" e chegar na posição do resultado desejado
const [,[,,seis]] = numeros1;
console.log(seis);

// Aqui foi colocado as listas nas váriaveis
const [lista1, lista2, lista3] = numeros1;
// E aqui foi consulado a posição desejada da lista que foi vinculada na variável
console.log(lista3[2]);