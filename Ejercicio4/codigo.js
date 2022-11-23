let div = document.querySelector("div");
let html = "";

const valores = [true, 5, false, "hola", "adios", 2];

//Determino cuál de los strings del array es mayor
function determinarStringMayor() {
  let longest = "";
  //Busco los strings del array y comparo su largo
  valores.forEach((valor) => {
    if (typeof valor === "string" && valor.length > longest.length) {
      longest = valor;
    }
  });
  //Le agrego el resultado al html del div
  html += `<p>El string más largo del array es: ${longest}</p>`;
}

function invertirBoolean() {
  let resultado = "";
  valores.forEach((valorBooleano, index) => {
    if (typeof valorBooleano === "boolean") {
      //Si valorBooleano es true entonces le asigno false, y si es false le asigno true
      resultado += `Valor anterior de valores[${index}] = ${valorBooleano}`;
      valorBooleano = valorBooleano ? false : true;
      resultado += `, valor actual: ${valorBooleano} <br />`;
    }
  });
  html += `<p>${resultado}</p>`;
}

function determinarResultado() {
  let resultados = "";
  //me traigo, mediante desestructuración los valores numéricos del array
  let [, a, , , , b] = valores;
  resultados += `${a} + ${b} es igual a ${a + b} <br>`;
  resultados += `${a} - ${b} es igual a ${a - b} <br>`;
  resultados += `${a} * ${b} es igual a ${a * b} <br>`;
  resultados += `${a} / ${b} es igual a ${a / b} <br>`;
  resultados += `El resto de ${a} / ${b} es igual a ${a % b}`;

  html += `<p>Los resultados de las operaciones entre los dos valores numéricos del array son: <br />${resultados}</p>`;
}

determinarStringMayor();
invertirBoolean();
determinarResultado();
div.innerHTML = html;
