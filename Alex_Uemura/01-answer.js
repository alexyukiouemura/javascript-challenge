function divCinco (x){ //verifica se x é divisível por 5
	if(x%5==0){
		return true;
	}else 
	return false;
}

function divTres (x){ //verifica se x é divisível por 3
	if(x%3==0){
		return true;
	}else 
	return false;
}

function somaNum (num){
	let soma=0;
	for(let i=1; i<num; i++){ //verifica todos os números abaixo de num 
		if(divTres(i)||divCinco(i)){ //se for divisível por 3 ou 5 é somado a variável soma
			soma+=i;
		}
	}
	return soma;
}

console.log(somaNum(10));
