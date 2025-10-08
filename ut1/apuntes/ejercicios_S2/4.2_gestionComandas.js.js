const prompt = require('prompt-sync')();

let primerosPlatos = ["Sopa de Pescado", "Sopa de Pollo", "Potaje de Calabaza", "Potaje de Berros", "Ensalada"]
let segundosPlatos = ["Filete Empanado con arroz", "Croquetas de Pollo con papas fritas", "Tortilla española", "Arroz a la Cubana", "Salmón aumado con papas guisadas"]
let postres = ["Tocinillo de cielo", "Tarta de chocolate", "Helado de fresa", "Donut de chocolate", "Bienmesabe"]
let comanda = []
let eleccionPrimero, eleccionSegundo, eleccionPostre;

iniciarCodigo();

function iniciarCodigo(){

  let salir = false;

  mostrarPrimerosPlatos()

  do{
    eleccionPrimero = parseInt(prompt(" Introduzca el id del Primer Plato elegido: "));
    if(!parseInt(eleccionPrimero) || eleccionPrimero === ""){
      console.log("Introduzca un numero para elegir plato: ");
    } else if(primerosPlatos[parseInt(eleccionPrimero)] === undefined){
      console.log("Ese id no existe");
    } else {
      const plato = primerosPlatos[parseInt(eleccionPrimero)];
      comanda.push[plato]
      console.log(comanda.length)
      salir=true;
    }
  } while(!salir)

  salir = false;
  mostrarSegundosPlatos();

  do{
    eleccionSegundo = parseInt(prompt(" Introduzca el id del Segundo Plato elegido: "));
    if(!parseInt(eleccionSegundo) || eleccionSegundo === ""){
      console.log("Introduzca un numero para elegir plato: ");
    } else if(segundosPlatos[parseInt(eleccionSegundo)] === undefined){
      console.log("Ese id no existe");
    } else {
      const plato = segundosPlatos[parseInt(eleccionSegundo)];
      comanda.push[plato]
      console.log(comanda.length)
      salir=true;
    }
  } while(!salir)

  salir=false;
  mostrarPostres();

  do{
    eleccionPostre = parseInt(prompt(" Introduzca el id del Postre elegido: "));
    if(!parseInt(eleccionPostre) || eleccionPostre === ""){
      console.log("Introduzca un numero para elegir plato: ");
    } else if(postres[parseInt(eleccionPostre)] === undefined){
      console.log("Ese id no existe");
    } else {
      const plato = postres[parseInt(eleccionPostre)];
      comanda.push[plato]
      console.log(comanda.length)
      salir=true;
    }
  } while(!salir)

  mostrarComanda();
}

function mostrarPrimerosPlatos(){
  for(let i = 0; i<primerosPlatos.length; i++){
    console.log(`[${i}] ${primerosPlatos[i]}`)
  }
}

function mostrarSegundosPlatos(){
  for(let i = 0; i<segundosPlatos.length; i++){
    console.log(`[${i}] ${segundosPlatos[i]}`)
  }
}

function mostrarPostres(){
  for(let i = 0; i<postres.length; i++){
    console.log(`[${i}] ${postres[i]}`)
  }
}

function mostrarComanda(){
  for(let i = 0; i<comanda.length; i++){
    switch (i) {
      case 0:
        console.log(`Primer Plato ${comanda[i]}`)
        break;
      case 1:
        console.log(`Segundo Plato${comanda[i]}`)
        break;
      case 2:
        console.log(`Postre ${comanda[i]}`)
        break;
    }
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