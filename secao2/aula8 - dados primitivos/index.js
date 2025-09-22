/*
 - Aritméticos:
    Adição / Concatenação (+);
    Subtração (-);
    Multiplicação (*);
    Divisão (/);
    Potenciação (**);
    Resto da divisão (%);
 -Ordem de preferencia para ser executado
    ()
    **
    *, / e %
    + -
*/

const num1 = 2;
const num2 = 10;
resultado = num1 ** num2; 

console.log(resultado);

let contador = 1;
contador ++; // 2
contador ++; // 3
++contador; // 4
++contador; // 5

console.log(contador);

// NaN - Not a number, parseInt (inteiro), parseFloat (decimais), Number (número)
const teste = '7';
let teste2 = Number(teste);

console.log(teste2);