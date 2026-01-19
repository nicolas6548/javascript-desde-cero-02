// Ejemplo 1: Creación de strings básicos

let comillasDobles = "Hola Mundo";
let comillasSimples = "Hola JavaScript";
let backticks = `Hola comillas invertidas`;

console.log("\n***** CREACIÓN DE STRINGS BÁSICOS *****\n");
console.log(
  "Comillas dobles: ",
  comillasDobles,
  "\ntipo",
  typeof comillasDobles,
  "\n"
);
console.log(
  "Comillas simples: ",
  comillasSimples,
  "\ntipo: ",
  typeof comillasSimples,
  "\n"
);
console.log("Backticks: ", backticks, "\ntipo: ", typeof backticks);

//********************************************************************
// Ejemplo 2: STRINGS CON CARACTERES ESPECIALES
//********************************************************************

let saltoLinea = "Línea 1\nLínea 2";
let tabulacion = "columna 1\tColumna 2\tColumna 3";
let comillasDentro = 'Dijo: "Hola Mundo"';
let comillasSimplesDentro = "Dijo: 'Hola Mundo con comillas simples'";
let backslash = "Ruta: C:\\Users\\Nombre";

console.log("\n***** STRINGS CON CARACTERES ESPECIALES *****\n");

console.log("Salto de línea:");
console.log(saltoLinea);
console.log("\nTabulación: ");
console.log(tabulacion);
console.log("\nComillas dentro: ", comillasDentro, "\n");
console.log("Comillas simples dentro: ", comillasSimplesDentro);
console.log("\nBackslash: ", backslash);

//********************************************************************
// Ejemplo 3: TEMPLATE LITERALS (BACKTICKS)
//********************************************************************

let nombre = "Nicolas";
let edad = 48;
let sueldo = 60000;

// vamos a incrustar algunas variables al string
let presentacion = `Hola, me llamo ${nombre} y tengo ${edad} años`;

// Expresiones dentro del ${}
let sueldoMensual = `Mi sueldo mensual es de: $${sueldo / 12}`;

// String multilínea
let carta = `Estimado ${nombre},
Te escribo para informarte que...
Me entere que cumpliste años y ahora tenes ${edad} felicidades.
Att yo`;

console.log("\n***** TEMPLATE LITERALS (BACKTICKS) *****\n");
console.log("Presentacion: ", presentacion);
console.log("\nInforme sueldo mensual: ", sueldoMensual);
console.log("\nCarta:");
console.log(carta);

//********************************************************************
// Ejemplo 4: PROPIEDAD LENGTH Y ACCESO A CARACTERES
//********************************************************************

let texto = "Practicando JavaScript";
let textoLargo = "Estamos practicando los videos que descargamos de TELEGRAM";
let vacio = "";

console.log("\n***** PROPIEDAD LENGTH Y ACCESO A CARACTERES *****\n");
console.log("Texto: ", texto, "\n");
console.log("Longitud: ", texto.length, "\n");
console.log("Texto largo: ", textoLargo, "\n");
console.log("Segunda longitud: ", textoLargo.length, "\n");
console.log("Último carácter: ", texto[texto.length - 1], "\n");
console.log("En que posicion esta la J?: ", texto[12], "\n");
console.log("String vacio: ", vacio, "Tiene una longitud de: ", vacio.length);

//********************************************************************
// Ejemplo 5: MÉTODOS COMUNES DE STRINGS (PARTE 1)
//********************************************************************

let frase = "JavaScript es un lenguaje de programación";

// MÉTODO toUpperCase() Y toLowerCase()

console.log("\n***** MÉTODO toUpperCase() Y toLowerCase() *****\n");
console.log("Frase original: ", frase, "\n");
console.log("toUpperCase(): ", frase.toLocaleUpperCase(), "\n");
console.log("toLowerCase(): ", frase.toLowerCase(), "\n");
console.log("\n*********************************************\n");

// MÉTODO indexOf() Y lastIndexOf()

console.log("\n***** MÉTODO indexOf() Y lastIndexOf() *****\n");

console.log("indexOf('a'): ", frase.indexOf("a"), "\n");
// Encuentra la primera aparicion de la letra 'a'
console.log("lastIndexOf('a'): ", frase.lastIndexOf("a"), "\n");
// Encuentra la ultima aparicion de la letra 'a'
console.log("indexOf('Python'): ", frase.indexOf("Python"), "\n");
// Busca la palabra Python y no la encuentra, en este caso devuelve -1
console.log("\n*********************************************\n");

// MÉTODO includes(), startWith(), endsWith()

console.log("\n***** MÉTODO includes(), startWith(), endsWith() *****\n");
console.log("includes('lenguaje'): ", frase.includes("lenguaje"), "\n");
console.log("startsWith('Java'): ", frase.startsWith("Java"), "\n");
console.log("endsWith('programación'): ", frase.endsWith("programación"), "\n");
console.log("\n*********************************************\n");

//********************************************************************
// Ejemplo 6, MÉTODOS COMUNES DE STRINGS (PARTE 2)
//********************************************************************

let textoEspaciado = "     JavaScript     ";
let textoLargo2 = "El perro canta bajo la lluvia, y canta cantando";

// MÉTODO trim(), trimStart(), trimEnd()
console.log("\n***** trim(), trimStart() y trimEnd()*****\n");
console.log("Original: ", textoEspaciado, "\n");
console.log("trim(): ", textoEspaciado.trim(), "\n");
console.log("trimStart(): ", textoEspaciado.trimStart(), "\n");
console.log("trimEnd(): ", textoEspaciado.trimEnd(), "\n");
console.log("\n*****************************************\n");

// MÉTODO slice() Y substring()
console.log("\n***** slice(), substring()*****\n");
console.log("texto largo: ", textoLargo2, "\n");
console.log("slice(3, 8): ", textoLargo2.slice(3, 8), "\n");
console.log("slice(-7): ", textoLargo2.slice(-5), "\n"); // Últimos 7 caracteres
console.log("substring(15, 22): ", textoLargo2.substring(15, 22), "\n");
console.log("\n*****************************************\n");

// MÉTODO replace() Y replaceAll()
console.log("\n***** replace(), replaceAll() *****\n");
console.log(
  "replace('perro', 'gato'): ",
  textoLargo2.replace("perro", "gato"),
  "\n"
);
console.log("reemplazando la a por O): ", textoLargo2.replace(/a/g, "O"), "\n");
console.log("\n*****************************************\n");

// CONCATENACIÓN DE STRINGS

let nombre2 = "Nicolas";
let apellido = "Peralta";
let edad2 = 48;

// CON OPERADOR +
let concatenacion1 = nombre2 + " " + apellido + " tiene " + edad2 + " años";

// CON concat()
let concatenacion2 = nombre2.concat(" ", apellido, " tiene ", edad2, " años");

// con temmplate literals
let concatenacion3 = `${nombre2} ${apellido} tiene ${edad2} años`;

// CONCATENACIÓN CON NÚMEROS
let numeroString = "10";
let sumaString = numeroString + 10;
let sumaNumeros = Number(numeroString) + 10;

console.log("\n***** CONCATENACIONES VARIAS *****\n");
console.log("Con +: ", concatenacion1, "\n");
console.log("Con concat(): ", concatenacion2, "\n");
console.log("Con template literal: ", concatenacion3, "\n");
console.log(
  "String + número: ",
  sumaString,
  "\n Es de tipo: ",
  typeof sumaString,
  "\n"
);
console.log(
  "Number(string) + número: ",
  sumaNumeros,
  "\nEs de tipo: ",
  typeof sumaString,
  "\n"
);
console.log("\n*********************************************\n");

//********************************************************************
// Ejemplo 7: SPLIT Y JOIN
//********************************************************************

let listaCompras = "manzana, banana, naranja, uva, melon, sandia, pomelo";
let oracion = "El veloz murciélago hindú, volaba en la noche";

// split() - convertir string a array
let frutasArray = listaCompras.split(",");
let palabraArray = oracion.split(" ");
let letraArray = "JavaScript".split("");

console.log("\n***** SPLIT *****\n");
console.log("String original: ", listaCompras);
console.log("split(): ", frutasArray);
console.log("String original: ", oracion);
console.log("split(): ", palabraArray);
console.log("'JavaScript'.split(''): ", letraArray);
console.log("\n****************************************\n");

// join() - convertir array a string (método de array, no de string)
let nuevoString = frutasArray.join(" / ");

console.log("\n***** JOIN *****\n");
console.log("Array: ", frutasArray);
console.log("join(' / '): ", nuevoString);

//********************************************************************
// Ejemplo 8: CONVERSIÓN A STRING Y COMPARACIÓN
//********************************************************************

let numero = 43;
let booleano = true;
let nulo = null;
let indefinido;

// CONVERSIÓN IMPLÍCITA Y EXPLÍCITA
let str1 = String(numero); // EXPLÍCITA
let str2 = numero + ""; // IMPLÍCITA
let str3 = booleano.toString();

console.log("\n***** IMPLÍCITA Y EXPLÍCITA *****\n");
console.log("String(43): ", str1, "\nEs de tipo: ", typeof str1, "\n");
console.log("43 + '': ", str2, "\nEs de tipo: ", typeof str2, "\n");
console.log("ture.toString(): ", str3, "\nEs de tipo: ", typeof str3, "\n");
console.log("String(null): ", String(nulo), "\n");
console.log("String(undefined): ", String(indefinido));
console.log("\n**************************\n");

//COMPARACIÓN DE STRINGS
let strA = "Hola";
let strB = "hola";
let strC = "Hola";

console.log("\n***** COMPARACIÓN DE STRINGS *****\n");
console.log("'Hola' === 'hola': ", strA === strB); //como ya sabemos === es comparacion extricta
console.log("'Hola' === 'Hola': ", strA === strC);
console.log("'Hola'.localeCompare('hola'): ", strA.localeCompare(strB));
console.log("'Hola'.localeCompare('Hola'): ", strA.localeCompare(strC));
// en estos dos casos, si el resutlado es -1 serian diferentes, si el resultado es 0, son iguales
console.log("\n**************************\n");
