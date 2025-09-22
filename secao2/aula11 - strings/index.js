// posição:      01234567
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString[4]) // Pega o valor daquela posição
console.log(umaString.charAt(7)) // Pega o valor daquela posição
console.log(umaString.concat(` em um lindo dia`)) // Concatena
console.log(umaString + ' em um lindo dia') // Concatena
console.log(`${umaString} em um lindo dia`) // Concatena
console.log(umaString.replace('Um', 'Outro')) // Troca os valores
console.log(umaString.indexOf('texto')) // Pesquisa um indice
console.log(umaString.indexOf('Um', 3)) // Pesquisa um indice a partir da posição solicitada
console.log(umaString.lastIndexOf('texto')) // Pesquisa um indice, começando do fim pro começo
console.log(umaString.lastIndexOf('t', 2)) // Pesquisa um indice a partir da posição solicitada, começando do fim pro começo
console.log(umaString.match(/[a-z]/g)) // É uma expressão regular que busca e retorna todas as letras em uma array,  o "g" é referente a global
console.log(umaString.search(/e/g)) // Ele busca o indice e retorna a posição dele, o "g" é referente a global
console.log(umaString.replace('O', 'Um')) // Troca os valores
console.log(umaString.replace(/r/, '#')) // Troca o primeiro "r" 
console.log(umaString.replace(/r/g, '#')) // Troca todos os "r" 
console.log(umaString.length) // Retorna o tamanho da string
console.log(umaString.slice(2, 6)) // "Fatia" a string e retorna o valor solicitado baseado nas posições
console.log(umaString.slice(-3)) // "Fatia" a string e retorna o valor solicitado baseado nas posições começando do final pro começo
console.log(umaString.slice(12)) // "Fatia" a string e retorna o valor solicitado baseado na posição inicial informada até o fim da string
console.log(umaString.split('r')) // Retorna um array com os valores da string sem a informação solicitada
console.log(umaString.split(' ', 3)) // É posível limitar em quantas vezes isso acontece
console.log(umaString.toUpperCase()) // Deixa tudo em maisculo
console.log(umaString.toLowerCase()) // Deixa tudo em minusculo