function mostraHora(){
    let data = new Date ();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// Aqui foi feito uma função que vai ser executada a cada 1 segundo
const timer = setInterval(() => console.log(mostraHora()), 1000);

// Aqui foi feito uma função que vai ser executada a cada 3 segundos, que no caso é parar a função acima.
setTimeout(() => clearInterval(timer), 3000);

setTimeout(() => console.log('Criei uma função que vai ser executada após 5 segundos e exibe essa mensagem'), 5000);