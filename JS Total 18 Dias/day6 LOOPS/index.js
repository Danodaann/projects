function multiplicar() {
  //Obtener numero de HTMl
  let elementoTextoTabla = document.getElementById("textoTabla");
  let textoNumeroTabla = elementoTextoTabla.value;
  // convertir a tipo number
  let numeroTabla = Number(textoNumeroTabla);

  // Obtener tabla
  let elementoTablaMultiplicar = document.getElementById("listaTabla");

  // Mostrar resultados
  for (let i = 1; i <= 10; i++) {
    let numeroResultado = numeroTabla * i;

    // armar string con result
    let textoResultado =
      numeroTabla + " por " + i + " es igual a: " + numeroResultado;

    // crear elemento de la lista
    let itemLista = document.createElement("li");
    itemLista.innerText = textoResultado;
    elementoTablaMultiplicar.appendChild(itemLista);
  }
}

let numero = 0;

while (numero < 5) {
  numero++;
  console.log(numero);
}
