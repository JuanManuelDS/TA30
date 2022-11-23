function esPalindromo(cadena) {
  //Paso la cadena a lower case y luego elimino los espacios
  cadena = cadena.toLowerCase().replace(/\s/g, "");
  //paso la cadena a array ([...cadena]), lo invierto y luego junto todo sin espacios
  let reversedCadena = [...cadena].reverse().join("");
  //Si ambas cadenas son iguales, implica que la cadena es palíndromo
  if (cadena == reversedCadena) {
    return true;
  } else return false;
}

let input = prompt("Ingrese una cadena y le diremos si es un texto palíndromo");
esPalindromo(input)
  ? alert(input + " es palíndromo")
  : alert(input + " no es palíndromo");
