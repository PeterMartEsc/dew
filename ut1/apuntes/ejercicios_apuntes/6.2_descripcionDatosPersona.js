const prompt = require('prompt-sync')(); //Librería instalada con el npm

let nombre, apellidos, nacimiento;
let intentos = 3;

pedirDatos();

function pedirDatos(){
  
  do{
    pedirNombre()
  } while(intentos > 0)

  //pedirApellidos()
  //intentos=3;
  //pedirNacimiento();

  console.log(nombre+" "+apellidos+". Naciste el ")
}

function pedirNombre(){

  if(intentos === 0){
    console.log("Demasiados intentos fallidos. Fin del codigo")
  }

  nombre = prompt("Introduzca su nombre: ");
  if(nombre === ""){
    intentos--;
    console.log("El nombre no puede ser vacío")
  }
}

// function pedirApellidos(){

//   if(intentos === 0){
//     console.log("Demasiados intentos fallidos. Fin del codigo")
//     return;
//   }

//   apellidos = prompt("Introduzca sus apellidos: ");
//   if(apellidos === ""){
//     intentos--;
//     console.log("Los apellido no puede ser vacío")
//     pedirApellidos();
//   }
// }