
const anioActual = 2021;

let calculo;
function calculoDeEdad(date1,date2){
    calculo = date1 - date2;
}
let nombre = prompt("ingrese su nombre");
while (nombre == ""){
    alert ("No ingresaste tu nombre, debes ingresar uno");
    nombre = prompt("ingrese su nombre");
}if (nombre !== ""){
    console.log(nombre);
}
let anioDeNacimiento = parseInt(prompt(nombre +" "+ "Ingrese su año de nacimiento:"));
while (isNaN(anioDeNacimiento)){
    alert ("No ingresaste tu año de nacimiento, debes ingresar uno");
    anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
}if(anioDeNacimiento !== NaN){
    console.log(anioDeNacimiento);
}
calculoDeEdad(anioActual,anioDeNacimiento);
alert("Su edad es:"+" " + calculo +" "+ "años");


