"use strict";

/* =========================================================
    Examen práctico JavaScript — ESQUELETO
    Instrucciones:
    - Completa los TODO en cada sección.
    - Valida en consola que no haya errores.
    - Si te da tiempo muestralo en index.html.
    - No uses librerías externas.
   ========================================================= */

/* ===================== Sección A =========================
    Variables, tipos, ámbito y conversiones
    TODO: completar según enunciado.
=========================================================== */
function seccionA() {
  console.log("Sección A) Variables y tipos");

  // 1. Declaraciones iniciales
  // TODO: const centro = "…"; let grupo = "…"; let turno;
  const centro = "CIFP X";
  let grupo = "2º DAW"
  let turno;

  // 2. Inicializar turno
  turno = "mañana";

  // 3. Convertir "plazas" string -> número seguro en plazasNum
  let plazas = "25"; 
  let plazasNum = Number(plazas); 

  // 4. Usar tipoDe(x) con varios ejemplos y mostrar por consola
  function tipoDe(elemento){
    return "" + typeof elemento;
  }

  console.log(tipoDe(null));
  let array = ["a", "b"];
  console.log(tipoDe(array));
  console.log(tipoDe(23))
  console.log(tipoDe("Pepe"))
  let algo = true;
  console.log(tipoDe(algo))
  console.log(tipoDe(undefined))


  // 5. Demostrar ámbito con let/const dentro y fuera de bloque
  // TODO: crear bloque, declarar, loguear, comprobar acceso fuera sin errores

  let si = "variable externa"
  if(true){
    let no = "variable interna"
    console.log(`Vemos ${si} y ${no}`)
  }

  try{
    console.log(`Vemos ${si} pero no ${no}`)
  } catch (e){
    console.log(""+e)
  }

}

/* ===================== Sección B =========================
    Decisiones y bucles
    TODO: completar según enunciado.
=========================================================== */
function seccionB() {
  console.log("Sección B) Decisiones y bucles");

  // TODO:
  //  1. Implementa clasificarNota(n) que devuelva "SS" de (de 1 a 4 puntos), "AP" (de 5 a 6 puntos), "NT" (de 7 a 9 puntos), "SB" (10 puntos). Usa switch.
  //  2. Recorre la constante notas = [3,5,6.5,8.2,9.7] y construye un array de objetos { nota, tramo: clasificarNota(nota) }.
  //  3. Con un for clásico calcula cuántas están en "SS".
  //  4. Con un while calcula cuántas están en "AP".
  //  5. Con un for..of o for..in calcula cuántas están en "NT". Justifica tu elección.

  let notas = [3, 5 ,6 ,8, 9]

  function clasificarNota(nota){
    
    switch(nota){
      case (nota >=1 && nota <= 4):
        return "SS"
      
      case 2:
        return "SS"

      case 3:
        return "SS"

      case 4:
        return "SS"

      default:
        return "Formato erróneo, introdzca bien la nota (1 - 10)"
    }
  }

  let clasificacion = []
  notas.forEach(nota => {
    let entrada = {nota, tramo: clasificarNota(nota)};
    clasificacion.push(entrada)
  });

  console.log(clasificacion)

  let notasSS = 0;
  for(let i = 0; i<=notas.length; i++){
    if(clasificarNota(notas[i]) === "SS"){
      notasSS++;
    }
  }
  console.log(`Notas suspendidas: ${notasSS}`)

  // let notasAP = 0;
  // let contador = 0;

  // while(contador < notas.length){
  //   if(clasificarNota(notas[contador]) === "AP"){
  //     notasAP++;
  //   }
  //   contador++;
  // }
  // console.log(`Notas aprobadas: ${notasAP}`)

  let notasNT = 0;
  for (const nota in notas) {
    if(clasificarNota(nota) === "NT"){
      notasNT++;
    }
  }

  console.log(`Notas notables: ${notasNT}`)

}

/* ===================== Sección C =========================
   Arrays y agregación sobre 'coches'
   Requiere datos cargados: un array de objetos coche.
   TODO: completar según enunciado.
=========================================================== */

/* ===================== Configuración ===================== */
const DATA_URL = "http://10.103.255.0:3000/coches"; // cambia si procede

/* ===================== Carga de datos ==================== */
// TODO Tomar datis de coches
async function getCoches() {
  try {
  } catch (err) {}
}

function seccionC(coches) {
  console.log("Sección C) Arrays y agregados", coches?.length);

  if (!Array.isArray(coches)) {
    console.log("C) Datos de coches no disponibles o formato incorrecto");
    return;
  }

  // 1. Crea soloModelos con map → ["Corolla","Focus","Ceed","Golf",…….].
  // 2. Filtra year >= 2018 en recientes.
  // 3. Calcula con reduce:
  // 3.a.     ◦ sumaPrecios
  // 3.b.     ◦ maxPrecio (objeto completo)
  // 3.c. ◦ mediaPrecio redondeada a 2 decimales.
  // 4. Ordena por precio ascendente sin mutar el original.
}

/* ===================== Sección D =========================
   Funciones y modularidad ligera
   TODO: completar según enunciado.
=========================================================== */
// Documenta cada función con comentario de propósito, parámetros y retorno.

function clasificarNota(n) {
  // TODO: 1. Escribe function aplicarIVA(productos, tipoIVA=0.15) que devuelva nuevos objetos {...p, precioConIVA} sin mutar.
  return ""; // placeholder
}

function toEuro(n) {
  // TODO: 2. Escribe una función flecha llamada toEuro que reciba un número n y devuelva una cadena con el importe formateado
  // en euros usando el locale "es-ES" y las opciones { style: "currency", currency: "EUR" }.
  return ""; // placeholder
}

function aplicarIVA(base, tipo = 0.21) {
  // TODO: 3. Escribe el código que, partiendo del array coches y de la función aplicarIVA ya implementada, obtenga un nuevo
  // array llamado resumen con el siguiente formato por elemento: { etiqueta: "Marca Modelo (Año)", total: precioConIVA }
  return 0; // placeholder
}

// Función para comprobar las que realizas tú arriba.
function seccionD() {
  console.log("Sección D) Funciones y modularidad");

  // TODO: probar funciones con valores de ejemplo y mostrar resultados
  // console.log(clasificarNota(7.4));
  // console.log(aplicarIVA(100, 0.1));
  // console.log(toEuro(1234.56));
}

/* ===================== Arranque ========================= */
(async function main() {
  console.log("Inciando Examen...");
  try {
    seccionA();
    seccionB();
    seccionC();
    seccionD();
  } catch (e) {
    console.error("Error general:", e);
  }
})();
