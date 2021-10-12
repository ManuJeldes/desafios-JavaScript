const anoActual = 2021;

let nombre = prompt("ingrese su nombre");
while (nombre == ""){
    alert ("No ingresaste tu nombre, debes ingresar uno");
    nombre = prompt("ingrese su nombre");
}

if (nombre !== ""){
    console.log(nombre);
let anoNacimiento = parseInt(prompt( nombre + " " + "ingresa tu año de nacimiento"));
    console.log(anoNacimiento);
    let edad = anoActual - anoNacimiento;
    console.log("La edad de" + " " + nombre + " " + "es" + " " + edad);
    alert(nombre + " " + "tu edad es:" + " " + edad);
}
