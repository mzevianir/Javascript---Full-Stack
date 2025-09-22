/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol);
São TIPOS de dados imutáveis, é possível mudar/trocar o valor da váriavel. 
*/

let a = 'A';
let b = a;
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);

/*
Referência (mutável) - array, object, function - Passados por referência
*/
let a1 = [1, 2, 3];
let b1 = [...a1 ];
let c1 = b1;
console.log(a1, b1);
a1.push(4);
console.log(a1, b1);
b1.pop();
console.log(a1, b1);
a1.push('Luiz')
console.log(c1);

const a2 = {
    nome: 'Gaby',
    Sobrenome: 'Zeviani'
};
const b2 = a2;
console.log(a2, b2);

const a3 = {
    nome: 'Mateus',
    Sobrenome: 'Zeviani'
};
const b3 = {...a3};
a3.nome = 'Gaby';
console.log(a3, b3);