"use strict";

/* =========================
   APARTADO (E) 2.- Validaciones
========================= */
function validaNombre(nombre) {
   // Comprueba que tenga mínimo dos letras o espacios
   let regexp = /^[A-Za-z\s]{2,}$/

   if(!regexp.test(nombre)){
      console.log("No tiene dos letras minimo y solo letras y espacios")
      return false;
   }

   return true;
}

function validaEmail(email) {

   //Comprueba que tenga algo con un caracter mínimo, 
   //seguido de un @ seguido de algo con un caracter minimo 
   //seguido de . seguido de algo con un caracter mínimo

   let regexp = /^\S+@\S+\.\S+$/ 

   if(!regexp.test(email)){
      console.log("No cumple la extructura 'algo@algo.algo' ")
      return false;
   }

   return true;

}

function validaEdad(edad) {

   if(!(edad >= 16 && edad <= 99) || edad===""){
      console.log("La edad debe ser entre 16 y 99 ")
      return false;
   }

   return true;
}

// Leer LocalStorage
function leerAlumnos() {}

// Guardar LocalStorage
function guardarAlumnos(arr) {}

/* =========================
   Render lista alumnos (E)
========================= */
function renderAlumnos(lista, destino) {}

// Render lista productos (F)
function renderProductos(productos, destino) {}

function abrirDetalleProducto(p) {}

/* =========================
   Init
========================= */
document.addEventListener("DOMContentLoaded", async () => {
  // *********   APARTADO (E)    ********
  // 1.- Captura submit del formulario. Prevén envío por defecto.
  // 2.- Validaciones de los campos del formulario.
  // 3.- Limpiar y renderizar lista de alumnos.
  // 4.- Cargar alumnos de LocalStorage.
  // 5.- Captura botón #btnLimpiar borrar lista y limpiar LocalStorage.
  // 6.- Cambia aspecto del formulario al hacer foco en los campos.

   const DOM = {
      form: document.getElementById("frmAlumno"),

      nombre: document.getElementById("nombre"),
      errNombre: document.getElementById("err-nombre"),

      email: document.getElementById("email"),
      errEmail: document.getElementById("err-email"),

      edad: document.getElementById("edad"),
      errEdad: document.getElementById("err-edad"),

      btnLimpiar: document.getElementById("btnLimpiar"),
      listaAlumnos: document.getElementById("listaAlumnos"),

   }

   if(localStorage.getItem("listaAlumnos")){
      DOM.listaAlumnos.innerHTML = localStorage.getItem("listaAlumnos");
   }

   DOM.btnLimpiar.addEventListener("click", ()=>{
      DOM.nombre.value="";
      DOM.email.value="";
      DOM.edad.value="";

      localStorage.clear();
      DOM.listaAlumnos.innerHTML=""

      console.log("Lista limpiada");
   })

   DOM.form.addEventListener("submit", (e)=>{
      e.preventDefault();

      if(!validaNombre(DOM.nombre.value)){
         console.log("Error: nombre incorrecto")
         DOM.errNombre.innerText="nombre incorrecto"
         DOM.errNombre.classList.add("is-invalid")
         return
      }

      DOM.errNombre.innerText=""
      DOM.errNombre.classList.remove("is-invalid")

      if(!validaEmail(DOM.email.value)){
         console.log("Error: email incorrecto")
         DOM.errEmail.innerText="email incorrecto"
         DOM.errEmail.classList.add("is-invalid")
         return
      }

      DOM.errEmail.innerText=""
      DOM.errEmail.classList.remove("is-invalid")

      if(!validaEdad(DOM.edad.value)){
         console.log("Error: edad incorrecta")
         DOM.errEdad.innerText="edad incorrecta"
         DOM.errEdad.classList.add("is-invalid")
         return
      }

      DOM.errEdad.innerText=""
      DOM.errEdad.classList.remove("is-invalid")

      DOM.listaAlumnos.innerHTML += `<li>${DOM.nombre.value} - ${DOM.email.value} - ${DOM.edad.value}</li>`;

      localStorage.setItem("listaAlumnos", DOM.listaAlumnos.innerHTML)
      console.log("Actualizado Local Storage")

      console.log("Terminado");
   })
});
