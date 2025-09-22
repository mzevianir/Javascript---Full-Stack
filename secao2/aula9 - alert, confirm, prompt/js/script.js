const num1 = prompt('Digite um numero'); // Vem como uma strig por padrão
const num2 = prompt('Digite outro numero');
const resultado = parseFloat(num1) + Number(num2); // Precisa converter para somar corretamente e não concatenar

alert(`O resultado é: ${resultado}`);