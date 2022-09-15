import "./styles.css";

// Interacción: alert, prompt, confirm

//alert
//Este ya lo hemos visto. Muestra un mensaje y espera a
//que el usuario presione “Aceptar”.

alert("Hello");

//prompt
//La función prompt acepta dos argumentos:
//title
//El texto a mostrar al usuario.
//El usuario puede escribir algo en el campo de entrada de solicitud
//y presionar OK. Así obtenemos ese texto en result.
//O puede cancelar la entrada presionando Cancelar o presionando
//la tecla Esc obteniendo null en result.

var title: string = "PROMPT";
var result = undefined;

result = prompt(title);

console.log(result);

//confirm
//La sintaxis:
//result = confirm(pregunta);
//La función confirm muestra una ventana modal con una pregunta
//y dos botones: OK y CANCELAR.
//El resultado es true si se pulsa OK y false en caso contrario.
//Por ejemplo:

let isBoss = confirm("¿Eres el jefe?");

alert(isBoss); // true si se pulsa OK
console.log(isBoss);

//EJERCICIO

var nombre = "INGRESA TU NOMBRE";
var mostrar = undefined;
mostrar = prompt(nombre);
console.log(mostrar);
