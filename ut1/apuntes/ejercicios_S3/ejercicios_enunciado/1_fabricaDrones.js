let drones = [
  {id: 1, modelo: "BB8", bateria: 200},
  {id: 2, modelo: "R2D2", bateria: 500},
  {id: 3, modelo: "XJ41", bateria: 100},
  {id: 4, modelo: "SPR", bateria: 800},
  {id: 5, modelo: "PDC", bateria: 300},
]

function addDrone(drone){
  drone.push(drone)
  console.log("Se ha añadido el dron: ")
  console.log(JSON.stringify(drone))
}

function listDrone(){
  drones.map((item, index) => {
    console.log(`[${index}] ` + JSON.stringify(item))
  })
}

function updateBateria(id, nuevaBateria){

  let dronSeleccionado = drones.findIndex((dron) => dron.id === id);
  dronSeleccionado.bateria = nuevaBateria;
  

  listDrone()
}

function removeDrone(id){

}

updateBateria(1, 100)