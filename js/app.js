let aleatorio = 0;
let form = document.getElementById("form");
form.addEventListener("submit", generarNumero);

function numeroaleatorio1() {
  aleatorio = Math.floor(Math.random() * 50) + 1;
  console.log(aleatorio);
}

function generarNumero(e) {
  e.preventDefault();
  let input = document.getElementById("numeroingresado");
  let numeroingresado = parseInt(input.value);
  console.log(numeroingresado);

  if (numeroingresado === aleatorio) {
    alert("Felicidades adivinaste el numero");
  } else if (numeroingresado < aleatorio) {
    alert("El numero es menor al numero generado ");
  } else {
    alert("El numero ingresado es mayor al numero generado");
  }
}
