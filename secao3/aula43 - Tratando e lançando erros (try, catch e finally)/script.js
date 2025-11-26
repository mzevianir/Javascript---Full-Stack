try {
    // É executado quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(a);
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('Pode ter uma tratativa dentro de outro sem problemas');
    }
} catch (e) {
    // É executado quando há erros
    console.log('Tratando o erro');
} finally {
    // Sempre
    console.log('Eu sempre sou executado');
}

function retornaHora(data) {
    //Só vai ser instancia de Date se for "new Date()";
    if (data && !(data instanceof Date)) {
        throw new TypeError('Estou esperando instncia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (e){
    console.log('Estou esperando instncia de Date.');
} finally {
    console.log('Tenha um bom dia.');
}