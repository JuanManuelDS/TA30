const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

let dni = prompt("Ingrese su número de DNI");
//Retorno el char del dni
let letraDNI = dni.charAt(dni.length - 1).toUpperCase();
//Extraigo todos los caracteres excepto el último, donde se supone que está la letra
let numerosDNI = dni.slice(0, dni.length - 1);

//Me fijo que los números tengan entre 0 y 8 números positivos, y que numerosDNI no contenga otra cosa que números
if (numerosDNI < 0 || numerosDNI >= 999999990 || isNaN(numerosDNI)) {
  alert("El número proporcionado no es válido");
} else {
  const indexLetra = numerosDNI % 23;
  //Me fijo si el string letraDNI coincide con la letra que le correspondería
  if (letraDNI.includes(letras[indexLetra])) {
    alert("El número y la letra de dni son correctos");
  } else {
    alert("El número o letra de dni no es correcto");
  }
}
