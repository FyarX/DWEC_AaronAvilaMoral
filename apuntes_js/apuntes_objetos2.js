//? OBJETO NUMBER
let numObj = new Number(5);


// Propiedades predefinidas
console.log(Number.MAX_VALUE); // Maximo valor existente en js
console.log(Number.MIN_VALUE); // Minimo valor existente en js
console.log(Number.NaN); // NaN
console.log(Number.POSITIVE_INFINITY); // Como js representa infinito
console.log(Number.MAX_SAFE_INTEGER); // Mayor numero representable por js que sea seguro

let sum = 0.1 + 0.2 // Devuelve 0,300000000004 
console.log(sum.toFixed(2)); // Redondea en 2 decimales (0,3)

// BigInt
const num = Number.MAX_SAFE_INTEGER + 1;
console.log(num); // No lo representa precisamente
const num2 = BigInt(Number.MAX_SAFE_INTEGER+1n);
console.log(num2); // Se representa con precisión


// Comparacion 
let num1 = 5;
let obj1 = new Number(5);
let obj2 = new Number(5);

console.log(num1 == 5);//True
console.log(obj1 == 5);//True
console.log(obj1 == obj2); //False
console.log(obj1.valueOf() == obj2.valueOf());//True


// Métodos para comprobar información

console.log(isFinite(5)); 
console.log(isNaN("Hola"));
console.log(Number.isInteger(5));


//! Convertir
// To String
let obj3 = new Number(5);
let obj4 = new Number(5.5);
console.log(obj1.toString());

console.log(String(Infinity), String(5));

// To number
console.log(Number("hola"), // Devuelve NaN
Number("12.5"), // Devuelve 12,5
Number(true)); // Devuelve 1

console.log(parseInt("250px"), // 250
parseInt("12.5")); // 12

console.log(parseFloat("12.5")); // 12,5


//? OBJETO MATH
console.log(
    Math.PI,
    Math.E,
    Math.LN2, // Logaritmo neperiano de 2
    Math.LN10,
    Math.SQRT2, // Raiz cuadrada
    Math.SQRT1_2,
    Math.LOG2E,
    Math.LOG10E
);

// Redondeo
const float1 = 2.567;
const float2 = 2.456;

Math.floor(float1); // Redondea hacia abajo
Math.ceil(float1); // Redondea hacia arriba
Math.round(float1); // Redondea hacia el que está mas cerca
Math.trunc(float1); // Descarta la parte final

// Operaciones matematicas básicas
const numero1 = 5;

Math.abs(numero1) // Convierte en absoluto (Positivo)
Math.sqrt(numero1) // Devuelve la raíz cuadrada de un número
Math.pow(numero1, 5) // Eleva numero1 a 5
Math.min(2, 6, 7, 14) // Devuelve el número mínimo
Math.min(...mat1, ...mat2, ...mat3); // Para usarlo con matrices se utiliza el spread operator
Math.max(24423, 643, 3242);
Math.log(10)
Math.random() // Devuelve un número aleatorio entre 0 y 1 sin incluir el 1
Math.random()*(max-min) + min; // Numero aleatorio entre 2 valores concretos


// Funciones trigonométricas
Math.sin(numero1) // Devuelve el seno de un número
Math.cos(numero1) // Devuelve el coseno de un número
Math.tan(numero1) // Devuelve la tangente de un número
Math.hypot(numero1) // Devuelve la tangente de un número


//? REGULAR EXPRESSIONS (REGEXP)
// Expresiones regulares literales (Forma más común)
const exp1 = /gato/;
// Como un objeto (Forma dinámica o con APIs)
const exp2 = new RegExp("gato");
const palabra = prompt("¿Qué quieres buscar?");
const exp3 = new RegExp(palabra);

// Testeo Expresiones Regulares
const texto = "Mi gato es estupendo. Mi gato es amarillo";
exp1.test(texto); // Devuelve true si encuentra el patron en el texto
exp1.exec(texto); // Devuelve un array con la primera ocurrencia del patrón

//! Modificadores
// i -> Ignora mayusculas y minúsculas
const exp4 = /GATO/;
exp4.test(texto); // False
const exp5 = /GATO/i;
exp4.test(texto); // True

//g -> Indica todas las ocurrencias del patron
const expr = /gato/g;
expr.exec(texto); // Sigue devolviendo 1 gato, para los demás habrá que iterarlo con un while

//y -> 
let cadena = "gato GATO,Gato";
const expG = /gato/g;
const expY = /gato/y;

expG.exec(cadena) // [gato] [GATO] [Gato]
expY.exec(cadena) // [gato] [GATO] (Solo muestra aquellos valores que se encuentran seguidamente sin ningun otro caracter entre medias)

//m -> Busca en el comienzo de cada linea
let string = 'Hola'
'mundo' 
'adios' 
'a todos';

const regM = /mundo/m;
regM.test(string); // True ya que aparece al comienzo de la segunda linea

//! Cuantificadores 
// * -> Coincide con 0 o mas coincidencias con el caracter que tiene antes
let expr2 = /ho*la/;
expr2.test("hola") // True
expr2.test("hla") // True
expr2.test("hooooooooooola") // True

// + -> Coincide con 1 o mas coincidencias con el caracter de antes
let expr3 = /ho+la/;
expr3.test("hola") // True
expr3.test("hla") // False
expr3.test("hooooooooooola") // True

// Interrogación (?) -> Lo mismo solo que con 0 o 1 ocurrencias
let expr4 = /ho?la/;
expr4.test("hola") // True
expr4.test("hla") // True
expr4.test("hooooooooooola") // False

// {n} -> Coincide exactamente con n repeticiones
let expr5 = /ho{3}la/;
expr5.test("hola") // False
expr5.test("hla") // False
expr5.test("hooola") // True

// {n, m} -> Coincide exactamente con entre n y m repeticiones
let expr6 = /ho{3,5}la/;
expr6.test("hola") // False
expr6.test("hla") // False
expr6.test("hoooola") // True

// {n,} -> Coincide con un numero de repeticiones de n o más
let expr7 = /ho{3,}la/;
expr6.test("hola") // False
expr6.test("hla") // False
expr6.test("hoooooooooooola") // True 

// | (Or) (Concatenación)
const buscar = / /

// \ -> Protege caracteres similares a los de la propia expresión regular
let cadena2 = "<li>texto1</li><li>texto2</li>";

regexphtml = /<li>.*<\/li>/; // Encuentra la máxima ocurrencia
regexphtml2 = /<li>.*?<\/li>/; // Encuentra la minima ocurrencia

//! Grupos y rangos
//() -> Grupos
let regex = /(ab)+/ // Busca hasta la ultima coincidencia de ab la cadena

// Ejemplo
let regex2 = /(ho){2,3}/;
console.log(regex2.exec(cadena)); // Devuelve la ocurrencia de ho que se repite entre 2 y 3 veces

//[] Rangos
let regex3 = /[a-l]/; // Busca cualquier letra entre la a y la l
const cadena3 = "kjelnwnascna" // Devuelve k, si no estuviera devolvería e


//! Clases de caracteres
// . -> Coincide con cualquier caracter salvo line break
// \d -> Igual que {0-9}
// \D -> Cualquier caracter que no sea un número
// \w -> Coincide con cualquier letra, numero o _
// \W -> Al revés que el anterior
// \s -> Coincide con un espacio
// \S -> Coincide con cualquier caracter visible
// [^] -> NOT de lo que haya adentro del corchete


//! Límites
// ^ -> 
// \b -> Determina caracteres que representen principios o finales de palabra
// \B -> No límite de palabra


//? STRING
let string1  = "Hola";
const strObj = new String("Cadena objeto");

// Obtener información del objeto
strObj.valueOf(); // Retorna "Cadena objeto"
strObj.length(); // Devuelve el número de caracteres
strObj.at(5) // Devuelve el caracter situado en ese indice del string

// Concatenación
let cad3 = strObj.valueOf()+" "+ strObj.valueOf(); // El resultado es de tipo string, no objeto
let cad4 = new String(strObj.valueOf()+" "+ strObj.valueOf()); // El resultado es de tipo objeto
strObj.concat(strObj); // Tipo string
strObj.padStart(strObj.length+10, "a");
strObj.padEnd(strObj.length+10, "a");

// Otros metodos
strObj.toUpperCase();
strObj.toLowerCase();
let resultado = strObj.replace("hola", "adios")
let resultado1 = strObj.replaceAll("hola", "adios")
strObj.trim(); // Elimina espacios del principio y del final
strObj.includes("h") // Devuelve true o false si está o no en el string
strObj.match(/\b[H]\d/)


// Métodos para extraer cadenas
let cadObj1 = new String("hola");
let [a,b,c,d] = console.log(...cadObj1);

//? OBJETO DATE
// JavaScript almacena el tiempo en milisegundos desde el 1/1/70
// JS representa el tiempo en:
// Representacion de texto: corto,largo y extendido
// Representacion de tiempo: UTC u hora local

// Crear fecha actual
const ahora = new Date();

// Fecha concreta
const fecha2 = new Date(2024,7,29,2,14,0, 0); // A los meses se le resta 1 
const fecha3 = new Date("1989-11-9"); 
const fecha4 = Date.UTC(2010,6,11,20,30);

// Representar el tiempo
console.log(fecha2.toISOString()); // Formato ISO (No usar :D)
console.log(fecha3.toUTCString()); // Formato UTC (HTTP)
console.log(fecha3.getTime()); // Formato en milisegundos 

console.log(fecha2.toString()); // Formato extendido hora local (en ingles)
console.log(fecha3.toLocaleString('es-Es')); // Español en formato corto
console.log(fecha3.toLocaleString('es-Es', varOpciones)); // Español con una lista de formatos

const formatoFecha = new Intl.DateTimeFormat('es-Es', opciones) // Creamos un patron
formatoFecha.format(fecha1) // Asignamos el formato

// Obtener informacion
fecha3.getFullYear();
fecha3.getMonth();
fecha3.getDay();
fecha3.getHours();
fecha3.getMinutes();
fecha3.getSeconds();
fecha3.getTime();
fecha3.getDate();

// Asignar fecha
fecha2.setFullYear(2028);
fecha2.setMonth(fecha2.getMonth()-1);
fecha3.setDate(15);


// Comparar fechas
fecha2.getDate()>fecha3.getDate();


//? OBJECT JSON
const persona = {
    nombre: "aarón",
    edad: 25
}

const cadena1 = JSON.stringify(persona);

// Funcion de reemplazo
const texto2 = JSON.stringify(persona, (nombreCampo, valor)=>{
    if(nombreCampo == "direccion"){
        return undefined;
    } else {
        return valor;
    }
})

// Espaciador 
const texto3 = JSON.stringify(persona, ["nombre"], 10)


// Parse
console.log(JSON.parse(texto3)); // Convierte en objeto
