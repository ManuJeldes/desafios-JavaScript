let items = [];


const itemsContenedor = document.getElementById('lista-productos');

$.get('./data/items.json', (data, estado) => {
    console.log(data)
    console.log(estado)
    items = [...data];
    console.log(items)
    if (estado === 'success') {
        mostrarItems(items, itemsContenedor);
    }
});

console.log(items)
mostrarItems(items, itemsContenedor);

function mostrarItems(arrayItems, contenedor) {
    arrayItems.forEach(item => {
        contenedor.innerHTML += `
        <article class="col-lg-3 col-md-6 mb-3">
                <div class="card" style="width: 18rem;">
                    <img src="${item.foto}" class="card-img-top" alt="Torta de 20 cms de diametro">
                    <div class="card-body">
                        <h5 class="card-title">${item.nombre}</h5>
                        <p class="card-text">
                            <tr>
                                <td>
                                    <ul>
                                        <li>${item.descripcion}</li>
                                        
                                    </ul>
                                    <h3 class="card-title pricing-card-title precio">$<span class="">${item.precio}</span></h3>
                                </td>
                            </tr>
                        </p>
                        <a href="" class="btn btn-warning agregar-carrito" data-id="${item.foto}">Agregar Producto</a>
                    </div>
                </div>
            </article>
    `;
    });
}