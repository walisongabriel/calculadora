function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            //limpar a tela
            document.getElementById('tela').value = ''
        }
        //Concatenar a operação desejada na tela de operação da calculadora
        if(valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.'){
            document.getElementById('tela').value += valor
        }
        if(valor === '='){
            //Criara uma variavel para receber a operação realizada, utilizar a função eval para converter para o interpretador js ajudar na solução da equação
            var valor_campo = eval(document.getElementById('tela').value)

            //colocar o resultado na tela
            document.getElementById('tela').value = valor_campo 
        }
    }
    else if(tipo === 'valor'){
        //Recebendo os valores do teclado e concatenando na tela
        document.getElementById('tela').value += valor
    }
}