let mensaje =
  "Hola mundo! \nQué facil es incluir 'comillas simples'\ny \"comillas dobles\"";

alert(mensaje);

//Esta es la manera que tengo de fijarme que el cliente tenga JS activado en su navegador,
//En caso que no lo tenga el h1 con el mensaje de alerta será visible, en caso contrario, no.
document.getElementById("mensajeAlerta").style.display = "none";
