// Saludo cliente
let tituloPrincipal = document.getElementById("tituloPrincipal");
let nombre = prompt("Ingresa tu nombre");
tituloPrincipal.innerText = nombre + " " + "Bienvenido a Mayerling Cup & Cakes";

//Se crea boton Ver productos

const boton = document.createElement('button');
boton.textContent ="Elije lo que deseas"
boton.setAttribute("class", "btn btn-info d-grid gap-2 col-6 mx-auto");
//boton.setAttribute("href", "productos.html"); (Intento de colocar un href al boton)
document.body.appendChild(boton)
document.getElementById("botonProductos").appendChild(boton);


boton.onclick = () => {
    const agregarProducto = document.createElement("h2"); 
    agregarProducto.textContent = "Agregaste un producto";
    document.body.appendChild(agregarProducto);
    document.getElementById("botonProductos").appendChild(agregarProducto);
}