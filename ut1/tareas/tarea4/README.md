# Manipulación del DOM

## Actividades

### Apartado 1 · Panel del dispositivo y navegador

Tareas:

- Mostrar screen.width/height, availWidth/availHeight, colorDepth.
- Mostrar navigator.language, onLine, cookieEnabled.
- Mostrar location.href, protocol, hostname, pathname.
- Botones: Actualizar, Cambiar título (usa prompt y document.title), Aviso (usa alert).

<br>


```js

function paintInfo() {
    sSize.textContent = window.screen.width + "x" + window.screen.height;
    sAvail.textContent = window.screen.availWidth + "x" + window.screen.availHeight;
    sDepth.textContent = window.screen.colorDepth + "-bit";
    nLang.textContent = window.navigator.language;
    nOnline.textContent = window.navigator.onLine ? "Sí" : "No";
    nCookie.textContent = window.navigator.cookieEnabled ? "Habilidadas" : "Deshabilitadas";
    lHref.textContent = window.location.href;
    lPhp.textContent = window.location.protocol + " | " + window.location.hostname + " | " + window.location.pathname;
}

paintInfo();

```

### Apartado 2 · Laboratorio de ventanas

Objetivo: practicar window.open/close/moveTo/resizeTo.

Tareas:

- Abrir patrulla en una ventana hija.
- Mover con moveTo(x,y).
- Redimensionar con resizeTo(w,h).
- Cerrar con confirmación (confirm).

<br>

```js

let child = null;
const childStatus = document.getElementById("child-status");

document.getElementById("btn-open")?.addEventListener("click", () => {
child = window.open("/")
childStatus.textContent = "Ventana: abierta"
});

document.getElementById("btn-move")?.addEventListener("click", () => {
const x = Number(document.getElementById("mv-x").value) || 0;
const y = Number(document.getElementById("mv-y").value) || 0;

child.moveTo(x,y)
});

document.getElementById("btn-resize")?.addEventListener("click", () => {
const w = Number(document.getElementById("rs-w").value) || 200;
const h = Number(document.getElementById("rs-h").value) || 200;
child.resizeTo(w, h)
});

document.getElementById("btn-close")?.addEventListener("click", () => {
child.close();
childStatus.textContent = "Ventana: cerrada"
});

```

### Apartado 3 · Temporalización de alerta

- Temporizador de alerta: setTimeout programable y Cancelar.

<br>

```js

let timeoutId = null;

document.getElementById("btn-settimeout")?.addEventListener("click", () => {
const ms = Number(document.getElementById("to-ms").value) || 3000;

timeoutId = setTimeout(() => {
    alert("Han pasado "+(ms/1000)+" segundos");
}, ""+ms);

});
document.getElementById("btn-cleartimeout")?.addEventListener("click", () => {
clearTimeout(timeoutId)
});

```