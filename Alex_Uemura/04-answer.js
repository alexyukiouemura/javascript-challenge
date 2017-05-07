function maiorNum(array){ //retorna o maior número do array
    let maior=Number(array[0]);

    for(let i=1; i<array.length; i++){
        if(maior<Number(array[i])){
            maior = Number(array[i]);
        }
    }
    return maior;
}

function menorNum(array){ //retorna o menor número do array 
    let menor=Number(array[0]);

    for(let i=1; i<array.length; i++){
        if(menor>Number(array[i])){
            menor = Number(array[i]);
        }
    }
    return menor;
}

function maiorMenor(string){
    let str=string.split(" "), //separa a string quando encontra o espaço
    maior, menor;

    maior=maiorNum(str);
    menor=menorNum(str);
    return maior+" "+menor;
}

console.log(maiorMenor('1 2 3 4 5'));
