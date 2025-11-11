import {autos} from './data.js'

document.addEventListener('DOMContentLoaded', function(){
    console.log(autos)

    const addButton = document.getElementById("addToList");
    const showButton = document.getElementById("showButton");
    const precioTotal = document.getElementById("precioTotal");

    let divList = document.getElementById("divList");
    let divPrecioTotal = document.getElementById("divPrecio");

    showButton.addEventListener("click", showList);
    precioTotal.addEventListener("click", showPrecioTotal)

    function showList(){
        autos.map((coche, index) => {
            const newDiv = document.createElement("div");
            newDiv.textContent = `${index+1}. ${coche.marca} | ${coche.modelo} | ${coche.year} | ${coche.precio} | ${coche.puertas} | ${coche.color} | ${coche.transmision}`;
            divList.appendChild(newDiv);
        })
    }

    function showPrecioTotal(){
        const precio = autos.reduce(function (resultado, coche) {
            return resultado + coche.precio;
        }, 0)
        divPrecioTotal.textContent = precio;
    }
})