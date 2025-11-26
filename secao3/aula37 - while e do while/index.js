// const nome = 'Mateus';
// let i = 0;
 
// while(i < nome.length){
//     console.log(nome[i]);
//     i++
// }

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 0;
const max = 50;
let rand = random(min, max);

do{
    rand = random(min, max);
    console.log(rand);
}while(rand !== 22);

// while(rand !== 22){
//     rand = random(min, max);
//     console.log(rand);
// }