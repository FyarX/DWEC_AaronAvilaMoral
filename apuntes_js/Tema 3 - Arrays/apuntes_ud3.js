// Matrices 
let matrizComida = ["Pan", "Macarrones", 2 , true, function(){console.log("Hola");}];
let matrizBidim = [[ 1, 2, 3, 4],
[true, false, false, false]
]

let matrizObjetos = [
    {nombre: "Aarón", edad: 20},
    {nombre: "David", edad: 24},
]

let matriz = new Array(5) //Se crea un array de 5 elementos vacíos

console.log(matrizObjetos[0].nombre); // Accedemos al valor de la propiedad
// nombre del primer objeto

console.log(matrizObjetos[matrizObjetos.length-1]); // Devuelve el valor del ultimo elemento

let matrizComida2 = [...matrizComida, "Pasta"];

matrizComida.splice(1,0,"nuevo numero") // Introduce nuevo numero en la posicion 1 borrando 0 elementos
matrizComida.push(5); // Coloca un 5 al final de la matriz
matrizComida.unshift(5) // Inserta un 5 al inicio de la matriz
matrizComida.pop(); // Elimina el ultimo elemento de la matriz
matrizComida.shift(); // Elimina el primer elemento de la matriz

// Stack / Pila
stackArray = [1, 2, 3];
stackArray.push(5);
stackArray.pop();


// Queue / Cola
queueArray = [1, 2, 3];
queueArray.unshift(5);
queueArray.pop();

// Iterar con arrays
//For
for(let elementos of matrizComida){
    console.log(elementos);
}
//Foreach
matrizComida.forEach(elemento=>console.log(elemento))

// Foreach para matriz bidimensional
matrizBidim.forEach((fila, indiceFila)=>{
    fila.forEach((elemento, indiceMatriz)=>{
        console.log(elemento);
    })
})

//
// Obtener información de la matriz
//

 // Devuelve true si es un array
console.log(Array.isArray(matrizComida));

// Indica en que posición está el elemento que pasamos como parámetro
matrizComida.indexOf("Macarrones"); 

// Devuelve la ultima posicion en la que se encuentra este elemento
matrizComida.lastIndexOf("Macarrones");

// True si existe, false si no
matrizComida.includes("Macarrones");

//
// Extraer, insertar y cambiar elementos
//

// Extrae los elementos del array y los introduce en uno nuevo
let comida2 = matrizComida.splice(1,3);

// Igual que el anterior pero sustituye los elementos eliminados
// por los valores que se aportan
matrizComida.splice(1,3, "Arroz", "Patata");

// Insertar elementos con splice, 3 es la posicion y el 0 indica que no
// queremos que se extraiga ningún número
matrizComida.splice(3, 0, "Jamon", "Huevo");

// Igual al splice pero este no elimina los valores de la matriz original
matrizComida.slice(1,3);
matrizComida.slice(-2, -1); //En negativo va desde el final al principio

// Conversion de array
matrizComida.toString();

//
// Comparacion de arrays
//
let arr1 = [1, 2, 3];
let arr2 = [1, [2, 3]];
let arr3 = [1, 2, 4];

JSON.stringify(arr1) == JSON.stringify(arr2);

function comparaMatrices(matriz1, matriz2){
    matriz1.forEach(elemento1=>{
        matriz2.forEach(elemento2=>{
            elemento1 == elemento2;
        })
})
}

// Operador de expansión (Copiar un array sin que ambos apunten al mismo lugar)
let arr5 = [...arr1];

//
// Localizar elementos de forma mas compleja
//
arr1.findIndex(elemento => elemento.nombre == "Pasta");
arr1.findLastIndex(elemento => elemento.nombre == "Pasta");

arr1.find(elemento => elemento.nombre == "manzana" && elemento.existencias>=5);

// Devuelve una matriz con todos los elementos que cumplen el requisito
arr1.filter(elemento => elemento.nombre.startsWith("Arr"));

//
//  Calculos con elementos en arrays
//
let mat1 = [1,2,3,4,5];

mat1.map(x => x+1);

// Suma todos los elementos del array y devuelve 1 solo valor
mat1.reduce((total, actual)=>total+actual);

mat1.filter(elemento => elemento >= 10).reduce((total, actual)=>total+actual);

// CONVERTIR A STRING
let razas = ["chihuahua", "pastor alemán", "fox terrier"];
razas.join(); // Devuelve un string con todos los elementos juntos

// PASAR DE STRING A ARRAY

let cadena = "gato,perro,huron,periquito";
cadena.split(","); // Separa los elementos con una coma

// ORDENAR UN ARRAY DE NÚMEROS
razas.sort((a,b)=> a-b);

// DAR LA VUELTA A UN ARRAY
razas.reverse();

// RELLENAR ARRAYS
let array3 = new Array(5);
array3.fill(0)

// DESESTRUCTURAR UNA MATRIZ
function imprimir(a, b){
    console.log(a, b);
}
let matris = ["jose", "pepe"];
imprimir(...matris); // Mejor esta manera que pasar los argumentos 1 a 1

// 2

const numArr1 = [1,2,3,4];
const numArr2 = [num1, num2, ...resto] = arr1; // La variable resto es igual a una matriz con 3 y 4
