const pessoa = {
    nome: 'Mateus',
    sobrenome: 'Zeviani',
    idade: 25,
    endereco: {
        rua: 'R. Humberto Voigt',
        numero: 70
    }
};

// const nome = pessoa.nome;
// console.log(nome);

// Atribuição via desestruturação de objeto: extraindo a propriedade nome de pessoa e criando uma variável com o mesmo nome.
// O " '' " em branco no sobrenome é um valor padrão para caso não tenha essa chave ou nenhuma informação nela
// No nome foi especificado a chave "nome:"" e alterado o noome da variavel, agora  chamada "n"
// No endereço foi criado uma váriavel e foi criado um objeto nela
const { nome: n, sobrenome = '', endereco: {rua: r = '', numero}, ...resto } = pessoa;
console.log(n, sobrenome, r, numero, resto);