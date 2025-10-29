// const prompt = require('prompt-sync')(); //Librería instalada con el npm

let drones = [
  {id: 1, modelo: "BB8", bateria: 200},
  {id: 2, modelo: "R2D2", bateria: 500},
  {id: 3, modelo: "XJ41", bateria: 100},
  {id: 4, modelo: "SPR", bateria: 800},
  {id: 5, modelo: "PDC", bateria: 300},
]

// menu()

// function menu(){

//   let salir = false;

//   while (!salir) {
//     console.log(" ============== Drone Factory ============== ")
//     console.log(" ------------------ menu ------------------- ")
//     console.log("                                             ")
//     console.log("        1.- Añadir Dron                      ")
//     console.log("        2.- Listar Drones                    ")
//     console.log("        3.- Updatear Baterias                ")
//     console.log("        4.- Eliminar Dron                    ")
//     console.log("        5.- Salir                            ")
//     console.log("                                             ")
//     console.log(" =========================================== ")

//     const eleccion = parseInt(prompt(""));

//     switch (eleccion) {
//       case 1:
//         addDrone();
//         break;
//       case 2:
//         listDrone();
//         break;
//       case 3:
//         updateBateria();
//         break;
//       case 4:
//         removeDrone();
//         break;
//       case 5:
//         salir = true; // aquí sí sales del bucle y termina el programa
//         break;
//       default:
//         console.log("Este número no está asignado a ninguna función.");
//     }
//   }
// }

function addDrone(drone){

  // const newModelo = prompt("Introduzca el modelo del dron: ");
  // let bateria;
  // do{
  //   bateria = prompt("Introduzca la batería del dron: ");
  //   if(isNaN(bateria)){
  //     console.log("La batería tienen que ser un número");
  //   }
  // } while (isNaN(bateria))

  // const registro = {id :drones.length, modelo :newModelo, bateria : parseInt(bateria)}
  console.log("Añadiendo dron")
  drones.push(drone)
  console.log("Se ha añadido el dron")
  // console.log(JSON.stringify(drone))
  listDrones()
}

function listDrones(){
  console.log("Lista de drones: ")
  drones.map((item, index) => {
    console.log(`[${index}] ` + JSON.stringify(item))
  })
}

function updateBateria(id, nuevaBateria){
  console.log(`Actualizando dron con id ${id} a ${nuevaBateria} batería`)
  let indexSeleccionado = drones.findIndex((dron) => dron.id === id);
  drones[indexSeleccionado].bateria = nuevaBateria;
  console.log("Actualizado")
  listDrones()
}

function removeDrone(id){
  console.log(`Eliminando dron con id ${id}`)
  let indexSeleccionado = drones.findIndex((dron) => dron.id === id);
  drones.splice(indexSeleccionado, 1)
  console.log("Eliminado")
  listDrones()
}

listDrones()
let newDrone = {id: 6, modelo: "adkfu", bateria: 420}
addDrone(newDrone)
updateBateria(1, 100)
removeDrone(1)