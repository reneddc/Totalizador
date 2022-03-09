import porcentaje_estado from "./impuestoEstado";
 
const form = document.querySelector("#totalizar-form");
 
//Secciones div
const valoresDiv = document.querySelector("#valores-div");
 
//Valores input
const cantidadItems = document.querySelector("#cantidad-items");
const precioItems = document.querySelector("#precio-items");
const codigoEstado = document.querySelector("#codigo-estado");
 
 
form.addEventListener("submit", (event) => {
  event.preventDefault();
  var porcentajeEstado = porcentaje_estado(codigoEstado.value);
  var precioNeto = cantidadItems.value * precioItems.value;
 
  valoresDiv.innerHTML = `<p>Cantidad de Items: ${cantidadItems.value} </p>
                          <p>Precio por Item: $ ${precioItems.value} </p>
                          <p>Codigo de Estado: ${codigoEstado.value} </p>
                          <p>Porcentaje de Impuesto: ${porcentajeEstado}% </p>
                          <p>Precio Neto (${cantidadItems.value} * $${precioItems.value}):  $ ${precioNeto}</p>`;
});



