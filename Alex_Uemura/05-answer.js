function tamanhoImpar(string){ //verifica se a string tem tamanho impar
    if(string.length%2!=0){
        return true;
    }else
        return false;
}

function imprimePares(string){
    let parLetras=[];

    if(tamanhoImpar(string)){ //se a string for de tamanho impar
        for(let i=0; i<string.length; i+=2){
            if(i==string.length-1) //caso seja o último elemento adiciona o "_" no final 
                parLetras.push(string.charAt(i)+"_");
            else //caso não seja o último elemento
                parLetras.push(string.charAt(i)+string.charAt(i+1));
        }
    }else{ //caso seja uma string de tamanho par 
        for(let i=0; i<string.length; i+=2){
            parLetras.push(string.charAt(i)+string.charAt(i+1)); //adiciona os elementos em pares no array 
        }
    }
    return parLetras;
}

console.log(imprimePares("abcde"));
console.log(imprimePares("abcd"));
