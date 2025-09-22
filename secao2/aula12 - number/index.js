// Padrão seguido pelo JS é o IEEE 754-2008
let num1 = 0.7; // Number
let num2 = 0.1; // Number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
console.log(num1); // 0.999999...

num1 = num1.toFixed(2)
console.log(num1); // 1.00 porque arredonda
console.log(Number.isInteger(num1)); // Como verifica os binários, vai identificar que ainda não é um inteiro

num1 = parseFloat(num1);
console.log(num1); // 1
console.log(Number.isInteger(num1)); // Como verifica os binários, vai identificar que agora é um inteiro

//console.log(num1.toString() + num2); // Virou uma string concatenada com um numero
//num1 = num1.toString(); // O num1 virou uma string
//console.log(num1.toString(2)); // Transforma em binario
//console.log(num1.toFixed(2)); // Retorna 2 numeros nas casas decimais
//console.log(Number.isInteger(num1)); // Retorna verdadeiro ou falso se o numero é inteiro ou não
//let temp = num1 * 'Ola';
//console.log(temp); // Retorna NaN (Not a Number)
//console.log(Number.isNaN(temp)); // Retorna verdadeiro ou falso se for NaN ou não