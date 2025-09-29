let peliculas = [];
let seleccionada = null;

// Mostrar pelicula
function mostrarPeliculas() {
  console.log("Listado de películas:");

  peliculas.forEach((pelicula, i) => {
    if (i === seleccionada) {
      console.log(` -> [${i}] ${pelicula} (SELECCIONADA)`);
    } else {
      console.log(` [${i}] ${pelicula}`);
    }
  });
  
  if (peliculas.length === 0) {
    console.log("(vacío)");
  }
}

// Seleccionar/deseleccionar película por índice
function seleccionarPelicula(indice) {

  if (indice < 0 || indice >= peliculas.length) {
    console.log("Índice no válido");
    return;
  }

  if (seleccionada === indice) {
    console.log(`Película deseleccionada: "${peliculas[indice]}"`);
    seleccionada = null;
  } else {
    seleccionada = indice;
    console.log(`Película seleccionada: "${peliculas[indice]}"`);
  }

  mostrarPeliculas();
}

// Añadir película
function añadirPelicula(nombre) {
  // Compruebo que nombre está vacío
  if (!nombre || nombre.trim() === "") {
    console.log("Error: el nombre de la película no puede estar vacío");
    return;
  }
  
  peliculas.push(nombre.trim());

  console.log(`Película añadida: "${nombre}"`);

  mostrarPeliculas();
}

// Eliminar seleccionada
function eliminarSeleccionada() {
  if (seleccionada === null) {
    console.log("No hay ninguna película seleccionada para eliminar");
    return;
  }
  console.log(`Eliminada: "${peliculas[seleccionada]}"`);

  peliculas.splice(seleccionada, 1);

  seleccionada = null;

  mostrarPeliculas();
}


// splice es un método de Array y permite añadir, eliminar o reemplazar elementos.
// let numeros = [1, 2, 3, 4, 5];

// Eliminar
// numeros.splice(2, 1); // elimina el "3"

// Insertar
// numeros.splice(2, 0, 99); // inserta 99 en la posición 2

// Reemplazar
//numeros.splice(1, 2, 7, 8); // reemplaza 2 elementos desde índice 1 por 7 y 8


// Probando el codigo
añadirPelicula("Matrix");
añadirPelicula("Inception");
añadirPelicula("Interstellar");
seleccionarPelicula(1); // Selecciona "Inception"
eliminarSeleccionada(); // Elimina "Inception"
seleccionarPelicula(0); // Selecciona "Matrix"
seleccionarPelicula(0); // La deselecciona