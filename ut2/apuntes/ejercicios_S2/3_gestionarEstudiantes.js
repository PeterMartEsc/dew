let estudiantes = [];

function Estudiante(nombre, casa, edad) {
  this.nombre = nombre;
  this.casa = casa;
  this.edad = edad;
  
  this.presentarse = function () {
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y pertenezco a la casa ${this.casa}.`);
  };
}

// class Estudiante() {
//   constructor (nombre, casa, edad) {
//     this.nombre = nombre;
//     this.casa = casa;
//     this.edad = edad;
//   }
//   // método
//   presentarse () {
//     console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y pertenezco a la casa $
//       {this.casa}.`);
//     };
// }

function agregarEstudiante(nombre, casa, edad) {

  const nuevo = new Estudiante(nombre, casa, edad);
  estudiantes.push(nuevo);

  console.log(`Estudiante añadido: ${nombre} (${casa})`);
}

function listarEstudiantes() {

  console.log("Listado de estudiantes de Hogwarts:");

  estudiantes.forEach((e, i) => {
    console.log(`${i + 1}. ${e.nombre} - Casa: ${e.casa}, Edad: ${e.edad}`);
  });
}

function todosSePresentan() {
  estudiantes.forEach(e => e.presentarse());
}

// PRUEBAS
agregarEstudiante("Harry Potter", "Gryffindor", 11);
agregarEstudiante("Draco Malfoy", "Slytherin", 11);
agregarEstudiante("Luna Lovegood", "Ravenclaw", 12);
listarEstudiantes();
console.log("Presentaciones:");
todosSePresentan();