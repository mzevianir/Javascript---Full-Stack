// const nome = 'Mateus Zeviani';

// for (let i = 0; i < nome.length; i++){
//     console.log(nome[i]); 
// }

// for (let i in nome){
//     console.log(nome[i]);
// }

const nomes = ['Mateus', 'Gabryelle', 'Edinei'];

// Quando usamos os outros for vem o indice e não o valor
for (let indice in nomes){
    console.log(indice);
}

// Quando usamos o For of vem o valor daquele indice, não o indice em si
for (let valor of nomes){
    console.log(valor);
}

// Aqui no caso para cada item na lista, vai passar o valor e o indice dos elementos
// A função é obrigatória no forEach para mostrar os 2
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})