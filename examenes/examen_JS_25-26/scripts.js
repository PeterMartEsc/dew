"use strict";

//******************   NOTA   ****************
// Haz uso de las funciones existentes. En caso de necesitar alguna
// extrea creala.
//
// De las funciones existente puedes hacer que retornen datos con return
//   o asignarlo a una variable, por ejemplo "let libros = function getFromLocalStorage(){}".
//   Usa lo que mejor se adapte a tu solución.
// ******************************************************

const URL_BOOKS = "http://10.103.255.0:3000/libros";

// ===== Referencias DOM (ids exigidos en el enunciado) =====

const btnCargar = document.getElementById("btnCargar");
const btnLimpiar = document.getElementById("btnLimpiar");
const listaLibros = document.getElementById("libros");
const msgError = document.getElementById("msgError");
const numEjemplares = document.getElementById("numEjemplares");
const precioTotal = document.getElementById("precioTotal");


async function getBooksFromURL(URL_BOOKS) {
    try {
        const respuesta = await fetch(URL_BOOKS);
        const libros = await respuesta.json();
        // console.log(JSON.stringify(libros))
        saveToLocalStorage(libros)
    } catch (err) {
        console.log(""+err)
        msgError.innerHTML = `<p>${err}</p>`
    }
}

function saveToLocalStorage(arrayBooks) {

    let arrayNuevoLibros = [];
    
    arrayBooks.map((libro, index)=>{
        let elemento = {id: libro.isbn, titulo: libro.titulo, autor: libro.autor, precio: libro.precio, year: libro.year, igic: (libro.precio * 0.07)}
        // console.log(elemento)
        arrayNuevoLibros.push(elemento)
    })

    renderBooks(arrayNuevoLibros);

    // arrayNuevoLibros = JSON.stringify(arrayNuevoLibros)

    localStorage.setItem("libros", JSON.stringify(arrayNuevoLibros))
}

function getFromLocalStorage() {

    let librosJson = localStorage.getItem("libros");
    renderBooks(JSON.parse(librosJson))

}

function renderBooks(librosJson) {

    listaLibros.innerHTML = "";

    console.log(typeof librosJson)
    console.log(librosJson)

    for (let i = 0; i < librosJson.length; i++) {
        // console.log(librosJson[i].titulo)
        listaLibros.innerHTML += `<li>
                        <strong class="titulo">${librosJson[i].titulo}</strong>
                        <span class="autor">Autor: ${librosJson[i].autor}</span>
                        <span class="isbn">ISBN: ${librosJson[i].isbn}</span>
                        <span class="year">Año: ${librosJson[i].year}</span>
                        <span class="precio">Precio: ${librosJson[i].precio}</span>
                        <span class="igic">IGIC (7%): ${librosJson[i].igic}</span>
                        </li>`
    }

    calculaTotalEjemplares(librosJson);
    calculaPrecioTotal(librosJson)
}

function onLimpiarClick() {
    listaLibros.innerHTML = "No hay libros guardados";
    localStorage.removeItem("libros")
    numEjemplares.innerText = "0";
    precioTotal.innerText = "0.00 €";
}

function calculaTotalEjemplares(librosJson) {
    numEjemplares.innerText = librosJson.length;
}

function calculaPrecioTotal(librosJson) {
    precioTotal.innerText = librosJson.reduce((valorAcumulado, registroActual) => valorAcumulado + registroActual.precio, 0) +" €"
}

async function init() {

    if (localStorage.getItem("libros")) {
        getFromLocalStorage();
    } else {
        listaLibros.innerText = "No hay libros guardados";
    }

}

document.addEventListener("DOMContentLoaded", init);

btnCargar.addEventListener("click", function(){getBooksFromURL(URL_BOOKS)})
btnLimpiar.addEventListener("click", onLimpiarClick)

