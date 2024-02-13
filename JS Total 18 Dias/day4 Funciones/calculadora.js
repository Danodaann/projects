function mostrarResultado(resultado) {
  document.getElementById("resultado").value = resultado;
}

function suma() {
  let numero1 = +document.getElementById("campo1").value;
  let numero2 = +document.getElementById("campo2").value;
  mostrarResultado(numero1 + numero2);
}

function resta() {
  let numero1 = +document.getElementById("campo1").value;
  let numero2 = +document.getElementById("campo2").value;
  mostrarResultado(numero1 - numero2);
}

function multiplicacion() {
  let numero1 = +document.getElementById("campo1").value;
  let numero2 = +document.getElementById("campo2").value;
  mostrarResultado(numero1 * numero2);
}

function division() {
  let numero1 = +document.getElementById("campo1").value;
  let numero2 = +document.getElementById("campo2").value;
  mostrarResultado(numero1 / numero2);
}

// Raiz Cuadrada
function raiz() {
  let numero = +document.getElementById("campo1").value;
  mostrarResultado(Math.sqrt(numero));
}

// Potencia
function potencia() {
  let numero1 = +document.getElementById("campo1").value;
  let numero2 = +document.getElementById("campo2").value;
  mostrarResultado(Math.pow(numero1, numero2));
}

// Absuluto
function absoluto() {
  let numero1 = +document.getElementById("campo1").value;
  mostrarResultado(Math.abs(numero1));
}

// Potencia
function aleatorio() {
  let minimo = +document.getElementById("campo1").value;
  let maximo = +document.getElementById("campo2").value;
  maximo = maximo + 1;
  mostrarResultado(Math.round(Math.random() * (maximo - minimo) + minimo));
}
