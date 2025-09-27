const prompt = require('prompt-sync')(); //Librería instalada con el npm

let cazadoresArray = [];

menu();

function menu(){

  let salir = false;

  while (!salir) {
    console.log(" ============== The Witcher ============== ")
    console.log(" ----------------- menu ------------------ ")
    console.log("                                           ")
    console.log("        1.- Añadir nuevo cazador           ")
    console.log("        2.- Eliminar cazador               ")
    console.log("        3.- Mostrar cazadores              ")
    console.log("        4.- Salir                          ")
    console.log("                                           ")
    console.log(" ========================================= ")

    const eleccion = parseInt(prompt(""));

    switch (eleccion) {
      case 1:
        aniadirCazador();
        break;
      case 2:
        eliminarCazador();
        break;
      case 3:
        mostrarCazadores();
        break;
      case 4:
        salir = true; // aquí sí sales del bucle y termina el programa
        break;
      default:
        console.log("Este número no está asignado a ninguna función.");
    }
  }
}

function aniadirCazador(){
  const nombre = prompt("Introduzca el nombre del cazador: ");
  let puntos;
  do{
    puntos = prompt("Introduzca los puntos del cazador: ");
    if(!parseInt(puntos)){
      console.log("Los puntos tienen que ser un número");
    }
  } while (!parseInt(puntos))

  const registro = {Id :cazadoresArray.length, Nombre :nombre, Puntos : parseInt(puntos)}
  cazadoresArray.push(registro)
  console.log("Se ha creado el registro: ", registro);
}

function mostrarCazadores(){
  for(let i = 0; i<cazadoresArray.length; i++){
    console.log(cazadoresArray[i])
  }
}

function eliminarCazador(){
  mostrarCazadores();

  let idEliminar;
  let terminado = false;
  
  do{

    idEliminar = prompt("Introduzca el id del cazador a eliminar: ");
    let idParseada = parseInt(idEliminar);

    let index = cazadoresArray.findIndex(cazador => cazador.Id === idParseada);

    if(isNaN(parseInt(idEliminar))){
      console.log("Debes introducir el id del cazador a eliminar "+idEliminar)
    } else if(index === -1){  //La funcion de buscar el id devuelve -1 si no lo encuentra
      console.log("No existe el id del cazador introducido")
    } else {
      const eliminado = cazadoresArray.splice(index, 1);
      console.log("Cazador eliminado:", eliminado[0]);
      terminado = true;
    }

  }while(!terminado)

}