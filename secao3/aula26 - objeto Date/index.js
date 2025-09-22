// const tresHoras = 60*60*3*1000; // Trës horas do fuso horário para arrendondar para o horário correto,
// const umDia = 60*60*24*1000; // Foi feito *1000 porque é em milesimos de segundos
// // Sempre que utilizar a palavra "new" estou declarando uma função construtora e ela sempre começa com a primeira letra Maiscula
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
// Formato para enviar uma nova data a, m, d, h, min, s, ms
// const data = new Date(2019, 3, 20, 15, 14, 27, 999); // As horas sao separadas por "," e o mês começa do "0"
// Se for enviado uma string, o mês é enviado normalmente
// const data = new Date('1999-06-22 10:30:59.999');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() +1 );
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0-Domingo, 6-Sábado
// console.log(data.toString());
// console.log(Date.now()); // Data agora em milesimos de segundos

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data1){
    const dia = zeroAEsquerda(data1.getDate());
    const mes = zeroAEsquerda(data1.getMonth() + 1);
    const ano = zeroAEsquerda(data1.getFullYear());
    const hora = zeroAEsquerda(data1.getHours());
    const min = zeroAEsquerda(data1.getMinutes());
    const seg = zeroAEsquerda(data1.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data1 = new Date ();
const dataBrasil = formataData(data1);
console.log(dataBrasil);