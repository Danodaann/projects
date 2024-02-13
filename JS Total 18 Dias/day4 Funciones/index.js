// SUMAR CON VALORES QUE DEFINA EN UN INPUT
function sumar(num1, num2) {
  // al poner + antes del parametro, lo tranforma a numero
  resultSuma = +num1 + +num2;
  return resultSuma;
}

function mostrarResultado() {
  let numero1 = document.getElementById("primerNum");
  let numero2 = document.getElementById("segundoNum");
  let resultado = document.getElementById("result");
  let elementoSuma = sumar(numero1.value, numero2.value);

  resultado.textContent = elementoSuma;
}

// MATH
