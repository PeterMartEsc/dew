const prompt = require('prompt-sync')(); //Librería instalada con el npm

let arrayIngresos = [
    {fecha: "2004-03-21", concepto: "ingreso", importe: 2000},
    {fecha: "2021-10-04", concepto: "ingreso", importe: 1035},
]

let arrayGastos = [
    {fecha: "2009-03-21", concepto: "gasto", importe: 20},
    {fecha: "2019-05-17", concepto: "gasto", importe: 230},
]

let saldo;

menu();

function menu() {

    let salir = false;
    calcularSaldo();

    while (!salir) {
        console.log(" ============== Economía Doméstica ============== ")
        console.log(" --------------------- menu --------------------- ")
        console.log("                                                  ")
        console.log("        1.- Agregar Ingreso o Gasto               ")
        console.log("        2.- Editar apunte                         ")
        console.log("        3.- Borrar apunte                         ")
        console.log("        4.- Mostrar Saldo                         ")
        console.log("        5.- Mostrar Importe Total por Categoria   ")
        console.log("        6.- Resumen Mensual por Fecha             ")
        console.log("        7.- Salir                                 ")
        console.log("                                                  ")
        console.log(" ================================================ ")

        const eleccion = parseInt(prompt(""));

        switch (eleccion) {
            case 1:
                agregarIngresoGasto();
                break;
        // case 2:
        //     totalIngresoGasto();
        //     break;
        // case 3:
        //     mostrarCazadores();
        //     break;
            case 4:
                console.log(`Su saldo es de: ${saldo} €`);
                break;
            case 5:
                totalIngresoGasto();
                break;
            case 7:
                salir = true; // aquí sí sales del bucle y termina el programa
                break;
            default:
                console.log("Este número no está asignado a ninguna función.");
        }
    }
}

function calcularSaldo(){

    let ingresado = arrayIngresos.reduce((valorAcumulado, registroActual) => valorAcumulado + registroActual.importe, 0)
    let gastado = arrayGastos.reduce((valorAcumulado, registroActual) => valorAcumulado + registroActual.importe, 0)

    saldo = ingresado - gastado;
}

function agregarIngresoGasto(){

    let registro = {fecha: "", concepto: "", importe: 0}
    let salirIngresoGasto = false;

    while(!salirIngresoGasto){

        console.log(" ================ ¿Ingreso o Gasto? ================ ")
        console.log(" ----------------------- menu ---------------------- ")
        console.log("                                                     ")
        console.log("                    1.- Ingreso                      ")
        console.log("                    2.- Gasto                        ")
        console.log("                    3.- Salir                        ")
        console.log("                                                     ")
        console.log(" =================================================== ")

        let eleccion = parseInt(prompt(""))


        switch(eleccion){
            case 1:
                registro.concepto = "ingreso";
                registro.importe = introducirImporte();
                registro.fecha = introducirFecha();

                arrayIngresos.push(registro);
                console.log("Se ha aniadido el ingreso: " + JSON.stringify(registro))
                calcularSaldo();

                salirIngresoGasto=true;
                break;
            case 2:
                registro.concepto = "gasto";
                registro.importe = introducirImporte();
                registro.fecha = introducirFecha();

                arrayGastos.push(registro);
                console.log("Se ha aniadido el gasto: " + JSON.stringify(registro))
                calcularSaldo();

                salirIngresoGasto = true;
                break;
            case 3:
                salirIngresoGasto = true;
                break;
            default:
                console.log("Ese valor no está contemplado")
        }
    }
}

function introducirImporte(){

    let importe;
    let salir = false;

    while(!salir){
        importe = parseInt(prompt("Introduzca el importe: "));

        if(!isNaN(importe)){
            console.log("Importe: " +importe)
            salir = true;
        } else {
            console.log("El importe debe ser un valor numérico")
        }
    }

    return importe;
}

function introducirFecha(){

    let fecha;
    let regexFecha = /^\d{4}-\d{2}-\d{2}$/;
    let salir = false;

    while(!salir){

        console.log("Introduzca la fecha (yyyy-MM-dd)")

        fecha = prompt("Introduzca la fecha: ");

        if(!fecha.match(regexFecha)){
            console.log("Debe introducir la fecha en formato yyyy-MM-dd ")
        } else {
            console.log("Fecha: "+fecha)
            salir=true;
        }
    }

    return fecha;
}

function totalIngresoGasto(){

    let salir = false;

    while(!salir){

        console.log(" ================ ¿Mostrar Total de Ingresos o Gastos? ================ ")
        console.log(" -------------------------------- menu -------------------------------- ")
        console.log("                                                                        ")
        console.log("                              1.- Ingresos                              ")
        console.log("                              2.- Gastos                                ")
        console.log("                              3.- Salir                                 ")
        console.log("                                                                        ")
        console.log(" ====================================================================== ")

        let eleccion = parseInt(prompt(""))


        switch(eleccion){
            case 1:
                let ingresado = arrayIngresos.reduce((valorAcumulado, registroActual) => valorAcumulado + registroActual.importe, 0)
                console.log(`El total de dinero ingresado es de: ${ingresado}€`)
                salir=true;
                break;
            case 2:
                let gastado = arrayGastos.reduce((valorAcumulado, registroActual) => valorAcumulado + registroActual.importe, 0)
                console.log(`El total de dinero gastado es de: ${gastado}€`)
                salir = true;
                break;
            case 3:
                salir = true;
                break;
            default:
                console.log("Ese valor no está contemplado")
        }
    }
}

function resumenMensual(){

    let salir = false;

    let anio = parseInt(prompt("Introduzca el anio y mes para filtrar (yyyy-MM): "))

    let registrosIngresadoByAnioMes = [];

    arrayIngresos.map((registro, index)=> {

        let regex = /^([A-Z0-9]{6})\d$/;

        let fechaConcreto = registro.fecha.match()

        if(fechaConcreto[0]===anio){
            registrosIngresadoByAnio.push(registro)
        }
    })

    let ingresadoMesAnio = arrayIngresos.reduce((valorAcumulado, registroActual) => valorAcumulado + registroActual.importe, 0)
    let gastadoMesAnio = arrayGastos.reduce((valorAcumulado, registroActual) => valorAcumulado + registroActual.importe, 0)
}