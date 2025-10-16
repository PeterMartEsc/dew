document.addEventListener("DOMContentLoaded", () => {
  /* === Radar existente === */
  const decreaseBtn = document.getElementById("decrease-btn");
  const increaseBtn = document.getElementById("increase-btn");
  const naveCountEl = document.getElementById("nave-count");
  const statusEl = document.getElementById("status-indicator");
  let navesCount = Number(naveCountEl?.textContent || 0);

  function updateDisplay() {
    if (!naveCountEl || !statusEl) return;
    
    naveCountEl.textContent = String(navesCount);
    let estado = "Normal";
    
    if (navesCount >= 10) estado = "Crítico";
    
    else if (navesCount >= 5) estado = "Alerta";
    
    statusEl.textContent = `Estado: ${estado}`;
  }

  decreaseBtn?.addEventListener("click", () => {
    navesCount = Math.max(0, navesCount - 1);
    updateDisplay();
  });

  increaseBtn?.addEventListener("click", () => {
    navesCount++;
    updateDisplay();
  });

  /* === Lógica Apartado 1: Panel de info === */
  const sSize = document.getElementById("s-size");
  const sAvail = document.getElementById("s-avail");
  const sDepth = document.getElementById("s-depth");
  const nLang = document.getElementById("n-lang");
  const nOnline = document.getElementById("n-online");
  const nCookie = document.getElementById("n-cookie");
  const lHref = document.getElementById("l-href");
  const lPhp = document.getElementById("l-php");

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

  document.getElementById("btn-refresh")?.addEventListener("click", paintInfo);
  document.getElementById("btn-title")?.addEventListener("click", () => {
    const t = prompt("Nuevo título de la página:");
    if (t && t.trim()) document.title = t.trim();
  });
  document.getElementById("btn-alert")?.addEventListener("click", () => {
    alert("Aviso del Centro de Mando: verifique el estado del radar.");
  });

  /* === Lógica Apartado 2: Ventanas === */
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

  /* === Lógica Apartado 3: Navegación y timers === */
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

  window.addEventListener("online", paintInfo);
  window.addEventListener("offline", paintInfo);
});
