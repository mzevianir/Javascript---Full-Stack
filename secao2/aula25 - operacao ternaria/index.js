// Operações ternárias são represenatdas por "?" ou ":"
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000){
//     console.log("Usuário vip");
// }else{
//     console.log("Usuario normal");
// }