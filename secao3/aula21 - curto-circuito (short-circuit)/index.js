/* 
&& -> false && true -> false "o valor mesmo"
|| -> 
FALSY (Avaliam em falso quando necessário / fingem ser valor em falso), qualquer coisa diferente dos valores abaixo, avaliam em true
false é falso literal
0
'', "", ```
null / undefined
NaN
*/
// console.log('Mateus Zeviani' && 0 && 'Gabryelle'); // Avalia o valor em falso
// console.log('Mateus' && 'Gabryelle'); // Verdadeiro
// console.log('Mateus' && "" && 'Gabryelle'); // Avalia o valor em falso
// console.log('Mateus' && undefined   && 'Gabryelle'); // Avalia o valor em falso

// function falaOi(){
//     return 'Oi';
// }
// const vaiExecutar = false;
// console.log(vaiExecutar && falaOi()) // Não executa nada porque o vaiExecutar é falso

// let corUsuario = null;
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao); // Retorna "preto" porque o usuário não escolheu nada (false)

// corUsuario = 'vermelho';
// const corPadrao2 = corUsuario || 'preto'
// console.log(corPadrao2); //Retorna "vermelho" porque o usuário escolheu uma cor (true)

const a = 0;
const b = null;
const c = 'false'; // Aqui é verdadeiro porque é uam string ('...')
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // Vai retornar 'false' porque é verdadeiro