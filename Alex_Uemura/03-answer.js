function ehNumero(x){
    let count=0
    string = x.toString(); //transforma a variável em string 

    for(let i=0; i<string.length; i++){ //verifica se cada dígito é um número 
        if(
        Number(string.charAt(i))==0||
        Number(string.charAt(i))==1||
        Number(string.charAt(i))==2||
        Number(string.charAt(i))==3||
        Number(string.charAt(i))==4||
        Number(string.charAt(i))==5||
        Number(string.charAt(i))==6||
        Number(string.charAt(i))==7||
        Number(string.charAt(i))==8||
        Number(string.charAt(i))==9)
        {
            count++;
        }
    }

    if(count == string.length){
        return true;
    }
    else{
        return false;
    }
}

function retornaNum(...array){
    let lista=[]; //lista dos números de saída
    for(let i=0; i<array.length; i++){
        if(ehNumero(array[i])){
            lista.push(array[i]); //caso seja número adiciona na lista 
        }
    }

    return lista;
}

console.log(retornaNum(1, 2, 'a', 'b'));
