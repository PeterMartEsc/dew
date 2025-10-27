// app.js
const API = "https://jsonplaceholder.typicode.com/users";
const els = {
  list: document.getElementById("users"),
  status: document.getElementById("status"),
  reload: document.getElementById("reload-btn"),
};

function setStatus(text) {
  els.status.textContent = text;
}

function renderUsers(users) {
  // Vaciar lista
  while (els.list.firstChild) els.list.removeChild(els.list.firstChild);

  users.forEach((u) => {
    // <li class="user-item"><span class="user-name">Nombre</span> — <a class="user-email">email</a></li>
    const li = document.createElement("li");
    li.className = "user-item";

    const name = document.createElement("span");
    name.className = "user-name";
    name.textContent = u.name;

    const sep = document.createElement("span");
    sep.className = "user-sep";
    sep.textContent = " — ";

    const email = document.createElement("a");
    email.className = "user-email";
    email.href = `mailto:${u.email}`;
    email.textContent = u.email;

    li.appendChild(name);
    li.appendChild(sep);
    li.appendChild(email);
    els.list.appendChild(li);
  });
}

async function loadUsers() {
  setStatus("Cargando…");
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    renderUsers(data);
    setStatus(`Cargados ${data.length} usuarios`);
  } catch (err) {
    renderUsers([]);
    setStatus(`Error al cargar: ${err.message}`);
  }
}

els.reload.addEventListener("click", loadUsers);
document.addEventListener("DOMContentLoaded", loadUsers);
