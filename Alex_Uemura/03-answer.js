function ehNumero(x){
    let count=0
    string = x.toString(); //transforma a variável em string 

    for(let i=0; i<string.length; i++){ //verifica se cada dígito é um número 
        if(
        string.charAt(i)=='0'||
        string.charAt(i)=='1'||
        string.charAt(i)=='2'||
        string.charAt(i)=='3'||
        string.charAt(i)=='4'||
        string.charAt(i)=='5'||
        string.charAt(i)=='6'||
        string.charAt(i)=='7'||
        string.charAt(i)=='8'||
        string.charAt(i)=='9')
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
