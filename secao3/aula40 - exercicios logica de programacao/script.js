// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem (largura > altura).

const ePaisagem = (largura, altura) => largura > altura ? 'Está como retrato' : 'Está como paisagem';

console.log(ePaisagem(500, 300));