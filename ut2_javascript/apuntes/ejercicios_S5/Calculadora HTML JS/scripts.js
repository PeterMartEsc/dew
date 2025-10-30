// app.js
document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const keys = document.querySelector("#keys");
  const history = document.getElementById("history");
  if (!display || !keys || !history) return;

  let current = "0"; // operando en edición
  let stored = null; // operando previo
  let op = null; // 'suma' | 'resta' | 'multiplica' | 'divide'
  let justEvaluated = false;

  const symbol = (o) =>
    ({ suma: "+", resta: "−", multiplica: "×", divide: "÷" }[o] ?? "");
  const fmt = (n) => Number(n).toString();

  function render() {
    if (op !== null && stored !== null) {
      // muestra operación en vivo: a op b_parcial
      const b = current === "" ? "" : current;
      display.textContent = `${fmt(stored)} ${symbol(op)} ${b}`.trim();
    } else {
      display.textContent = current === "" ? "0" : current;
    }
  }

  function pushDigit(d) {
    if (justEvaluated) {
      stored = null;
      op = null;
      current = "";
      justEvaluated = false;
    }
    if (d === ".") {
      if (current === "") current = "0";
      if (!current.includes(".")) current += ".";
      return render();
    }
    current =
      current === "0" || current === "" ? String(d) : current + String(d);
    render();
  }

  function setOperator(nextOp) {
    // si venimos encadenando, resuelve a op b
    if (stored === null) {
      stored = parseFloat(current || "0");
    } else if (current !== "") {
      stored = evalNow(stored, parseFloat(current), op);
    }
    op = nextOp;
    current = ""; // vacía el segundo operando
    justEvaluated = false;
    render();
  }

  function evalNow(a, b, operator) {
    if (operator === "suma") return a + b;
    if (operator === "resta") return a - b;
    if (operator === "multiplica") return a * b;
    if (operator === "divide") return b === 0 ? NaN : a / b;
    return b;
  }

  function equals() {
    if (op === null || stored === null || current === "") return;
    const a = stored,
      b = parseFloat(current);
    const res = evalNow(a, b, op);
    addHistory(`${fmt(a)} ${symbol(op)} ${fmt(b)} = ${fmt(res)}`);
    current = String(res);
    stored = null;
    op = null;
    justEvaluated = true;
    render();
  }

  function clearAll() {
    current = "0";
    stored = null;
    op = null;
    justEvaluated = false;
    render();
  }
  function backspace() {
    if (justEvaluated) return;
    if (current === "") return;
    current = current.length <= 1 ? "" : current.slice(0, -1);
    render();
  }
  function invertSign() {
    if (current === "" || current === "0") return;
    current = current.startsWith("-") ? current.slice(1) : "-" + current;
    render();
  }

  // Delegación robusta
  keys.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
    const btn = e.target.closest("button");
    if (!btn || !keys.contains(btn)) return;

    const { key, op: opData, act } = btn.dataset;
    if (key !== undefined) pushDigit(key);
    else if (opData) setOperator(opData);
    else if (act) {
      if (act === "equals") equals();
      if (act === "clear") clearAll();
      if (act === "back") backspace();
      if (act === "sign") invertSign();
    }
  });

  // Teclado
  document.addEventListener("keydown", (e) => {
    const k = e.key;
    if (/\d/.test(k)) pushDigit(k);
    else if (k === ".") pushDigit(".");
    else if (k === "+") setOperator("suma");
    else if (k === "-") setOperator("resta");
    else if (k === "*") setOperator("multiplica");
    else if (k === "/") setOperator("divide");
    else if (k === "Enter" || k === "=") {
      e.preventDefault();
      equals();
    } else if (k === "Backspace") backspace();
    else if (k.toLowerCase() === "c") clearAll();
  });

  // Historial
  function addHistory(text) {
    const li = document.createElement("li");
    li.textContent = text;
    history.appendChild(li);
  }
  const clearHistoryBtn = document.getElementById("clear-history");
  clearHistoryBtn?.addEventListener("click", () => {
    history.innerHTML = "";
    clearAll();
    addHistory("Historial vaciado");
    setTimeout(() => {
      document.querySelectorAll("#history li").forEach((li) => li.remove());
    }, 3000);
  });

  // Tema
  const toggleThemeBtn = document.getElementById("toggle-theme");
  toggleThemeBtn?.addEventListener("click", () => {
    document.documentElement.classList.toggle("theme-alt");
  });

  render();
});
