//Se crea dark mode
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

//boton prueba Animaciones
$(".btnAnimacion").append("<button type='button' id='mostrarProductos' class='btn btn-info d-grid gap-2 col-6 mx-auto'>Ver Productos</button>");

$("#productos").hide();

$("#mostrarProductos").click(function() {
    $("#inicio").slideUp("slow");
    $("#productos").fadeIn();
});