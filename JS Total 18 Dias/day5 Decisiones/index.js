// Decisiones

// && AND
// || OR

function evaluarCompra() {
  let elementoRespuesta = document.getElementById("decision");
  let precio = document.getElementById("textoPrecio").value;
  if (precio <= 10) {
    elementoRespuesta.textContent = "Si comprar dos cartones de leche";
  } else if (precio <= 15) {
    elementoRespuesta.textContent = "Solo compra 1";
  } else {
    elementoRespuesta.textContent = "No compres, esta cara";
  }
}

// SWITCH

function consultarPrecio() {
  let elementoRespuesta2 = document.getElementById("textoPrecio2");
  let elementoFruta = document.getElementById("numeroFruta");
  let fruta = elementoFruta.value;

  switch (fruta) {
    case "1":
      elementoRespuesta2.textContent = "$8.70";
      break;
    case "2":
      elementoRespuesta2.textContent = "$9.70";
      break;
    case "3":
      elementoRespuesta2.textContent = "$10.70";
      break;
    case "4":
      elementoRespuesta2.textContent = "$7.70";
      break;
    case "5":
      elementoRespuesta2.textContent = "$8.70";
      break;
  }
}
