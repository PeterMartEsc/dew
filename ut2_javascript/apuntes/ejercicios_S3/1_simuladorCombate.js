const jugadores = [
  { nombre: "Ana", vida: 100 },
  { nombre: "Luis", vida: 100 },
  { nombre: "Marta", vida: 100 },
];

function ataqueEspada(atacante, defensor) {
  const daño = Math.floor(Math.random() * 20) + 5;
  defensor.vida -= daño;
  console.log(`${atacante.nombre} ataca con espada y hace ${daño} de daño.`);
}

function ataqueMagia(atacante, defensor) {
  const daño = Math.floor(Math.random() * 30) + 10;
  defensor.vida -= daño;
  console.log(`${atacante.nombre} lanza un hechizo e inflige ${daño} de daño.`);
}

function turno(atacante, defensor, ataque) {
  if (defensor.vida <= 0) {
    console.log(`${defensor.nombre} ya ha sido derrotado.`);
    return;
  }

  ataque(atacante, defensor);

  if (defensor.vida <= 0) {
    console.log(`${defensor.nombre} ha caído en combate.`);
  } else {
    console.log(`${defensor.nombre} tiene ${defensor.vida} de vida restante.`);
  }
}

const jugador1 = jugadores[0];
const jugador2 = jugadores[1];
turno(jugador1, jugador2, ataqueEspada);
turno(jugador2, jugador1, ataqueMagia);
turno(jugador1, jugador2, ataqueEspada);
turno(jugador2, jugador1, ataqueMagia);