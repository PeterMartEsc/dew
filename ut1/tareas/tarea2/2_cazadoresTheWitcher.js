const prompt = require('prompt-sync')(); //Librería instalada con el npm

let cazadoresArray = [];

menu();

function menu(){
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

  switch (eleccion){
    case 1:
      aniadirCazador();
      menu();
    case 2:
      eliminarCazador();
      menu();
    case 3:
      mostrarCazadores();
      menu();
    case 4:
      return;
    default:
      console.log("Este numero no está asignado a ninguna funcion.")
      menu();
  }
}

function aniadirCazador(){
  const nombre = prompt("Introduzca el nombre del cazador: ");
  const puntos = prompt("Introduzca los puntos del cazador: ");

  const registro = {"Id: ":cazadoresArray.length,"Nombre: ":nombre, "Puntos: ":puntos}
  cazadoresArray.push(registro)
  console.log("Se ha creado el registro: " +cazadoresArray.lastIndexOf());
  menu();
}

function eliminarCazador(){

}