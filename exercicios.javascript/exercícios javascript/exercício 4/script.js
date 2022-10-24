let nome = "";

while(true){
    let entrada = prompt();
    if(entrada == "fim"){
        break;
    }
    entrada += ", ";
    entrada += nome;
    nome = entrada;
}

alert("Nomes: "+nome);