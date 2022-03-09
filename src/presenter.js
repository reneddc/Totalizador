const form = document.querySelector("#totalizar-form");
 
//Secciones div
const valoresDiv = document.querySelector("#valores-div");
 
//Valores input
const cantidadItems = document.querySelector("#cantidad-items");
const precioItems = document.querySelector("#precio-items");
const codigoEstado = document.querySelector("#codigo-estado");
 
 
form.addEventListener("submit", (event) => {
  event.preventDefault();
 
  valoresDiv.innerHTML = `<p>Cantidad de Items: ${cantidadItems.value} </p>
                          <p>Precio por Item: $ ${precioItems.value} </p>
                          <p>Codigo de Estado: ${codigoEstado.value} </p>`;
});



