let agnioActual = 2021;

let depreciacionAnual;
function division(dato1,dato2){
    depreciacionAnual = dato1 / dato2;
}

let agnosDeUso;
function resta(num1,num2){
    agnosDeUso = num1 - num2;
}

let valorActual;
function calculo(valor1,valor2,valor3){
    valorActual = valor1 - (valor2*valor3);
}

let valorDeCompra = parseInt(prompt("Ingrese valor de compra del producto"));
while (isNaN(valorDeCompra)){
    alert ("No ingresaste el valor de compra del producto");
    valorDeCompra = parseInt(prompt("Ingrese valor de compra del producto"));
}if(valorDeCompra !== NaN){
    console.log(valorDeCompra);
}
let agnosUtiles = parseInt(prompt("Ingrese años útiles del producto"));
while (isNaN(agnosUtiles)){
    alert ("No ingresaste los años útiles del producto");
    agnosUtiles = parseInt(prompt("Ingrese años útiles del producto"));
}if(agnosUtiles !== NaN){
    console.log(agnosUtiles);
}
let agnoDeCompra = parseInt(prompt("Ingrese año de compra del producto"));
while (isNaN(agnoDeCompra)){
    alert ("No ingresaste el año de la compra del producto");
    agnoDeCompra = parseInt(prompt("Ingrese año de compra del producto"));
}if(agnoDeCompra !== NaN){
    console.log(agnoDeCompra);
}
division(valorDeCompra,agnosUtiles);
console.log("La depreciación anual es de"+" "+ depreciacionAnual +" "+ "pesos");
resta(agnioActual,agnoDeCompra);
console.log("El producto lleva"+" "+ agnosDeUso + " "+ "años de uso");
calculo(valorDeCompra,agnosDeUso,depreciacionAnual);
alert("El valor actual del producto es de"+" "+ valorActual +" "+ "pesos")