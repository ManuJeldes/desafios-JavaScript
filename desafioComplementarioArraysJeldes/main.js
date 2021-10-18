let agnioActual = 2021;
let depreciacionAnual = "";
let agnosDeUso = "";
let valorActual = "";

class Activo{
    constructor(descripcion,valorDeCompra,agnosUtiles,agnoDeCompra){
        this.descripcion = descripcion.toLowerCase();
        this.valorDeCompra = parseInt(valorDeCompra);
        this.agnosUtiles = parseInt(agnosUtiles);
        this.agnoDeCompra = parseInt(agnoDeCompra);
    }
    division(){
        depreciacionAnual = this.valorDeCompra / this.agnosUtiles;
    }
    
    resta(){
        agnosDeUso = agnioActual - this.agnoDeCompra;
    }
    
    calculo(){
        valorActual = this.valorDeCompra - (agnosDeUso*depreciacionAnual);
    }

}

function comparar(a,b){
    return a.valorDeCompra - b.valorDeCompra;
}

const activos = [];
activos.push(new Activo("Impresora Epson l3150","35000","4","2019"));
activos.push(new Activo("Laptop Asus 789","549000","8","2018"));
activos.push(new Activo("Escritorio de madera","120000","10","2018"));

console.log(activos.sort(comparar));

for (let activo of activos){
    activo.division();
    console.log("La depreciación anual de"+" "+activo.descripcion+ " "+ "es de"+" "+ depreciacionAnual +" "+ "pesos");
    activo.resta();
    console.log("El activo"+" "+activo.descripcion+" "+ "lleva"+" "+ agnosDeUso + " "+ "años de uso");
    activo.calculo();
    alert("El valor actual de"+" "+activo.descripcion+ " "+ "es de"+" "+ valorActual +" "+ "pesos");
}


