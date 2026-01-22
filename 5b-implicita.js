// string + número = string (concatenación)
console.log("El resultado es: " + 55); // "El resultado es: 55"
console.log(5 + "5"); // "55" (PERO NO ES 10??????)

// Número + booleano = número
console.log(5 + true); // 6 (true = 1)
console.log(5 + false); // 5 (false = 0)

//Resta convierte a número
console.log("13" - 5); // 8 (coerción a número)
console.log("15" * 3); // 45
console.log("15" / 3); // 5

// Comportamientos extraños
console.log("array vacios a string ", [] + []); // "" (arrays vacios a string)
console.log("[object Object]", [] + {}); // "[object Object]"
console.log("[object Object]", {} + []); // 0 (en algunas consolas)

// EN COMPARACIONES == VS ===

console.log("\n*****  *****\n");
console.log(5 == "5"); // true el string 5 se convierte a número 5
console.log(true == 1); // true es en binario 1
console.log(false == 0); // true false en binario es 0
console.log(null == undefined); // true, este es un caso especial
console.log("" == 0); // true, el string vacio "" se convierte a 0

console.log("\n***** IGUALDAD ESTRICTA - NO HACE COERCIÓN *****\n"); //
console.log(5 === "5"); // false, la comparacion extricta dice que son de distintos tipos
console.log(true === 1); // false
console.log(false === 0); // false
console.log(null === undefined); // false

console.log("\n***** CASO CURIOSO *****\n"); //
console.log([] == ![]); // TRUE ¿EEEEEEEEEEEEEE?
// EXPLICACIÓN: ![] es false, [] se convierte a "" y "" == false es true

// EN CONTEXTOS BOOLEANOS IF, WHILE, && Y ||

let nombre = "";
// nombre se convierte implícitamente a boolean

if (nombre) {
  console.log("Hola: ", nombre);
} else {
  console.log("Nombre no proporcionado"); // se ejecuta el else
}

// con valores numéricos

let cantidad = 0; // 0 es falsy
if (cantidad) {
  console.log("Hay productos");
} else {
  console.log("Sin productos"); // obviamente se ejecuta el else
}

// CON OPERADORES LÓGICOS

// OR (||) devuelve el primer valor truthy
console.log("\n***** *****\n");
console.log(0 || "default"); // "default" (0 es falsy)
console.log("" || "Hola Mundo"); // "Hola Mundo" ("" es falsy)
console.log("JavaScript" || "Hola Mundo"); // "JavaScript" devuelve el primer truthy

console.log(
  "\n***** AND (&&) devuelve el primer valor falsy o el último truthy *****\n",
); //
console.log("EJEMPLO 1: ", 0 && "Hola Mundo"); // 0 (primer valor falsy)
console.log("EJEMPLO 2: ", "Hola Mundo" && "JavaScript"); // "JavaScript" (como son ambos truthy devuelve el último)
console.log("EJEMPLO 3: ", "" && "Hola Mundo"); // "" (primer falsy)

// TEMPLATE LITERALS

let precio = 99.47;
let disponible = true;

// hace una conversión implícita a string
console.log(`Precio: ${precio}`); // "Precio: 99.47"
console.log(`Disponible: ${disponible}`); // "Disponible: ture"
console.log(`Array: ${[1, 3, 84]}`); // "Array: 1, 3, 84"

// EJEMPLO 1: SUMA DE VALORES

// EXPLICITA - Control total
let a = "10";
let b = "8";

let sumaExplicita = Number(a) + Number(b);
console.log(sumaExplicita); // 18
console.log(typeof sumaExplicita); // number

// IMPLÍCITA - JavaScript decide
let sumaImplicita = a + b;
console.log(sumaImplicita); // 108 (CONCATENACION)
console.log(typeof sumaImplicita); // STRING

// QUE PASA CON LA RESTA? MULTIPLICACION? Y DIVISION?
let restaImplicita = a - b;
console.log(restaImplicita); // SORPRESA!!!!!! 2 JavaScript convierte a numero
let multiplicacion = a * b;
console.log(multiplicacion); // 80
let division = a / b;
console.log(division); // 1.25

// RESUMIENDO

// PELIGRO: suma vs concatenación

console.log(1 + 2 + 3); // 6
console.log(1 + 2 + "3"); // 33 (1 + 2 = 3, luego 3 + "3" = 33
console.log("1" + 2 + 3); //123 ("1" + 2 = "12", luego "12" + "3")
// para solucionarlo lo convertimos explicitamente
let resultado = Number("1") + 2 + 3;
console.log("El resultado es: ", resultado); // 6
