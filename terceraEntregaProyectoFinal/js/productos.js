const productos = [{
        id: 1,
        foto: "./img/torta20.jpg",
        nombre: "Torta 20 cms",
        descripcion: "Tres capas de bizcocho <br> Dos capas de relleno a elección <br> Decoración en crema <br> Aproximadamente para 10 a 15 personas",
        precio: 13000
    },
    {
        id: 2,
        foto: "./img/torta22.jpg",
        nombre: "Torta 22 cms",
        descripcion: "Tres capas de bizcocho <br> Dos capas de relleno a elección <br> Decoración en crema <br> Aproximadamente para 16 a 20 personas",
        precio: 15000
    },
    {
        id: 3,
        foto: "./img/torta25.jpg",
        nombre: "Torta 25 cms",
        descripcion: "Tres capas de bizcocho <br> Dos capas de relleno a elección <br> Decoración en crema <br> Aproximadamente para 21 a 25 personas <br>",
        precio: 17000
    },
    {
        id: 4,
        foto: "./img/torta28.jpg",
        nombre: "Torta 28 cms",
        descripcion: "Tres capas de bizcocho <br> Dos capas de relleno a elección <br> Decoración en crema <br> Aproximadamente para 26 a 30 personas <br>",
        precio: 19000
    },
    {
        id: 5,
        foto: "./img/torta30.jpg",
        nombre: "Torta 30 cms",
        descripcion: "Tres capas de bizcocho <br> Dos capas de relleno a elección <br> Decoración en crema <br> Aproximadamente para 35 a 40 personas",
        precio: 21000
    },
    {
        id: 6,
        foto: "./img/tortarectangular.jpg",
        nombre: "Torta Rect. 25x38 cms",
        descripcion: "Tres capas de bizcocho <br> Dos capas de relleno a elección <br> Decoración en crema <br> Aproximadamente para 40 personas",
        precio: 25000
    },
    {
        id: 7,
        foto: "./img/tortaespecial.jpg",
        nombre: "Torta especial",
        descripcion: "Dos o tres pisos y rellenos <br> Aplicaciones en fondant <br> Dibujos en crema (Pueden ser personalizados) <br> Lo que te imagines lo puedes pedir",
        precio: 35000
    },
    {
        id: 8,
        foto: "./img/redvelvet.jpg",
        nombre: "Cupcake Red velvet",
        descripcion: "Bizcocho de exquisito terciopelo rojo <br> Frosting de cream cheese <br> Decoración con suaves migas de terciopelo",
        precio: 8000
    },
    {
        id: 9,
        foto: "./img/choconuez.jpg",
        nombre: "Cupcake Choco-nuez",
        descripcion: "Bizcocho de chocolate <br> Trozos de nuez <br> Cobertura de chocolate amargo y nuez",
        precio: 6000
    },
    {
        id: 10,
        foto: "./img/butter.jpg",
        nombre: "Cupcake buttercream",
        descripcion: "Bizcocho de vainilla o chocolate <br> Frosting de buttercream <br> Decoración hermosas perlas comestibles",
        precio: 6000
    },
    {
        id: 11,
        foto: "./img/explosion.jpg",
        nombre: "Cupcake explosión de chocolate",
        descripcion: "Bizcocho de chocolate amargo <br> Frosting de chocolate <br> Mostacilla de chocolate",
        precio: 6000
    },
    {
        id: 12,
        foto: "./img/hihat.jpg",
        nombre: "Cupcake Hi-Hat",
        descripcion: "Bizcocho de chocolate <br> Frosting de exquisito merengue italiano <br> Cobertura de chocolate",
        precio: 6000
    },
    {
        id: 13,
        foto: "./img/vainillacream.jpg",
        nombre: "Cupcake Cream",
        descripcion: "Bizcocho de vainilla o chocolate <br> Frosting de crema chantilly <br> Decoración perlas comestibles",
        precio: 6000
    },
    {
        id: 14,
        foto: "./img/minicupcake.jpg",
        nombre: "Mini Cupcake",
        descripcion: "Bizcocho de chocolate <br> Frosting de crema <br> Cantidad 50 mini cupcakes",
        precio: 16000
    },
    {
        id: 15,
        foto: "./img/popcakes.jpg",
        nombre: "Popcake Chocolate",
        descripcion: "Relleno de bizcocho <br> Cobertura de chocolate a elección <br> Decoración Chips de colores",
        precio: 3500
    },
    {
        id: 16,
        foto: "./img/popcakesrosas.jpg",
        nombre: "Popcake Crema",
        descripcion: "Relleno de bizcocho <br> Cobertura con crema a elección <br> Decoración en crema",
        precio: 4000
    },
    {
        id: 17,
        foto: "./img/popespecial.jpg",
        nombre: "Popcake crema y fondant",
        descripcion: "Relleno de bizcocho <br> Cobertura con crema a elección <br> Decoración de fondant",
        precio: 5000
    },
    {
        id: 18,
        foto: "./img/popcakesespecial.jpg",
        nombre: "Popcake Especial",
        descripcion: "Relleno de bizcocho <br> Cobertura de chocolate a elección <br> Decoración brillo comestible",
        precio: 6000
    }

];

let carrito = [];


$(document).ready(function() {

    agregarCards();
})

function agregarCards() {
    productos.forEach(producto => {
        $("#contenedor").append(`
        <article class="col-lg-3 col-md-6 mb-3">
        <div class="card" style="width: 18rem;">
          <img src="${producto.foto}" class="card-img-top" alt="Torta de 20 cms de diametro">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text"><strong>$ ${producto.precio}</strong></p>
            <button class='btn btn-warning' id='btn${producto.id}'>Agregar al carrito</button>
            </div>
        </div>
      </article>`);
        $(`#btn${producto.id}`).on('click', function() {
            agregarAlCarrito(producto);
        });
    });
}

// function agregarAlCarrito(productoNuevo) {
//     carrito.push(productoNuevo);
//     console.log(carrito);
//     Swal.fire(
//         'Nuevo producto agregado al carro',
//         productoNuevo.nombre,
//         'success'
//     );
//     $(".table").append(`
//     <tr>
//         <td><img src=${productoNuevo.foto}></td>
//         <td>${productoNuevo.nombre}</td>
//         <td>${productoNuevo.cantidad}</td>
//         <td>${productoNuevo.precio}</td>
//     </tr>`)
// }

class productoCarrito {
    constructor(obj) {
        this.id = obj.id;
        this.foto = obj.foto;
        this.nombre = obj.nombre;
        this.precio = obj.precio;
        this.cantidad = 1;
    }
}

function agregarAlCarrito(nuevoProducto) {
    let buscar = carrito.find(prod => prod.id == nuevoProducto.id);
    if (buscar == undefined) {
        let productoAgregado = new productoCarrito(nuevoProducto);
        console.log(productoAgregado)
        carrito.push(productoAgregado);
        console.log(carrito);
        Swal.fire(
            'Nuevo producto agregado al carro',
            nuevoProducto.nombre,
            'success'
        );
        $(".table").append(`
    <tr id='fila${productoAgregado.id}'>
        <td><img src=${productoAgregado.foto}></td>
        <td>${productoAgregado.nombre}</td>
        <td id='${productoAgregado.id} class= ms-3'>${productoAgregado.cantidad}</td>
        <td>${productoAgregado.precio}</td>
        <td><button class='btn btn-light' id='eliminarProducto${productoAgregado.id}'>X</button>
    </tr>`);
        $(`#eliminarProducto${productoAgregado.id}`).click(function() {
            let eliminar = carrito.findIndex(p => p.id == productoAgregado.id);
            carrito.splice(eliminar, 1);
            $(`#fila${productoAgregado.id}`).remove();
            console.log(carrito);
            $("#total").html(`Total: $${calcularTotal()}`);
        });
    } else {
        let lugar = carrito.findIndex(p => p.id == nuevoProducto.id);
        carrito[lugar].cantidad += 1;
        $(`#${nuevoProducto.id}`).html(carrito[lugar].cantidad);
    }
    $("total").html(`Total: $${calcularTotal()}`);
}

function calcularTotal() {
    let suma = 0;
    for (const elemento of carrito) {
        suma = suma + (elemento.precio * elemento.cantidad);
    }
    return suma;
}