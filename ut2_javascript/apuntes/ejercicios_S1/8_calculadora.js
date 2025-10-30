let resultado;

switch(process.argv[2]){
  case "suma": 
    resultado = parseInt(process.argv[3]) + parseInt(process.argv[4]);
    break;
  case "resta":
    resultado = parseInt(process.argv[3]) - parseInt(process.argv[4]);
    break;
  case "multiplica":
    resultado = parseInt(process.argv[3]) * parseInt(process.argv[4]);
    break;
  case "divide":
    resultado = parseInt(process.argv[3]) / parseInt(process.argv[4]);
    break;
  default:
    console.log("Operacion no soportada. Escriba 'suma', 'resta', 'multiplica' o 'divide'")
    break;
}

if(resultado != null){
  console.log("El resultado de su operacion es "+ resultado)
}