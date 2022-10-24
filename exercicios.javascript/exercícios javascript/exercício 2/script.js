let maior = [];

for(let i=0;i<5;i++){
    let entrada = parseFloat(prompt());
    maior.push(entrada);
}
maior.sort();
alert("o maior número é "+maior[4]);