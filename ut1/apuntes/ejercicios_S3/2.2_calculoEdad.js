if (process.argv.length < 3) {
  console.log(
    "Por favor, proporciona la fecha de nacimiento  como argumento."
  );
  console.log("Ejemplo: node 2.2_calculoEdad.js 13/11/2003");
  process.exit(1);
}


function calcularEdad(fecha) {
    let hoy = new Date();
    let cumpleanos = new Date(fecha); //Invalid date
    console.log(cumpleanos)
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let mes = hoy.getMonth() - cumpleanos.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

const fechaINput = process.argv[2];
console.log("Su edad es: "+calcularEdad(fechaINput))
