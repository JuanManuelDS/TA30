/*Agregué el link a esta página con los scripts al final, justo antes de la etiqueta 
body para que se lea este archivo una vez que haya sido cargado todo el html*/
console.log("Hola mundo!");
//Estos mensajes son impresos en la consola del navegador que interprete el código
console.log("Soy el primer script");

//Esta es la manera que tengo de fijarme que el cliente tenga JS activado en su navegador,
//En caso que no lo tenga el h1 con el mensaje de alerta será visible, en caso contrario, no.
document.getElementById("mensajeAlerta").style.display = "none";
