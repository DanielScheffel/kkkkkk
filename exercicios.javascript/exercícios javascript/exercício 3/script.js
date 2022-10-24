let maior = 0;
let menor = 0;

while(true){
    let entrada = prompt();
    if(entrada == "fim"){
        break;
    }

    entrada = parseFloat(entrada);
    if(entrada >= 18){
        maior++
    }else{
        menor++
    }
}

alert("Temos "+maior+" maiores de idade e "+menor+" menores de idade.")