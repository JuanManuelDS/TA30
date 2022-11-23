let input = prompt(
  "Ingrese el texto que quiera y le diremos si está todo en mayúsculas, minúsculas o ambas"
);

function discernidor(texto) {
  if (texto == texto.toUpperCase()) {
    return "mayúsculas";
  } else if (texto == texto.toLowerCase()) {
    return "minúsculas";
  } else {
    return "ambas";
  }
}

alert(`Su texto contiene ${discernidor(input)}`);
