let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
let varAux;

varAux = varA;
varA = varB;
varB = varC;
varC = varAux;
console.log(varA, varB, varC);

let teste1 = 'A' // B
let teste2 = 'B' // C
let teste3 = 'C' // A

[teste1, teste2, teste3] = [teste2, teste3, teste1];

console.log(teste1, teste2, teste3);