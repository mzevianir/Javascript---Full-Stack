const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';

var nome2 = 'Redeclarado' // Redeclarado

console.log(nome2);

if (verdadeira){
    let nome = 'Mateus' // Criando
    // console.log(nome, nome2); 

    if (verdadeira) {
        var nome2 = 'Redeclarado novamente' // Redeclarado
        let nome = 'Outra coisa'
        console.log(nome, nome2);
    }
}