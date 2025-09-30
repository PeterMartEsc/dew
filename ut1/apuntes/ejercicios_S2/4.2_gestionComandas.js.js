const prompt = require('prompt-sync')();

let primerosPlatos = []
let segundosPlatos = []
let postres = []
let comanda = []


function menu(){

  let salir = false;

  while (!salir){
    mostrarPrimerosPlatos()
    // const eleccion = parseInt(prompt(""));
  }
}

function mostrarPrimerosPlatos(){
  for(let i = 0; i<primerosPlatos.length; i++){
    console.log(`[${i}] ${primerosPlatos[i]}`)
  }
}

// console.log(" ============== Restaurante Manolo ============== ")
    // console.log(" --------------------- menu --------------------- ")
    // console.log("                                           ")
    // console.log("        1.- Añadir nuevo cazador           ")
    // console.log("        2.- Eliminar cazador               ")
    // console.log("        3.- Mostrar cazadores              ")
    // console.log("        4.- Salir                          ")
    // console.log("                                           ")
    // console.log(" ========================================= ")

    // const eleccion = parseInt(prompt(""));