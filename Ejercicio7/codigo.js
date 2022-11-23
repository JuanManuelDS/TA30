function calcularFactorial(factorial) {
  for (let i = factorial - 1; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

let numero = prompt("Ingrese el número del que quiera calcular el factorial");
if (isNaN(numero) || numero < 1) {
  alert("Debe ingresar un número entero positivo únicamente");
} else {
  alert(calcularFactorial(numero));
}
