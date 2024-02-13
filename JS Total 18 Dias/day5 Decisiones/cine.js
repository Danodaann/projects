function recomendar(genero) {
  let mostrarPelicula = document.getElementById("mostrarPelicula");
  let edad = document.getElementById("edad").value;

  switch (genero) {
    case "accion":
      if (edad >= 18) {
        mostrarPelicula.textContent = "Agente 007";
      } else if (edad < 18) {
        mostrarPelicula.textContent = "Agente 007 Menor de edad";
      }
      break;
    case "ciencia":
      if (edad >= 18) {
        mostrarPelicula.textContent = "Guerra de los mundos";
      } else if (edad < 18) {
        mostrarPelicula.textContent = "Interestelar";
      }
      break;
    case "comedia":
      if (edad >= 18) {
        mostrarPelicula.textContent = "Son como niños";
      } else if (edad < 18) {
        mostrarPelicula.textContent = "Comedia menor de edad";
      }
      break;
    case "terror":
      if (edad >= 18) {
        mostrarPelicula.textContent = "IT";
      } else if (edad < 18) {
        mostrarPelicula.textContent =
          "Eres menor de edad no puedes ver peliculas de terror";
      }
      break;
  }
}
