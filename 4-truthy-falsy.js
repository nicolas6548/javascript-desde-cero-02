// RESPUESTAS FALSY (COMO DECIR "NO TENGO")

false     // el booleano false
0         // El número cero
""        // El string vacio (comillas dobles)
''        // El string vacio (comillas simples)
``        // El string vacio (comillas invertidas o template literals)
null      // Valor nulo (ausencia intencional de valor)
undefined // Valor no definido (variable sin valor)
NaN       // Not a Number (resultado de operaciones matemáticas inválidas)


// RESPUESTAS TRUTHY (COMO DECIR "SI TENGO")

/* true            --> "Sí, tengo verdad"
1, -1, 3.14     --> "Sí, tengo cantidad"
"Hola mundo"    --> "Sí, tengo texto" 
[]              --> "Sí, tengo una lista (aunque vacia)"
{}              --> "Sí, tengo un objeto (aunque vacio)"
function(){}    --> "Sí, tengo una función"
 */

// Ejemplo 1: El control de acceso

let nombreUsuario = "";   // String vacío da falsy
let edad = 48;            // Número distinto a 0 da truthy

if (nombreUsuario){
  console.log("BIENVENIDO " + nombreUsuario);  
} else{
  console.log("Usuario no registrado");  
}

if (edad){
  console.log("Edad válida: " + edad);  
}


// Ejemplo 2: Validación de formulario

function validarFormulario(nombre, email, edad)
{
  if (nombre && email && edad)
  {
    return "Formulario válido ✅";
  } else
  {
    return "Faltan datos ❌";
  }
}

console.log("\n***** VALIDACIÓN DE FORMULARIO *****\n");

console.log(validarFormulario("Nicolas", "yo@yo.com", 48));
// "Formulario válido ✅"
console.log(validarFormulario("", "yo@yo.com", 48));
// "Faltan datos ❌", PORQUE FALTA NOMBRE
console.log(validarFormulario("Nicolas", "", 48));
// "Faltan datos ❌", PORQUE FALTA EMAIL
console.log(validarFormulario("Nicolas", "yo@yo.com", 0));
// "Faltan datos ❌", PORQUE FALTA EDAD


// EJEMPLO 3: La paradoja del cero

let temperatura = 0; // el 0 es falsy, pero es una temperatura valida

console.log("\n***** LA PARADOJA DEL CERO *****\n");
console.log("Sin verificacion = NO FUNCIONA");

if (temperatura){
  console.log(`Temperatura: ${temperatura}°C`);  
} else{
  console.log("Temperatura no disponible");  
}

console.log("\nCon verificacion explicita = FUNCIONA");

if (temperatura !== undefined && temperatura !== null){
  console.log(`Temperatura: ${temperatura}°C`);  
} else{
  console.log("Temperatura no disponible");  
}


// EJEMPLO 4: Operador lógico && (AND)

let usuario = { nombre: "Nicolas", edad: 48 };
// Si existe el usuario (truthy), se accede a su nombre
let nombre = usuario && usuario.nombre;
console.log(nombre);

// Cuando el usuario esta nullo (null)
let usuario2 = null;
let nombre2 = usuario2 && usuario.nombre2
console.log(usuario2);


// EJEMPLO 5: El caso curioso de los objetos vacíos

let objetoVacio = {}; // truthy
let arrayVacio = []; // truthy
let stringVacio = ""; // falsy

console.log(Boolean(objetoVacio));  // true
console.log(Boolean(arrayVacio)); // true
console.log(Boolean(stringVacio));  // false


//el objeto ({}) y el array ([]) son objetos para JavaScript, y cualquier objeto es truthy.
// el string vacío ("") es un primitivo que es falsy
