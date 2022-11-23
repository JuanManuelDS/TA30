let input = prompt("Ingrese un número y le diremos si es par o impar");

if (isNaN(input)) {
  alert("Debe ingresar números únicamente");
} else {
  let resultado = esPar(input) ? "El número es par" : "El número es impar";
  alert(resultado);
}

function esPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else return false;
}
