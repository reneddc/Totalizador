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

  //Precio Total
  var valorImpuestoTotal = valor_impuesto(precioNeto,porcentajeEstado);
  var porcentajeDescuentoTotal= porcentaje_descuento(precioNeto);
  var valorDescuentoTotal= valor_descuento(precioNeto,porcentajeDescuentoTotal);
  var precioTotal = precioNeto + valorImpuestoTotal - valorDescuentoTotal;

 
  valoresDiv.innerHTML = `<p>Precio Neto (${cantidadItems.value} * $${precioItems.value}):  $ ${precioNeto}</p>
                          <p>Descuento (${porcentajeDescuentoTotal}%):  $ ${valorDescuentoTotal}</p>
                          <p>Impuesto para ${codigoEstado.value} (${porcentajeEstado}%):  $ ${valorImpuestoTotal}</p>
                          <p>Precio Total (descuento e impuesto):  $ ${precioTotal}</p>`;
});
