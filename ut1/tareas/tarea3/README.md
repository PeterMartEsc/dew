# Fundamentos Javascript II

## Actividad “Economía doméstica con map y reduce”

Gestionaremos una economía doméstica sencilla. Para ello:

    • Crea uno array de ingreso y gastos con valores iniciales, con el formato del apunte:
    {fecha, concepto, importe}. Usa fecha (yyyy-mm-dd HH:mm:ss) como id.

    • Crear un menú para gestionar:
        ◦ Agregar nuevo ingreso o gasto
        ◦ Editar un apunte (busca por fecha)
        ◦ Borrar un apunte (busca por fecha)
        ◦ Mostrar saldo
        ◦ Mostrar total por categoría (ingreso o gasto)
        ◦ Muestra resumen mensual dada una fecha yyyy-mm

    • Calcular totales y métricas usando map y reduce.

    • Ejecutable con Node. Sin librerías.

Crea el fichero economia.js.

    1.- Realizar los cálculo (funciones). Uso de map y reduce:
        • saldo() = sum(ingresos) − sum(gastos) con reduce.
        • totalPorCategoria(tipo) → objeto {categoria: total} con reduce. tipo ingreso|gasto
        • resumenMensual(yyyy_mm) filtra por mes y devuelve {ingresos, gastos, saldo} usando
        reduce.
        • lineasFormateadas() devuelve array de strings con map tipo "2025-10-05 | compra | gasto |
        super | -23.40€".

    2.- Prueba a realizar:
        • Crea al menos 5 apuntes variados.
        • Editar apunte y modificarlo.
        • Borrar apunte.
        • Muestra saldo().
        • Muestra totalPorCategoria("gasto").
        • Muestra resumenMensual("2025-10").
