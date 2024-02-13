let tiempoTerminado;
let intervaloTiempo;

function comenzarCuenta() {
  tiempoTerminado = setTimeout(tiempoCumplido, 30000);
  intervaloTiempo = setInterval(ticTac, 1000);

  document.getElementById("cuentaRregresiva").textContent = 30;
}

function ticTac() {
  let tiempo = document.getElementById("cuentaRregresiva").textContent;
  document.getElementById("cuentaRregresiva").textContent = tiempo - 1;
}

function tiempoCumplido() {
  clearInterval(intervaloTiempo);
  document.getElementById("cuentaRregresiva").textContent = 0;
  document.getElementById("audioFinal").play();
  alert("Se acabo el tiempo");
}

function finalizado() {
  clearTimeout(tiempoTerminado);
  clearInterval(intervaloTiempo);
  let fecha = new Date();
  let respuesta1 = document.getElementById("respuesta1").value;
  let respuesta2 = document.getElementById("respuesta2").value;
  let respuesta3 = document.getElementById("respuesta3").value;

  let mensaje =
    fecha.toLocaleDateString("es-Es") +
    " " +
    respuesta1 +
    " " +
    respuesta2 +
    " " +
    respuesta3 +
    " ";
  alert(mensaje);
}

function volverIntentar() {
  location.reload();
}
