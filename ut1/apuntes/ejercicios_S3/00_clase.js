
const inventario = [{precio: 10, cantidad: 2}, {precio: 7, cantidad: 5},{precio: 2, cantidad: 3}]
const total = inventario.reduce((valor, item)=> valor +(item.precio * item.cantidad), 0)/inventario.length;

console.log("Media del precio: "+total)