// Saludo cliente
let tituloPrincipal = document.getElementById("tituloPrincipal");
let nombre = prompt("Ingresa tu nombre");
tituloPrincipal.innerText = nombre + " " + "Bienvenido a Mayerling Cup & Cakes";

//Se crea boton Ver productos

const boton = document.createElement('button');
boton.textContent = "Elije lo que deseas"
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

//
const btnDeslizar = document.getElementById('deslizar');

// colocamos toggle, para poner las clases dark y active
btnDeslizar.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDeslizar.classList.toggle('active');

    // Guardamos el modo en localstorage para que cuando el usuario vuelva a ingresar encuentre la pagina en el modo que la dejo.
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.setItem('darkMode', 'false');
    }
});

// traemos lo que quedo guardado en el ultimo uso de la pagina
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    btnDeslizar.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnDeslizar.classList.remove('active');
}