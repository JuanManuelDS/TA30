const num1 = 5,
  num2 = 8;

if (num1 > num2) console.log("numero1 es mayor a numero2");

if (num2 >= 0) console.log("numero2 es positivo");

if (num2 < 0 || num2 !== 0) console.log("numero2 es negativo o distinto de 0");

if (!(num1 + 1 >= num2))
  console.log(
    "Incrementar en 1 el valor de numero1 no lo hace igual o mayor que numero2 "
  );
