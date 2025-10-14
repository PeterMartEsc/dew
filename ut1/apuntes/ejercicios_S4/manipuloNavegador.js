const width = window.screen.width;
const height = window.screen.height;

let p1 = document.getElementById("data1");
let p2 = document.getElementById("data2");
let p3 = document.getElementById("data3");


p1.textContent = "Ancho: " + width;
p2.textContent = "Alto: "+ height;

//Abrir google en el lado izquierdo
let w1 = window.open("https://google.com", "Abierta desde la web")
w1.resizeTo(width/2, height/2);
w1.moveTo(0,0)
w1.document.title = "Nueva ventana";

d3.textContent = w1.location.pathname

let w2 = window.open("https://google.com", "_blank")
w2.resizeTo(width/2, height/2);
w2.moveTo(1082,2091)
