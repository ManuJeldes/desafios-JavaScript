const miJSON = "users.json";
$(".btnAnimacion").append("<button type='button' id='mostrarProductos' class='btn btn-info d-grid gap-2 col-6 mx-auto'>Ver Productos</button>");
$("#mostrarProductos").click(() => {
    $.getJSON(miJSON, function(respuesta, estado) {
        if (estado == "success") {
            let misProductos = respuesta.productos;
            for (const producto of misProductos) {
                $("#contenedor").prepend(`
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
            }
        }
    });
});



// let carrito = [];


// $(document).ready(function() {

//     agregarCards();

// })

// function agregarCards() {
//     productos.forEach(producto => {
//         $("#contenedor").append(`
//         <article class="col-lg-3 col-md-6 mb-3">
//         <div class="card" style="width: 18rem;">
//           <img src="${producto.foto}" class="card-img-top" alt="Torta de 20 cms de diametro">
//           <div class="card-body">
//             <h5 class="card-title">${producto.nombre}</h5>
//             <p class="card-text">${producto.descripcion}</p>
//             <p class="card-text"><strong>$ ${producto.precio}</strong></p>
//             <button class='btn btn-warning' id='btn${producto.id}'>Agregar al carrito</button>
//             </div>
//         </div>
//       </article>`);
//         $(`#btn${producto.id}`).on('click', function() {
//             agregarAlCarrito(producto);
//         });
//     });
// }

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
//         <td>${productoNuevo.precio}</td>
//     </tr>`)
// }