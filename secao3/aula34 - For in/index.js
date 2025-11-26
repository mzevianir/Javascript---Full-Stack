// For in -> lê os indices ou chaves do objeto

// const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

// for (let i in frutas){
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Mateus',
    sobrenome: 'Zeviani',
    idade: 26
};

// // Essas são formas de acessar o resultado da chave
// // Essa serve quando você sabe exatamente qual chave quer acessar.
// console.log(pessoa.nome);
// // Aqui foi criado uma váriavel dinâmica pra pegar o resultado da chave nome
// const chave = 'nome';
// console.log(pessoa[chave]);

for (let chave in pessoa){
    // Aqui o for vai rodar em cada chave, independente de quais e quantas sejan
    console.log(pessoa[chave]);
}