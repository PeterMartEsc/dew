let resultado;
let operador = process.argv[2].toLowerCase() ;  //Pasamos las peticiones a letras minusculas para que siempre coincidan con el switch
let primerNumero = process.argv[3];   //Guardamos cada uno de los parametros
let segundoNumero = process.argv[4];
let historialOperaciones = [];

// Comprobando si a y b son números
if (!parseInt(primerNumero) || !parseInt(segundoNumero) || !primerNumero || !operador) {
  console.log("Numeros no válidos. Se debe pasar: operado primerNumero segundoNumero");
  return;
}

//Switch con todas las operaciones que se pueden realizar

switch(operador){
  case "suma": 
    resultado = parseInt(primerNumero) + parseInt(segundoNumero);
    saveOperacion(operador, primerNumero, segundoNumero);
    break;

  case "resta":
    resultado = parseInt(primerNumero) - parseInt(segundoNumero);
    saveOperacion(operador, primerNumero, segundoNumero);
    break;

  case "multiplica":
    resultado = parseInt(primerNumero) * parseInt(segundoNumero);
    saveOperacion(operador, primerNumero, segundoNumero);
    break;

  case "divide":
    if(parseInt(segundoNumero) === 0){
      console.log("Division por 0")
    } else {
      resultado = parseInt(primerNumero) / parseInt(segundoNumero);
      saveOperacion(operador, primerNumero, segundoNumero);
    }
    break;

    case "modulo":
      resultado = parseInt(primerNumero) % parseInt(segundoNumero);
      saveOperacion(operador, primerNumero, segundoNumero);
      break;

    case "potencia":
      resultado = Math.pow(parseInt(primerNumero), parseInt(segundoNumero));
      saveOperacion(operador, primerNumero, segundoNumero);
      break;
    
    case "raiz":
      if(parseInt(primerNumero) < 0){
        console.log("La base de la raiz es negativa. No tiene solucion")
      } else {
        resultado = Math.pow(parseInt(primerNumero), 1 / parseInt(segundoNumero));
        saveOperacion(operador, primerNumero, segundoNumero);
      }
      break;
    
    case "borrar historial":
      deleteHistorial();
      console.log("Se ha borrado el historial: " +historialOperaciones.toString())
      break;
    
    case "mostrar historial":
      mostrarHistorial();
      break;

    default:
      console.log("Operacion no soportada. Escriba 'suma', 'resta', 'multiplica', 'divide'. 'modulo', 'potencia' o 'raiz'")
      break;
}


//Función que guarda los elementos de la operacion en el array

function saveOperacion(operador, primerN, segundoN){

  const registro = {"Operador: ": operador, "Primer numero: ": primerN, "Segundo numero: ": segundoN};
  historialOperaciones.push(registro);
  mostrarHistorial();
}

function deleteHistorial(){
  historialOperaciones = [];
}

function mostrarHistorial(){

  for(let i = 0; i <historialOperaciones.length; i++){
    console.log(historialOperaciones[i]);
  }
}

if(resultado != null){
  console.log("El resultado de su operacion es "+ resultado)
}