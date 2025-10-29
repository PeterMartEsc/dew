let arrayNevera= ["Leche", "Huevos", "Queso"];
let listaCompra=[];

function mostrarListas(){
  console.log("Inventario Neveril: ")

  arrayNevera.forEach((alimento, i) =>{
    console.log(`[${i}] ${alimento}`);
  });

  console.log("Lista de la compra: ")
  if(listaCompra.length === 0){
    console.log("[ ] Esto ta echando telarañas tu")
  } else {
    listaCompra.forEach((alimento, i) =>{
      console.log(`[${i}] ${alimento}`);
    });
  }
}

function consumirAlimento(indice){

  let consumido = arrayNevera.splice(indice, 1);

  console.log(`Se intenta consumir el elemento ${indice}`)
  if(consumido[0] === undefined){
    console.log("No tenemos de eso en la nevera manín")
  } else {
    console.log(`Se consume el alimento ${indice} de la lista: ${consumido[0]}`);
    listaCompra.splice(listaCompra.lastIndexOf(), 0, consumido);
    console.log("Se ha añadido el alimento consumido a la lista de la compra")
    mostrarListas();
  }
}

mostrarListas();
consumirAlimento(2);
consumirAlimento(2);
consumirAlimento(1);