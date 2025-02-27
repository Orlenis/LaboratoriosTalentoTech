 
//ejercicio 1
let nombre = "Orlenis";
let edad = 33;
let esEstudiante = true;

console.log("Nombre: ", nombre);
console.log("Edad: ", edad);
console.log("Es estudiante?: ", esEstudiante)

//ejercicio 2
let a = 5;
let b = 2;

let suma = a+b;
let resta = a-b;
let mult = a*b;
let div = a/b;

console.log("a= "+ a + " b= " + b);
console.log("Suma: "+ suma);
console.log("Resta: "+ resta);
console.log("Multiplicacion: "+ mult);
console.log("Division: "+ div);

console.log("a es igual b: ", a==b);
console.log("a es diferente de b:" , a!=b)
console.log("a es mayor de b: ", a>b);
console.log("a es menor de b: ", a<b);
console.log("a es mayor o igual de b: ", a>=b);
console.log("a es menor o igual de b: ", a<=b);

//ejercicio 3
let esMayorDeEdad = true;
let tieneLicencia = false;

let puedeConducir = esMayorDeEdad && tieneLicencia;
let puedeConducir1 = esMayorDeEdad || tieneLicencia;

console.log("Bienvenido!!")
console.log("Puede cnducir sin licencia?: ", puedeConducir);
console.log("Puede Conducir porque es mayor de edad?: ", puedeConducir1);

//ejercicio 4
let nombreUsuario = prompt("¿Cuál es tu nombre? ");
let edadUsuario = parseInt(prompt("¿Cuál es tu edad? "));
let esEstudiante1 = prompt("¿Eres estudiante? (sí/no):").toLowerCase();

let esMayorDeEdad1 = edadUsuario >= 18;
let tieneDescuento = esEstudiante1 === "si";     

let mensaje = "Hola " + nombreUsuario;
mensaje += " . Tienes " + edadUsuario + " años.";

if (esMayorDeEdad1) {
  mensaje += " Eres mayor de edad.";
} else {
  mensaje += " Eres menor de edad.";
}

if (tieneDescuento) {
  mensaje += " Tienes derecho a un descuento por ser estudiante.";
} else {
  mensaje += " No tienes derecho a un descuento.";
}

console.log(mensaje);
