if (process.argv.length < 3) {
  console.log(
    "Por favor, proporciona la temperatura en Fahrenheit como argumento."
  );
  console.log("Ejemplo: node fahrenheitToCelsius.js 75");
  process.exit(1);
}

// Obtener el argumento de la línea de comandos
const fahrenheitInput = process.argv[2];
const fahrenheit = parseFloat(fahrenheitInput);

// Validar que el input sea un número
if (isNaN(fahrenheit)) {
  console.log("Error: Por favor ingresa un número válido para la temperatura.");
  process.exit(1);
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

const celsius = fahrenheitToCelsius(fahrenheit);

// Mostrar el resultado formateado
console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);