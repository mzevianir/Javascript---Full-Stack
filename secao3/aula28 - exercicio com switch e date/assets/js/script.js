function pegaDiaDaSemanaTexto(diaDaSemana){
    switch (diaDaSemana){
        case 0:
            diaDaSemana = 'domingo';
            return diaDaSemana;
        case 1:
            diaDaSemana = 'segunda-feira';
            return diaDaSemana;
        case 2:
            diaDaSemana = 'terça-feira';
            return diaDaSemana;
        case 3:
            diaDaSemana = 'quarta-feira';
            return diaDaSemana;
        case 4:
            diaDaSemana = 'quinta-feira';
            return diaDaSemana;
        case 5:
            diaDaSemana = 'sexta-feira';
            return diaDaSemana;
        case 6:
            diaDaSemana = 'sábado';
            return diaDaSemana;
        default:
            console.log('Esse dia da semana não é válido');
    }
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    return `${dia} de ${new Date(ano, mes, dia).toLocaleString('pt-br', {month: 'long'})} de ${ano} <br> ${hora}:${min}`
}

const data = new Date();
const diaDaSemana = data.getDay();
const dataFormatada = formataData(data); 
const siteData = document.querySelector('h1');
siteData.innerHTML = `${pegaDiaDaSemanaTexto(diaDaSemana)} ${dataFormatada}`;
