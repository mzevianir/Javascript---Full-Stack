// const pessoa1 = {
//     nome: 'Mateus',
//     sobrenome: 'Zeviani',
//     idade: 26
// };
// const pessoa2 = {
//     nome: 'Mateus',
//     sobrenome: 'Zeviani',
//     idade: 26
// };
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);


// function criaPessoa (nome, sobrenome, idade) {
//     return  {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }
// const pessoa1 = criaPessoa ('mateus', 'zeviani', 25);
// const pessoa2 = criaPessoa ('gabrielly', 'voigt', 22);
// const pessoa3 = criaPessoa ('ilda', 'zeviani', 53);

// console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
// console.log(pessoa1.sobrenome, pessoa2.sobrenome);
// console.log(pessoa1.idade);

const pessoa1 = {
    nome: 'Mateus',
    sobrenome: 'Zeviani',
    idade: 25,

    // Função dentro do objeto, dessa forma ela vira um metódo
    // this NESSE contexto atual refere a idade desse objeto/pessoa
    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();