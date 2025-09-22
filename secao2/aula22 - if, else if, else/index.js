/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizar a palavra else if ou else, preciso de um if antes
// Posso usar quantos if else for preciso no bloco
// Só posso ter um else na checagem

const hora = 24;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
}else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
}else if (hora >= 17 && hora <= 23){
    console.log('Boa noite');
}else{
    console.log('Que porra de horário é esse parça');
}