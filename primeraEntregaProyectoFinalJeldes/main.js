//Tortas
const valorTorta20 = 13000;
const valorTorta22 = 15000;
const valorTorta25 = 17000;
const valorTorta28 = 19000;
const valorTorta30 = 21000;
const valorTortaRectangular = 25000;
const seleccionaCantidad = 'Indicanos la cantidad que deseas';

//Tortas Stock
let torta20Stock = 10;
let torta22Stock = 10;
let torta25Stock = 15;
let torta28Stock = 10;
let torta30Stock = 10;
let tortaRectangularStock = 5;

//Variables 
let cantidad = 0;
let total = 0;
let resp = 's';

//Menu
const menu = `Elige tu Producto:
1.-Torta 20 cms
2.-Torta 22 cms
3.-Torta 25 cms
4.-Torta 28 cms
5.-Torta 30 cms
6.-Torta Rectangular
7.- No quiero nada
`;

let nombre = prompt(`Ingresa tu nombre`);
while (nombre == ""){
    alert ("No ingresaste tu nombre, debes ingresar uno");
    nombre = prompt("ingrese su nombre");
}
alert(`Bienvenido ${nombre} a Mayerling Cup & Cakes`);

//funciones
const Stock = (quantity, stock) => {
    if(quantity > stock){
        alert(`No tenemos suficiente stock, solo nos quedan ${stock} tortas`);
        return false;
    }
    else return true;
}

const agregarAlCarro = (num,cantidad) =>{
    switch(num){
        case 1:
            if(Stock(cantidad,torta20Stock)){
                total += (cantidad * valorTorta20);
                torta20Stock -= cantidad;
                alert("Tu producto fue agregado al carro");  
            }
            break

        case 2:
            if(Stock(cantidad,torta22Stock)){
                total += (cantidad * valorTorta22);
                torta22Stock -= cantidad;
                alert("Tu producto fue agregado al carro");  
            }
            break

        case 3:
            if(Stock(cantidad,torta25Stock)){
                total += (cantidad * valorTorta25);
                torta25Stock -= cantidad;
                alert("Tu producto fue agregado al carro");   
            }
            break
        case 4:
            if(Stock(cantidad,torta28Stock)){
                total += (cantidad * valorTorta28);
                torta28Stock -= cantidad;
                alert("Tu producto fue agregado al carro");   
            }
            break
            
        case 5:
            if(Stock(cantidad,torta30Stock)){
                total += (cantidad * valorTorta30);
                torta30Stock -= cantidad;
                alert("Tu producto fue agregado al carro");   
            }
            break
            
        case 6:
            if(Stock(cantidad,tortaRectangularStock)){
                total += (cantidad * valorTortaRectangular);
                tortaRectangularStock -= cantidad;
                alert("Tu producto fue agregado al carro");   
            }
            break

        default:
            alert("Opcion invalida");
    }
}

do{
    let option = parseInt(prompt(menu));
    if(option === 7) break; 
    let cantidad = parseInt(prompt(seleccionaCantidad));

    agregarAlCarro(option,cantidad);

    resp = prompt('¿Desea agregar mas productos? s/n');

}while(resp === 's' || resp === 'S');

if(total != 0){
    alert(`El total a pagar es $${total} pesos`);
};

alert("Gracias vuelva prontos");