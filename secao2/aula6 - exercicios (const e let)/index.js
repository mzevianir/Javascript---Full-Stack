const nome = 'Mateus Zeviani';
const sobrenome = 'Rodrigues'
const idade = 26;
const peso = 84;
const altura = 1.83;
let imc; // peso / (altura * altura)
let anoNascimento;
let anoAtual = 2025;

imc = peso / (altura*altura);
anoNascimento = anoAtual - idade;

//template string
console.log(`${nome} ${sobrenome} tem ${idade} pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);