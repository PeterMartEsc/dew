const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let inventario = [
{ nombre: "Cañón láser", precio: 1500, cantidad: 4 },
{ nombre: "Hipermotor", precio: 5000, cantidad: 2 },
{ nombre: "Escudo deflector", precio: 3200, cantidad: 3 },
{ nombre: "Droide astromecánico", precio: 2500, cantidad: 1 },
{ nombre: "Torreta de combate", precio: 1800, cantidad: 2 },
];

function showMenu() {
  console.log('================ MENÚ INVENTARIO INCOM T-70 ================');
  console.log('            1) Mostrar inventario (ambas vistas)            ');
  console.log('            2) Calcular total                               ');
  console.log('            3) Agregar producto                             ');
  console.log('            4) Eliminar producto por nombre exacto          ');
  console.log('            0) Salir                                        ');
}

rl.question("Opción: ", (opcionRaw) => {
  const opcion = opcionRaw.trim();

  switch (opcion) {
    case "1":
      mostrarInventario();
      return showMenu();
    case "2":
      console.log(
      `Total del inventario: ${calcularTotal().toFixed(2)} créditos`
      );
    return showMenu();
    case "3":
      return agregarProducto(showMenu);
    case "4":
      return eliminarProducto(showMenu);
    case "0":
      console.log("Fin.");
      rl.close();
      return;
    default:
      console.log("Opción no válida. Introduce 0, 1, 2, 3 o 4.");
      return showMenu();
  }

});

function validarNombre(nombre) {

  if (!nombre || typeof nombre !== "string" || nombre.trim() === "") return "El nombre no puede estar vacío.";
  return null;

}

function validarNumeroEtiqueta(valorStr, etiqueta) {

  if (valorStr === undefined || valorStr === null) {
    return `${etiqueta} es obligatorio.`;
  }

  const n = Number(valorStr);
  if (!Number.isFinite(n)) {
    return `${etiqueta} debe ser un número válido.`;
  }
  
  if (n < 0){
    return `${etiqueta} debe ser ≥ 0.`
  }

  return null;
}

function mostrarInventario() {
  console.log("\n==== Vista tabular ====");
  if (inventario.length === 0){
    console.log("Inventario vacío.");
  } else {
    console.table(inventario, ["nombre", "precio", "cantidad"]);
  }
  console.log("\n==== Vista texto ====");
  console.log(formatearInventarioTexto());
}

function formatearInventarioTexto() {
  const sep = "-".repeat(60);
  let out = `${sep}\nINVENTARIO INCOM T-70 (vista texto)\n${sep}\n`;
  
  if (inventario.length === 0) {
    out += "Inventario vacío.\n" + sep;
    return out;
  }
  
  inventario.forEach((p, i) => {
    out += `${i + 1}. ${p.nombre}\n Precio: ${p.precio} cr |
    Cantidad: ${p.cantidad} uds | Subtotal: ${(p.precio * p.cantidad).toFixed(2)} cr\n`;
  });
  
  out += `${sep}\nTOTAL: ${calcularTotal().toFixed(2)} créditos\n${sep}`;
  return out;
}

function calcularTotal() {
  return inventario.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
}

function agregarProducto(done) {
  console.log("[Agregar producto]");
  
  rl.question("Nombre: ", (nombreRaw) => {
    const nombre = nombreRaw.trim();
    const e1 = validarNombre(nombre);

    if (e1) {
      console.log(`Error: ${e1}`);
      return done();
    }
  
    rl.question("Precio (≥0): ", (precioStr) => {
      const e2 = validarNumeroEtiqueta(precioStr, "Precio");

      if (e2) {
        console.log(`Error: ${e2}`);
        return done();
      }

      rl.question("Cantidad (≥0): ", (cantidadStr) => {
        const e3 = validarNumeroEtiqueta(cantidadStr, "Cantidad");

        if (e3) {
          console.log(`Error: ${e3}`);
          return done();
        }

        const precio = Number(precioStr);
        const cantidad = Number(cantidadStr);
        inventario.push({ nombre, precio, cantidad });

        console.log(`Producto añadido: "${nombre}" (${precio} cr, ${cantidad} uds).`);
        done();
      });

    });

  });
}

function eliminarProducto(done) {
  console.log("\n[Eliminar producto por nombre exacto]");

  if (inventario.length === 0) {
    console.log("No hay productos para eliminar.");
    return done();
  }

  rl.question("Nombre exacto a eliminar: ", (nombreRaw) => {
    const nombre = nombreRaw.trim();
    const e = validarNombre(nombre);
    
    if (e) {
      console.log(`Error: ${e}`);
      return done();
    }

    const idx = inventario.findIndex((p) => p.nombre === nombre);
    
    if (idx === -1) {
      console.log(`No se encontró un producto con nombre EXACTO "${nombre}".`);
      return done();
    }

    const eliminado = inventario.splice(idx, 1)[0];
    console.log(`Eliminado: "${eliminado.nombre}".`);
    
    done();
  });
}

showMenu();