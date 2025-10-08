function prepararTortilla() {
  console.log("🏁 INICIANDO PREPARACIÓN DE TORTILLA DE PAPAS 🏁");
  console.log("🧅 Ingredientes: papas, cebolla, huevos, aceite, sal");
  console.log("================================================");
  // Iniciar la secuencia de pasos
  pelarPapas(() => {
    cortarPapas(() => {
      cortarCebolla(() => {
        freirIngredientes(() => {
          batirHuevos(() => {
            mezclarIngredientes(() => {
              cocinarTortilla(() => {
                servirTortilla();
              });
            });
          });
        });
      });
    });
  });
}

function pelarPapas(callback) {
  const ingrediente = "papas";
  console.log(`🥔 Paso 1: Pelando ${ingrediente}...`);
  setTimeout(() => {
    console.log(`✅ ${ingrediente} peladas correctamente`);
    callback();
  }, 2000);
}

function cortarPapas(callback) {
  const ingrediente = "papas";
  console.log(`🔪 Paso 2: Cortando ${ingrediente} en rodajas...`);
  setTimeout(() => {
    console.log(`✅ ${ingrediente} cortadas en rodajas finas`);
    callback();
  }, 2500);
}
