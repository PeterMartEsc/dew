"use strict";

const $j = jQuery.noConflict();
/**
 * Punto de entrada principal.
 * Aquí solo se inicializan cosas básicas.
 * El resto se irá completando sesión a sesión.
 */
$j(function () {
  inicializarTabs();
  inicializarDialogo();

  // Gancho para texto inicial de misión
  inicializarMision();

  // Aquí iréis añadiendo, por sesiones:
  inicializarControlesNavegacion();
  inicializarControlesProfundidad();
  inicializarControlesSonar();
  inicializarControlesArmas();
  inicializarEventos();
});

/* -----------------------------
 * INICIALIZACIÓN BÁSICA
 * ---------------------------*/

/**
 * Convierte el panel de mandos en pestañas de jQuery UI.
 * (Sesión 3)
 */
function inicializarTabs() {
  $j("#tabs-mandos").tabs();
}

/**
 * Diálogo genérico para mostrar mensajes.
 * (Se usa desde cualquier parte del juego).
 */
function inicializarDialogo() {
  $j("#dialog-mensaje").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Cerrar: function () {
        $j(this).dialog("close");
      },
    },
  });
}

/**
 * Texto inicial de la misión.
 * Aquí podréis cambiar el contenido según la misión activa.
 */
function inicializarMision() {
  const textoMision = `
Misión 1: Configura el submarino en modo patrulla silenciosa.
- Velocidad moderada.
- Profundidad segura.
- Modo silencio activado.
- Sonar en modo pasivo.
`;
  $j("#texto-mision").text(textoMision.trim());
}

/**
 * Función auxiliar para mostrar mensajes en el diálogo.
 * La usaréis en:
 * - Verificar misión 1
 * - Verificar misión 2
 * - Errores (sin objetivo seleccionado, etc.)
 */
function mostrarMensaje(titulo, mensaje) {
  $j("#dialog-mensaje").dialog("option", "title", titulo);
  $j("#dialog-texto").text(mensaje);
  $j("#dialog-mensaje").dialog("open");
}

/* -----------------------------
 * PUNTOS DE EXTENSIÓN (TODO)
 * ---------------------------*/

/**
 * Ejemplo de funciones que irán rellenando los alumnos
 * en sesiones posteriores. De momento están vacías,
 * solo como guía visual para estructurar el código.
 */

function inicializarControlesNavegacion() {
  // TODO: slider de velocidad, spinner de rumbo, piloto automático...
  $j("#velocidad-slider").slider({
    min : 0,
    max : 40,
    slide : function(event, ui) {
      // console.log(ui.value)
      $j("#velocidad-valor").text(ui.value)
    }
  })

  $j("#rumbo-spinner").spinner()
  $j("#piloto-on").checkboxradio()
  $j("#piloto-off").checkboxradio()
}

function inicializarControlesProfundidad() {
  // TODO: slider de profundidad, modo silencio...
  $j("#profundidad-slider").slider({
    min : 0,
    max : 500,
    slide : function(event, ui) {
      $j("#profundidad-valor").text(ui.value)
    }
  })

  $j("#silencio-check").checkboxradio()
}

function inicializarControlesSonar() {
  // TODO: modo sonar, alcance del sonar, botón Escanear...
  $j("#modo-sonar").selectmenu()
  $j("#btn-escanear").button()
}

function inicializarControlesArmas() {
  // TODO: torpedos, tipo de torpedo, botones fijar objetivo / disparar...
  $j("#torpedos-spinner").spinner()
  $j("#tipo-torpedo").selectmenu()
  $j("#btn-fijar-objetivo").button()
  $j("#btn-disparar").button()
}

function inicializarEventos() {
  // TODO:
  // - Click en "Verificar misión"
  $j("#btn-verificar-mision").button()

  $j("#btn-verificar-mision").on("click", function(){
    
  })

  // - Click en "Reiniciar"
  $j("#btn-reiniciar").button()

  $j("#btn-reiniciar").on("click", function(){
    
  })
  // - Click en "Escanear"
  // - Click en barcos del sonar (seleccionar objetivo)
  // - Click en "Fijar objetivo" y "Disparar"
}
