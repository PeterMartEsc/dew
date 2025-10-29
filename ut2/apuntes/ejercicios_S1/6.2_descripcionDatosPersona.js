const prompt = require('prompt-sync')(); //Librería instalada con el npm

let nombre, apellidos, nacimiento;
let dia, mes, anio;
let intentos = 3;
let finalizar=false;

pedirDatos();

function pedirDatos(){
  
  do{
    pedirNombre()
  } while(!finalizar)

  if(intentos>0){
    finalizar=false;
    do{
      pedirApellidos();
    }while(!finalizar)
  }

  if(intentos>0){
    finalizar=false;
    do{
    pedirNacimiento();
    }while(!finalizar)
  }

  if(nombre && apellidos && dia && mes && anio){
    console.log(nombre+" "+apellidos+". Naciste el " +dia+" de " +mes+ " del "+anio)
  }
}

function pedirNombre(){

  nombre = prompt("Introduzca su nombre: ");
  if(nombre === ""){
    intentos--;
    console.log("El nombre no puede ser vacío")
  } else{
    finalizar=true;
  }

  if(intentos === 0){
    console.log("Demasiados intentos fallidos. Fin del codigo")
    finalizar=true;
  }
}

function pedirApellidos(){

  apellidos = prompt("Introduzca sus apellidos: ");

  if(apellidos === ""){
    intentos--;
    console.log("Los apellido no puede ser vacío")
  } else {
    finalizar=true;
  }

  if(intentos === 0){
    console.log("Demasiados intentos fallidos. Fin del codigo")
    finalizar=true;
  }
}

function pedirNacimiento(){

  nacimiento = prompt("Introduzca sus fecha de nacimiento (dd/mm/aaaa): ");

  if(nacimiento === ""){
    intentos--;
    console.log("La fecha de nacimiento no puede ser vacía y debe estar en formato dd/mm/aaaa")
  } else if(checkFecha(nacimiento)){
    finalizar=true;
  }

  if(intentos === 0){
    console.log("Demasiados intentos fallidos. Fin del codigo")
    finalizar=true;
  }
}

function checkFecha(nacimiento){
  
  let arrayFecha = nacimiento.split("/");

  if(!nacimiento.includes("/") || arrayFecha.length < 3){
    console.log("La fecha de nacimiento debe estar en formato dd/mm/aaaa");
    intentos--;
    return false;
  }

  // for(let i = 0; i < arrayFecha.length ; i++){
  //   console.log(arrayFecha[i]);
  // }

  if(arrayFecha[0].length > 2 || arrayFecha[0].length < 2){
    console.log("El formato del día debe ser dd/")
    intentos--;
    return false;
  }

  if(arrayFecha[1].length > 2 || arrayFecha[1].length < 2 || parseInt(arrayFecha[1]) > 12 || parseInt(arrayFecha[1]) < 1){
    console.log("El formato del mes debe ser /mm/. No se admiten meses superiores a 12 o inferiores a 1")
    intentos--;
    return false
  }

  if(arrayFecha[2].length > 4 || arrayFecha[2].length < 4){
    console.log("El formato del año debe ser /aaaa")
    intentos--;
    return false;
  }

  switch(arrayFecha[1]){
    case "01":
      mes="Enero";
      break;
    case "02":
      mes="Febrero";
      break;
    case "03":
      mes="Marzo";
      break;
    case "04":
      mes="Abril";
      break;
    case "05":
      mes="Mayo";
      break;
    case "06":
      mes="Junio";
      break;
    case "07":
      mes="Julio";
      break;
    case "08":
      mes="Agosto";
      break;
    case "09":
      mes="Septiembre";
      break;
    case "10":
      mes="Octubre";
      break;
    case "11":
      mes="Noviembre";
      break;
    default:
      mes="Diciembre";
      break;
  }

  dia=arrayFecha[0];
  anio=arrayFecha[2];

  return true;

}