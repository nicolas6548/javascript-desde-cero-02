// EJERCICIO 1: Números enteros y decimales

let entero = 43;
let decimal = 13.04;
let negativo = -84;

console.log("\n***** TIPO DE DATOS NUMERICO *****\n");

console.log(
  "El tipo entero es: ",
  entero,
  " \ny es de tipo: ",
  typeof entero,
  "\n"
);
console.log(
  "El tipo decimal es: ",
  decimal,
  " \ny el tipo de dato es: ",
  typeof decimal,
  "\n"
);
console.log(
  "El tipo negativo es: ",
  negativo,
  " \ny el tipo de dato es: ",
  typeof negativo,
  "\n"
);

// Ejemplo 2: Operaciones aritméticas básicas

let suma = 15 + 3;
let resta = 15 - 3;
let multiplicacion = 15 * 3;
let division = 15 / 3;
let modulo = 17 % 2; //devuelve el resto de la division

console.log("\n\n");
console.log("*****OPERACIONES ARITMÉTICAS BÁSICAS*****\n");

console.log("La suma 15 + 3 da: ", suma, "\n");
console.log("La resta 15 - 3 da: ", resta, "\n");
console.log("La multiplicacion 15 * 3 da: ", multiplicacion, "\n");
console.log("La dividion 15 / 3 da: ", division, "\n");
console.log("El modulo de 15 % 2 da: ", modulo);

// Ejemplo 3: Notación científica

let grande = 5e6; // 5 millones
let pequeño = 2e-3; // 0.002

console.log("\n***** NOTACIÓN CIENTÍFICA *****\n");

console.log(
  "Dato grande 5e6 el resultado es: ",
  grande,
  "\ny es de tipo: ",
  typeof grande,
  "\n"
);
console.log(
  "Dato pequeño 2e-3 el resultado es: ",
  pequeño,
  "\ny es de tipo: ",
  typeof pequeño,
  "\n"
);
console.log("***************************");

// Ejemplo 4: valores especiales numéricos

let infinitoPositivo = Infinity;
let infinitoNegativo = -Infinity;
let noEsNumero = NaN;

console.log("\n***** VALORES ESPECIALES NUMÉRICOS ******\n");
console.log(
  "Numero infinito positivo: ",
  infinitoPositivo,
  "\nes de tipo: ",
  typeof infinitoPositivo,
  "\n"
);
console.log(
  "Numero infinito negativo: ",
  infinitoNegativo,
  "\nes de tipo: ",
  typeof infinitoNegativo,
  "\n"
);
console.log(
  "NaN (no es un numero) que es?: ",
  noEsNumero,
  "\nes de tipo: ",
  typeof noEsNumero,
  "\n"
);
console.log("¿Es NaN un número? ", typeof noEsNumero === "number");
console.log("\n***********************************");

// Ejemplo 5: Precisión y límites numéricos

let maximo = Number.MAX_VALUE;
let minimo = Number.MIN_VALUE;
let maximoSeguro = Number.MAX_SAFE_INTEGER;
let minimoSeguro = Number.MIN_SAFE_INTEGER;

console.log("\n***** PRECISIÓN Y LÍMITES NUMÉRICOS *****\n");
console.log("Máximo valor posible: ", maximo, "\n");
console.log("Mínimo valor posible: ", minimo, "\n");
console.log("Máximo entero seguro: ", maximoSeguro, "\n");
console.log("Mínimo entero seguro: ", minimoSeguro);

// Ejemplo 6: COERCIÓN DE TIPOS Y NÚMEROS

let stringANumero = Number("1234");
let numeroAString = String(1234);
let parseoEntero = parseInt("123.73");
let parseoDecimal = parseFloat("123.73");

console.log("\n***** COERCIÓN DE TIPOS Y NÚMEROS *****\n");
console.log(
  'Number ("1234"): ',
  stringANumero,
  "\n es de tipo: ",
  typeof stringANumero,
  "\n"
);
console.log(
  "String (1234): ",
  numeroAString,
  "\n es de tipo: ",
  typeof numeroAString,
  "\n"
);
console.log('parseInt ("123.73"): ', parseoEntero, "\n");
console.log('parseFloat ("123.73"): ', parseoDecimal);
console.log("\n**********************************\n");

// Ejemplo 7: NÚMEROS HEXADECIMALES, BINARIOS Y OCTALES

let hexadecimal = 0xff; //255 en decimal
let binario = 0b11111111; //255 en decimal
let octal = 0o377; // 255 en decimal

console.log("\n***** HEXADECIMALES, BINARIOS Y OCTALES *****\n");
console.log("Hexadecimal 0xFF: ", hexadecimal, "\n");
console.log("Binario 0b11111111: ", binario, "\n");
console.log("Octal 0o377: ", octal, "\n");
console.log("************************************");

// Ejemplo 8: MÉTODOS ÚTILES DEL OBJETO NUMBER

let numero = 123.456;

console.log("\n***** MÉTODOS ÚTILES DEL OBJETO NUMBER *****\n");
console.log("toFixed (2): ", numero.toFixed(2), "\n");
console.log("toPrecision (4): ", numero.toPrecision(4), "\n");
console.log("toString(): ", numero.toString(), "\n");
console.log("toString(2) en binario: ", numero.toString(2), "\n");
console.log("toString(16) en hexadecimal: ", numero.toString(16), "\n");
console.log("toString(8) en octal: ", numero.toString(8), "\n");
console.log("\n*******************************************");
