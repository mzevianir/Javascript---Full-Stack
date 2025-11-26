const elementos = [
  { tag: 'p', texto: 'Qualquer texto que você quiser' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' },
];

// Seleciona uma única vez o container onde vamos inserir os novos elementos
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  // Pega a tag (tipo de elemento) e o texto do item atual
  const { tag, texto } = elementos[i];
  // Cria um elemento do tipo indicado em 'tag' (ex.: <p>, <div>, <footer>, <section>)
  const tagCriada = document.createElement(tag);
  // // Define o conteúdo de texto do elemento recém-criado
  // tagCriada.innerText = texto;
  // Outra forma de definir o conteúdo do texto do elemento recém-criado, assim é criado um nó de texto
  let textoCriado = document.createTextNode(texto);

  // Adiciona o texto criado como filho da tagCriada
  tagCriada.appendChild(textoCriado);
  // Insere o elemento pronto como filho dentro do contêiner
  div.appendChild(tagCriada);
}

container.appendChild(div);