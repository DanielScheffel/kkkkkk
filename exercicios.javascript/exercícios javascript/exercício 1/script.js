let numero;
let quadrado;
let contador;

contador = 0;

while(contador < 1){
    numero = parseFloat(prompt("Entre com um número"));
    quadrado = Math.pow(numero, 2);
    alert("O quadrado de "+numero+" é "+quadrado);

    contador = contador + 1;
}