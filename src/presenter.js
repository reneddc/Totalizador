const cantidadItems = document.querySelector("#cantidad-items");
const form = document.querySelector("#totalizar-form");
const cantidadItemsDiv = document.querySelector("#cantidad-items-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  cantidadItemsDiv.innerHTML = "<p>" + cantidadItems.value + "</p>";
});
