import porcentaje_estado from "./impuestoEstado";
import valor_impuesto from "./valorImpuesto";
 
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
 
  //CA
  var porcentajeEstadoCA = porcentaje_estado("CA");
  var valorImpuestoCA = valor_impuesto(precioNeto,porcentajeEstadoCA);
 
  //TX
  var porcentajeEstadoTX = porcentaje_estado("TX");
  var valorImpuestoTX = valor_impuesto(precioNeto,porcentajeEstadoTX);
 
  //AL
  var porcentajeEstadoAL = porcentaje_estado("AL");
  var valorImpuestoAL = valor_impuesto(precioNeto,porcentajeEstadoAL);
 
  //NV
  var porcentajeEstadoNV = porcentaje_estado("NV");
  var valorImpuestoNV = valor_impuesto(precioNeto,porcentajeEstadoNV);
 
  valoresDiv.innerHTML = `<p>Cantidad de Items: ${cantidadItems.value} </p>
                          <p>Precio por Item: $ ${precioItems.value} </p>
                          <p>Codigo de Estado: ${codigoEstado.value} </p>
                          <p>Porcentaje de Impuesto: ${porcentajeEstado}% </p>
                          <p>Precio Neto (${cantidadItems.value} * $${precioItems.value}):  $ ${precioNeto}</p>
                          <p>Impuesto para CA (${porcentajeEstadoCA}%):  $ ${valorImpuestoCA}</p>
                          <p>Impuesto para TX (${porcentajeEstadoTX}%):  $ ${valorImpuestoTX}</p>
                          <p>Impuesto para AL (${porcentajeEstadoAL}%):  $ ${valorImpuestoAL}</p>
                          <p>Impuesto para NV (${porcentajeEstadoNV}%):  $ ${valorImpuestoNV}</p>`;
});
