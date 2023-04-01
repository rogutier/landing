function saludo() {
  alert("Bienvenidos todos");
  var nombre = prompt("Ingrese su nombre: ");
  alert("Hola " + nombre);
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function() {
  saludo();
});

function despedida() {
  alert("Gracias por visitar mi página.");
}

var acerca = document.getElementsByClassName("link")[1];

acerca.addEventListener("click", function() {
  despedida();
});


