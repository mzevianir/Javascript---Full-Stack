 /*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)  **** Não utilizar ****
===  igual estrita (valor e tipo)
! = diferente (valor) **** não utilizar ****
! == diferentes estrito
 */
const num1 = 10;
const num2 = '10';

console.log(comp = num1 == num2); // Falso true porque valida somente o valor
console.log(comp = num1 === num2); // False porque valida o tipo e o valor