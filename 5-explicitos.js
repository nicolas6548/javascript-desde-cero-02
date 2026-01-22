// Números a "string"

let numero = 50;
let texto = String(numero);

console.log(texto); // "50"
console.log(typeof texto); // "string"

// boolean a string
console.log(String(true)); // "true"
console.log(String(false)); // "false"

// Array a string
console.log(String([1, 2, 12, 394])); // "1, 2, 12, 394"

// objeto a string
console.log(String({ a: 12 })); // "[object Object]"



// String a número
console.log(Number("44"));  // 44
console.log(Number("3.15"));  // 3.15
console.log(Number("43Hola"));  // NaN (Not a Number)

// Boolean a número
console.log(Number(true));  // 1
console.log(Number(false));  // 0

// fechas
console.log(Number(new Date()));
// 1768946650100, es el numero en milisegundos desde 1970

// Strings problemáticos
console.log(Number(""));
// como ya vimos un string vacio es falsy, por lo tanto seria 0
console.log(Number("   "));  // idem arriba
console.log(Number("Hola Mundo"));  //NaN


//booleanos
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hola mundo")); // true
console.log(Boolean("")); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true 
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false



// CONVERSION A ENTEROS DE DIFERENTES BASES

// binario (base 2)
console.log(parseInt("1010", 2)); // 10

// octal (base 8)
console.log(parseInt("12", 8)); // 10

// hexadecimal (base 16)
console.log(parseInt("A", 16)); // 10
console.log(parseInt("0xFF")); // 255 (hexadecimal)


// MÉTODOS ALTERNATIVOS

// toString() - similar a string()
let num = 55;
console.log(num.toString()); // "55"

// parseInt() y parseFloat() - Para números solamente
console.log(parseInt("75hola")); // 75 (extrae solo el número)
console.log(parseFloat("3.11 centimetros")); // 3.11 (tambien extrae solo el número)

// Operador + para números
console.log(+"14"); // 14 (igual que Number ("14"))
