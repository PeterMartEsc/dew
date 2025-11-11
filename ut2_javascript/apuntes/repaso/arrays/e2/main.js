import {coches} from './dataCars'

let soloModelos = 

console.table(soloModelos)

let actividad1 = document.getElementById("mapActividad1");
actividad1.innerHTML = soloModelos;

let arrayTextos = coches.map((coche) => `Marca: ${coche.marca} | Modelo: ${coche.modelo}`);
console.log(arrayTextos)
let actividad2 = document.getElementById("mapActividad2")
actividad2.innerHTML = arrayTextos;

let preciosConIva = coches.map((coche) => `Marca: ${coche.marca} | Modelo: ${coche.modelo} ${parseFloat(coche.precio * 1.07).toFixed(2)}€`);

let cochesMarcaBmw = coches.reduce((acumulador, coche) =>{
    if(coche.marca.toUpperCase() == "BMW"){
        acumulador++;
    }
    return acumulador;
}, 0)
console.log(cochesMarcaBmw)