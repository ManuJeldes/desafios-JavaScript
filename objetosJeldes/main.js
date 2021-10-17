let agnioActual = 2021;
let depreciacionAnual = "";
let agnosDeUso = "";
let valorActual = "";

class Activo{
    constructor(descripcion,valorDeCompra,agnosUtiles,agnoDeCompra){
        this.descripcion = descripcion;
        this.valorDeCompra = valorDeCompra;
        this.agnosUtiles = agnosUtiles;
        this.agnoDeCompra = agnoDeCompra;
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

const impresora = new Activo("Impresora Epson l3150",35000,4,2019);
const laptop = new Activo("Laptop Asus 789",549000,8,2018);
const escritorio = new Activo("Escritorio de madera",120000,10,2018);

impresora.division();
console.log("La depreciación anual de"+" "+impresora.descripcion+ " "+ "es de"+" "+ depreciacionAnual +" "+ "pesos");
impresora.resta();
console.log("El activo"+" "+impresora.descripcion+" "+ "lleva"+" "+ agnosDeUso + " "+ "años de uso");
impresora.calculo();
alert("El valor actual de"+" "+impresora.descripcion+ " "+ "es de"+" "+ valorActual +" "+ "pesos");

laptop.division();
console.log("La depreciación anual de"+" "+laptop.descripcion+ " " + "es de"+" "+ depreciacionAnual +" "+ "pesos");
laptop.resta();
console.log("El activo"+" "+laptop.descripcion+ " " + "lleva"+" "+ agnosDeUso + " "+ "años de uso");
laptop.calculo();
alert("El valor actual de"+" "+laptop.descripcion+ " "+ "es de"+" "+ valorActual +" "+ "pesos");

escritorio.division();
console.log("La depreciación anual de"+" "+escritorio.descripcion+ "es de"+" "+ depreciacionAnual +" "+ "pesos");
escritorio.resta();
console.log("El activo"+" "+escritorio.descripcion+ "lleva"+" "+ agnosDeUso + " "+ "años de uso");
escritorio.calculo();
alert("El valor actual de"+" "+escritorio.descripcion+ " "+ "es de"+" "+ valorActual +" "+ "pesos");



