 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 for (let numero of numeros){
    if(numero === 2){
        console.log('Pulei o numero 2')
        continue;
    }

    if(numero === 8){
        console.log('Parei o código no 8 porque era o valor que eu queria'); 
        break;
    }

     console.log(numero);
 }