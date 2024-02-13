function saludar() {
  let name = document.getElementById("inputName");
  let elementH2 = document.getElementById("salida");
  elementH2.textContent = "Tu te llamas " + name.value;
}

// TEMPORIZADOR
let elementoSegundos = document.getElementById("tiempoElegido");
let elementoTextoAlarma = document.getElementById("textoAlarma");

function comenzarTiempo() {
  setTimeout(tiempoCumplido, 1000 * elementoSegundos.value);
}

function tiempoCumplido() {
  alert("Se acabo el tiempo");
  elementoTextoAlarma.textContent = "ENCENDIDO";
  elementoTextoAlarma.style.color = "green";
  //alarma
  elementoSonidoAlarma.play();
}

// AUDIO
let elementoSonidoAlarma = document.getElementById("audioAlarma");

// FECHA RELOJ
function comenzarReloj() {
  // funcion cada vez que se cumpla tiempo
  setInterval(tictac, 1000);
}

function tictac() {
  let tiempoActual = new Date();
  let hora = tiempoActual.getHours();
  let minutos = tiempoActual.getMinutes();
  let segundos = tiempoActual.getSeconds();
  let textoHora = hora + ":" + minutos + ":" + segundos;
  textoReloj.textContent = textoHora;
}
