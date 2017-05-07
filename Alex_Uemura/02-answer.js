const alfabeto = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]; //Array com todas as letras do alfabeto 

function inicioDaSeq(letras){ //verifica qual a posição no array do alfabeto que começa a sequencia de letras 
    let inicio;
    for(let i=0; i<alfabeto.length; i++){
        if(alfabeto[i]==letras[0]) //verifica o primeiro elemento da sequência de letras com cada elemento do alfabeto
        inicio=i;
    }
    return inicio;
}

function fimDaSeq(letras){ //verifica qual a posição no array do alfabeto que termina a sequencia de letras 
    let fim;
    for(let i=0; i<alfabeto.length; i++){
        if(alfabeto[i]==letras[letras.length-1]) //verifica o primeiro elemento da sequência de letras com cada elemento do alfabeto
        fim=i;
    }
    return fim;
}

function seqLetras(...letras){ //recebe uma sequência de letras 
    let letra=[];
    for(let i=inicioDaSeq(letras), j=0; i<=fimDaSeq(letras); i++){
        if(alfabeto[i]==letras[j])  
            j++;
        else
            letra.push(alfabeto[i]); //caso as letras sejam diferentes é verificado novamente na sequência 
    }

    return letra;

}

console.log(seqLetras('a', 'b', 'c','e', 'f', 'g'));
