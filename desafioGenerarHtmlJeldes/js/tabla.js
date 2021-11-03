//lista de productos

const tortas = [{ id: 1, item: "Torta 20 cms", valor: 13000, imagen: "" },
    { id: 2, item: "Torta 22 cms", valor: 15000, imagen: "" },
    { id: 3, item: "Torta 25 cms", valor: 17000, imagen: "" },
    { id: 4, item: "Torta 28 cms", valor: 19000, imagen: "" },
    { id: 5, item: "Torta 30 cms", valor: 21000, imagen: "" },
    { id: 6, item: "Torta rectangular cms", valor: 25000, imagen: "" },
    { id: 7, item: "Torta especial cms", valor: "A convenir", imagen: "" },
];

//Insertando tabla de tortas 

let tabla = document.createElement("table"); //Se crea la tabla
tabla.setAttribute("class", "table table-success table-striped"); // se les da atributos a la tabla
let tablaBody = document.createElement("tbody"); // se crea tbody

for (const torta of tortas) {
    let fila = document.createElement("tr");
    fila.innerText = `<th>#</th>`
    fila.innerHTML = `<td> ${torta.id}</td>
    <td> ${torta.item}</td>
    <td><b> $ ${torta.valor}</b></td>
    <td> ${torta.imagen}</td>`;
    tablaBody.appendChild(fila); // se define fila (tr) como hijo de tablaBody (tbody)
}

tabla.appendChild(tablaBody); // se define tbody como hijo de table
document.getElementById("tablaProductos").appendChild(tabla); // Se toma control del ID: "tablaProductos"