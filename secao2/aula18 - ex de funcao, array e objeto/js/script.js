function meuEscopo() {
    // Poderia escolher o form pelo nome da tag ('form')', class('.form') utilizando o . antes ou pelo id ('#form') utilizando a # e o nome do id  
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento){
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado');
    // };

    // let contador = 1;
    // function recebeEventoForm (evento){
    //     evento.preventDefault();
    //     console.log(`Form não foi enviado ${contador}`);
    //     contador++
    // }

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value,
            peso: peso.value
        });

        const ultimaPessoa = pessoas[pessoas.length - 1];

        resultado.innerHTML += `Nome: ${ultimaPessoa.nome}, Sobrenome: ${ultimaPessoa.sobrenome}, Altura: ${ultimaPessoa.altura}, Peso: ${ultimaPessoa.peso} <br><br>`;
        console.log(pessoas);1 
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();