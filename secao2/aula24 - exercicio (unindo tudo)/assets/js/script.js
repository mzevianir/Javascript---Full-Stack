const form = document.querySelector('#formulario');

// O "e" é de "evento", então da pra abreviar dessa forma
// Essa função pega o valor informado pelo usuário em uma const e transforma em numero em outra const somente o valor e não o campo em si
form.addEventListener('submit', function (e){
    e.preventDefault();
    // O "e.target." vai me receber e informar o elemento que está recebendo o evento
    const inputPeso = e.target.querySelector('#peso'); 
    const inputAltura = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Se o peso NÃO for verdadeiro, no caso retornar NaN, cai nos blocos dos if.
    if(!peso){
        // Chama a função setResultado()
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        // Chama a função setResultado()
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} ${nivelImc}`;
    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if( imc < 18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(){
    // O "p" é abreviação de paragrafo, então está sendo criado um paragrafo
    const p = document.createElement('p');
    return p;
}

// O "msg" é abreviação de "mensagem" e o que for enviado de texto será exibido no resultado e p "isValid" é pra ver se é verdadeiro ou falso
function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    // O appendChild() cria um filho no html
    resultado.appendChild(p)
}
