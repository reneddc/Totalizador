import porcentaje_estado from "./impuestoEstado";
import valor_impuesto from "./valorImpuesto";
import porcentaje_descuento from "./porcentajeDescuento";
import valor_descuento from "./valorDescuento";
 
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
 
  //IMPUESTOS
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

  //UT
  var porcentajeEstadoUT = porcentaje_estado("UT");
  var valorImpuestoUT = valor_impuesto(precioNeto,porcentajeEstadoUT);


  //DESCUENTOS
  //1000
  var porcentajeDescuento1000 = porcentaje_descuento(1000);
  var valorDescuento1000= valor_descuento(precioNeto,porcentajeDescuento1000);

  //3000
  var porcentajeDescuento3000 = porcentaje_descuento(3000);
  var valorDescuento3000= valor_descuento(precioNeto,porcentajeDescuento3000);

  //7000
  var porcentajeDescuento7000 = porcentaje_descuento(7000);
  var valorDescuento7000= valor_descuento(precioNeto,porcentajeDescuento7000);

  //10000
  var porcentajeDescuento10000 = porcentaje_descuento(10000);
  var valorDescuento10000= valor_descuento(precioNeto,porcentajeDescuento10000);

  //30000
  var porcentajeDescuento30000 = porcentaje_descuento(30000);
  var valorDescuento30000= valor_descuento(precioNeto,porcentajeDescuento30000);

  //Precio Total
  var porcentajeImpuestoTotal = porcentaje_estado(codigoEstado.value);
  var valorImpuestoTotal = valor_impuesto(precioNeto,porcentajeImpuestoTotal);
  var porcentajeDescuentoTotal= porcentaje_descuento(precioNeto);
  var valorDescuentoTotal= valor_descuento(precioNeto,porcentajeDescuentoTotal);
  var precioTotal = precioNeto + valorImpuestoTotal - valorDescuentoTotal;

 
  valoresDiv.innerHTML = `<p>Cantidad de Items: ${cantidadItems.value} </p>
                          <p>Precio por Item: $ ${precioItems.value} </p>
                          <p>Codigo de Estado: ${codigoEstado.value} </p>
                          <p>Porcentaje de Impuesto: ${porcentajeEstado}% </p>
                          <p>Precio Neto (${cantidadItems.value} * $${precioItems.value}):  $ ${precioNeto}</p>
                          <p>Impuesto para CA (${porcentajeEstadoCA}%):  $ ${valorImpuestoCA}</p>
                          <p>Impuesto para TX (${porcentajeEstadoTX}%):  $ ${valorImpuestoTX}</p>
                          <p>Impuesto para AL (${porcentajeEstadoAL}%):  $ ${valorImpuestoAL}</p>
                          <p>Impuesto para NV (${porcentajeEstadoNV}%):  $ ${valorImpuestoNV}</p>
                          <p>Impuesto para UT (${porcentajeEstadoUT}%):  $ ${valorImpuestoUT}</p>
                          <p>Descuento para $1000 (${porcentajeDescuento1000}%):  $ ${valorDescuento1000}</p>
                          <p>Descuento para $3000 (${porcentajeDescuento3000}%):  $ ${valorDescuento3000}</p>
                          <p>Descuento para $7000 (${porcentajeDescuento7000}%):  $ ${valorDescuento7000}</p>
                          <p>Descuento para $10000 (${porcentajeDescuento10000}%):  $ ${valorDescuento10000}</p>
                          <p>Descuento para $30000 (${porcentajeDescuento30000}%):  $ ${valorDescuento30000}</p>
                          <p>Precio Total (descuento e impuesto):  $ ${precioTotal}</p>`;
});
