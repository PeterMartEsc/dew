const prompt = require('prompt-sync')(); //Librería instalada con el npm

let numeroSecreto = Math.floor(Math.random() * 100) + 1 ;
let intentos = 5; //const es para variables que no van a cambiar de valor. let es para variables que si

function jugar(){
  
  const respuesta = parseInt(prompt("Adivina el número entre 1 y 100:"));
  
  if(respuesta === numeroSecreto) {
    console.log("¡Felicidades! Has adivinado el número. Le han sobrado" +intentos+ " intentos.");
    reiniciar();
    return; // Finaliza el juego
  } else if (respuesta > numeroSecreto) {
    console.log("El número secreto es menor.");
  } else {
    console.log("El número secreto es mayor.");
  }

  intentos--; //Si no usamos let al declarar la variable, no permite cambiar su valor con el --
  
  if (intentos === 0) {
    console.log("Se te han acabado los intentos. El número era " + numeroSecreto);
    reiniciar();
    //Aquí no hace falta poner return por que el codigo acaba, solo se ejecuta de nuevo si los intentos no son 0
  } else {
    jugar(); // Llamamos de nuevo a la función si quedan intentos
  }
}

function reiniciar(){

  let reiniciar;
  do{
    reiniciar = prompt("Quiere volver a jugar? (si/no): ").toLowerCase();
  }while(reiniciar !== "si" && reiniciar !== "no" && reiniciar !== "s" && reiniciar !== "n")

  if(reiniciar === "si" || reiniciar === "s"){
    numeroSecreto = Math.floor(Math.random() * 100) + 1 ;
    intentos = 5;
    jugar()
  }
}

jugar();