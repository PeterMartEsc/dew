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
  // const textoMision = `
  // Misión 1: Configura el submarino en modo patrulla silenciosa.
  // - Velocidad moderada.
  // - Profundidad segura.
  // - Modo silencio activado.
  // - Sonar en modo pasivo.
  // `;
  const textoMision = `
    Misión 2: Configura el submarino en escaneo.
    (Sonar ACTIVO, alcance mínimo, velocidad moderada).
  `
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
  $j("#dialog-texto").html(mensaje);
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

  $j("#btn-escanear").on("click", function(){
    let velocidad = $j("#velocidad-valor").html();
    let sonar = $j("#modo-sonar").find(":selected").text();
    let alcance = $j("#alcance-sonar-valor").html();

    if(sonar === "Activo" && velocidad <= 10 && alcance >= 1){
      $j(".barco").fadeIn()
      $j(".barco").css("visibility", "visible")

      // Actividad 1 Simulacro
      // $j("#sonar").find(".barco").each(function(){
      //   console.log($j(this).data("id"))
      // });
      let barcos = $j("#sonar").find(".barco")
      $j("#tab-armas").append("<br>")
      for(let i = 0; i<barcos.length; i++){
        //console.log($j(barcos[i]).data("id"));
        $j("#tab-armas").append(`<button id="${$j(barcos[i]).data("id")}" >Barco ${$j(barcos[i]).data("id")}</button>`)
        $j(`#${$j(barcos[i]).data("id")}`).button()
      }

      $j("#dialog-texto").html("")
      $j("#dialog-mensaje").dialog("open")
      mostrarMensaje("Éxito", "La <b style='color: green;'>Misión 2</b> se ha iniciado con éxito");
    } else {
      $j("#dialog-texto").html("")
      $j("#dialog-mensaje").dialog("open")
      mostrarMensaje("No se ha podido iniciar", "Compruebe objetivos de la <b style='color: red;'>Misión 2</b>");
    }
  })

  $j("#alcance-sonar-slider").slider({
    min : 0,
    max : 20,
    slide : function(event, ui) {
      $j("#alcance-sonar-valor").text(ui.value)
    }
  })
}

function inicializarControlesArmas() {
  // TODO: torpedos, tipo de torpedo, botones fijar objetivo / disparar...
  $j("#torpedos-spinner").spinner()
  $j("#tipo-torpedo").selectmenu()
  $j("#btn-disparar").button()
  const btnFijarObjetivo = $j("#btn-fijar-objetivo").button()

  $j(".barco").click(function(){
    $j(".barco").removeClass("barco-seleccionado")
    $j(this).addClass("barco-seleccionado")
  });

  btnFijarObjetivo.on("click", function(){
    const barco = $j("#sonar").find(".barco-seleccionado")
    if(barco === undefined){
      mostrarMensaje("Error", "Primero selecciona un barco")
    } else {
      mostrarMensaje("Objetivo fijado", "Barco " + barco.data("id"))
    }
  })
}

function inicializarEventos() {
  // TODO:
  // - Click en "Verificar misión"
  $j("#btn-verificar-mision").button()

  $j("#btn-verificar-mision").on("click", function(){
    let velocidad = $j("#velocidad-valor").html();
    let profundidad = $j("#profundidad-valor").html();
    let silencioBool = $j("#silencio-check").prop("checked");
    let sonar = $j("#modo-sonar").find(":selected").text();

    if(velocidad <= 20 && (profundidad >= 100 && profundidad <= 300) && silencioBool && sonar === "Pasivo"){
      $j("#dialog-texto").html("")
      // $j("mision1").css("color", "green")
      $j("#dialog-mensaje").dialog("open")
      mostrarMensaje("Éxito", "La <b style='color: green;'>Misión 1</b> se ha iniciado con éxito");
    } else {
      $j("#dialog-texto").html("")
      $j("#dialog-mensaje").dialog("open")
      mostrarMensaje("No se ha podido iniciar", "Compruebe objetivos de la <b style='color: red;'>Misión 1</b>");
    }
  })

  // - Click en "Reiniciar"
  $j("#btn-reiniciar").button()

  // $j("#btn-reiniciar").on("click", function(){
  //   $j("#velocidad-slider").slider("value", 0)
  //   $j("#velocidad-valor").text(0)

  // })
  // - Click en "Escanear"
  // - Click en barcos del sonar (seleccionar objetivo)
  // - Click en "Fijar objetivo" y "Disparar"
}