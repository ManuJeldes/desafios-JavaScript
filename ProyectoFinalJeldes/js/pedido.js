let carro = new Carrito();
let carrito = document.getElementById("carrito");
let productos = document.getElementById("lista-productos");
let listaProductos = document.querySelector("#lista-carrito tbody");
let vaciarCarritoBtn = document.getElementById("vaciar-carrito");
let procesarPedidoBtn = document.getElementById("procesar-pedido");

cargarEventos();

function cargarEventos() {
    //Se ejecuta cuando se presionar agregar carrito
    productos.addEventListener("click", (e) => {
        carro.comprarProducto(e);
    });

    //Cuando se elimina productos del carrito
    carrito.addEventListener("click", (e) => {
        carro.eliminarProducto(e);
    });

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener("click", (e) => {
        carro.vaciarCarrito(e);
    });

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener("DOMContentLoaded", () => {
        carro.leerLocalStorage();

    });

    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener("click", (e) => {
        carro.procesarPedido(e);
    });
}