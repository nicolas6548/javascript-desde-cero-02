// Ejemplo 1: VALORES BOOLEANOS BÁSICOS

let verdadero = true;
let falso = false;

console.log("\n***** VALORES BOOLEANOS BÁSICOS *****");
console.log("Verdadero: ", verdadero, "\nEs de tipo: ", typeof verdadero, "\n");
console.log("False: ", falso, "\n Es de tipo: ", typeof falso);
console.log("\n******************************************\n");

// Ejemplo 2: CREACIÓN CON CONSTRUCTOR BOOLEAN

let bool1 = Boolean(true);
let bool2 = Boolean(false);
let bool3 = new Boolean(true); // Objeto boolean, no primitivo

console.log("\n***** CREACIÓN CON CONSTRUCTOR BOOLEAN *****\n");
console.log("Boolean(true): ", bool1, "\nEs de tipo: ", typeof bool1, "\n");
console.log("Boolean(false): ", bool2, "\nEs de tipo: ", typeof bool2, "\n");
console.log("new Boolean(true): ", bool3, "\nEs de tipo: ", typeof bool3, "\n");
console.log("¿Son iguales bool1 y bool3?: ", bool1 == bool3, "\n");
console.log("¿Son estrictamente iguales?: ", bool1 === bool3);
console.log("\n******************************************\n");

// Ejemplo 3: OPERADORES DE COMPARACIÓN

let a = 10;
let b = 5;
let c = "10";

console.log("\n***** OPERADORES DE COMPARACIÓN *****\n");
console.log("a = ", a, "b = ", b, "c = ", c);
console.log("a > b: ", a > b);
console.log("a < b: ", a < b);
console.log("a >= 10: ", a >= 10);
console.log("a <= 10: ", a <= 10);
console.log("a == c (igualdad): ", a == c);
console.log("a === c (igualdad estricta): ", a === c);
console.log("a != b (desigualdad): ", a != b);
console.log("a !== c (desigualdad estricta): ", a !== c);
console.log("\n******************************************\n");

// Ejemplo 4: OPERADORES LÓGICOS BÁSICOS

console.log("\n***** OPERADORES LÓGICOS BÁSICOS *****\n");
console.log("\n***** AND (&&) - true si AMBOS son true *****\n");
console.log("true && true: ", true && true);
console.log("true && false: ", true && false);
console.log("false && true: ", false && true);
console.log("false && false: ", false && false);
console.log("\n******************************************\n");

console.log("\n***** OR (||) - true si AL MENOS UNO es true *****\n");
console.log("true || true: ", true || true);
console.log("true || false: ", true || false);
console.log("false || true: ", false || true);
console.log("false || false: ", false || false);
console.log("\n******************************************\n");

console.log("\n***** NOT (!) - invierte el valor *****\n");
console.log("!true: ", !true);
console.log("!false: ", !false);
console.log("!!true: ", !!true);
console.log("\n******************************************\n");
