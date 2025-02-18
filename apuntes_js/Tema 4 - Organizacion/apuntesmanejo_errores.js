//! MANEJO DE ERRORES
// If (Recomendado para errores predecibles / Elegir si quiero interrumpir el flujo)
function dividir(num1, num2){
    if(num2!=0){
        return num1/num2;
    } else {
        return "No se puede dividir por 0";
    }
}


// Try-Catch (Recomendado para errores impredecibles / Interrumpir el código)
try{
    funcionNoExiste();
} catch (error) {
    console.log(error.name, error.message, error.stack); // 3 tipos de resultados 
} finally { // Opcional (Se ejecuta siempre)
    console.log("Esto se ejecuta siempre");
}



function procesarJSON(datos){
    try{
        let objeto = JSON.parse(datos);
    } catch (error) {
        console.log("Error en el JSON");
    }
}

procesarJSON('{"nombre": "Juan", "edad": 30}'); // Error en el JSON 

//? RELANZAR ERRORES

function conectarServidor(){
    try{
        const servidorEncendido = false;
        if(!servidorEncendido){
            throw new Error("Servidor apagado");
        }
    } catch (error) {
        console.log(error.message);
        throw error; // Relanzar el error
    }

}


function iniciarConexion(){
    try{
        conectarServidor();
    } catch (error) {
        console.log(`Estoy en iniciarConexion, ${error.message}`);
    }
}


//? DONDE GESTIONAR LOS ERRORES
// En la función donde se producen
function obtenerPropiedad(objeto, propiedad){
    try{
    return objeto.propiedad;
    } catch (error) {
        console.log(error.message);
    }
}

function procesarNombre(nombre){
    try{
        return nombre.length;
    } catch (error) {
        console.log(error.stack);
        throw error;
    }
}

// En la función que llama a la función que produce el error y en esta última (Si queremos gestionar el código en dos niveles)
function procesarDatos(objeto){
    try{
        let usuario = obtenerPropiedad(objeto, nombre);
        let nombre = procesarNombre(usuario);
    } catch (error) {
        console.log(error.message);
    }
}

// Solo en la funcion que llama a la función que produce el error ( Recomendada solo cuando el código está muy relacionado entre si)
// Meter gran parte del código en un try-catch (No recomendable ya que no se sabe donde está el error)
try{
    let usuario = {nombre: "David"};
    procesarDatos(usuario);
} catch (error) {
    console.log(error.message);
}


//? LANZAR ERRORES PERSONALIZADOS
function dividir(num1, num2){
    if(num2 == 0){
        throw new Error("No se puede dividir por 0");
        throw("Hola") // Se puede hacer pero no es recomendable

    } else {
        return num1/num2;
    }
}

function procesarDatos(datos){
    try{
        let usuario = JSON.parse(datos);
        if(!usuario.direccion){
            throw new SyntaxError("La dirección no existe");
        }
    } catch (error) {
        console.log(error.message);
    }
}


function manejarErrores(error){
    console.log(error.message);
}

try{
    funcionNoExiste();
} catch (error) {
    throw new manejarErrores(error);
}

////
class validarError extends Error{
    constructor(mensaje){
        super(mensaje);
        this.name = "ErrorDeValidacion";
    }
}

function validarUsuario(usuario){
    if(!usuario){
        throw new validarError("El nombre no puede estar vacío");
    }
    return `Bienvenido ${usuario.nombre}`;
}


//? DEPURACIÓN

function suma(a, b){
    return a + b;
}

function factorial (n){
    if(n==0) return 1;
    return n*factorial (n-1);
}

console.log("Estoy sumando", suma(5,4));
console.log(factiorial(10));

//? COMENTARIOS DE CÓDIGO CON JSDOC

/**
 * @module ejemplosComentariosJSDOC // Va al principio del archivo siempre
 *  
 */


/**
 * @type {string}
 */
const nombre = "David"; 

/**
 * 
 * @type{number[]}
 */
const numeros = [1,2,3,4,5];

/**
 * 
 * @type{Array<number|string>}
 */
const matrizVariada = [1,2,3,"Hola",5];

/**
 * @property {string} nombre - Nombre de la persona
 * @property {number} edad - Edad de la persona
 */
const persona = {
    nombre : "David",
    edad : 30
}

/**
 * 
 * @param {string} mensaje - Mensaje a mostrar en la consola
 */
function saludar(mensaje){
    console.log(mensaje);
}

/**
 * @deprecated Esta funcion es obsoleta y pronto será reemplazada. Usa nueva division en su lugar
 * @param {number} a - Primer numero a division
 * @param {number} b - Segundo numero a division
 * @returns {number} - La division de a y b
 * @throws {error} Si el divisor es 0
 * @example // Devuelve 10 dividir 100 entre 10
 * @todo Falta implementar la división de numeros reales
 */
function dividir(a, b){
    return a / b;
}

/*
Markdown:
#
##
###
**Texto negrita**
*Texto cursiva*
[Texto enlace](url)
```Lenguaje de programacion
*/



/**
 * 
 * **Ejemplo de uso**
 * ```js
 * invertur(true) devuelve false
 * ``
 * 
 * @param {Boolean} condicion - Condición a invertir 
 * @returns {Boolean} - La condición invertida
 * @example // Devuelve lo contrario de la condición que se le pasa
 */
function invertir(condicion){
    return !condicion;
}


/**
 * @async
 * @function //Es necesario especificarlo
 * @returns {Promise<Object[]>} - Un array de objetos
 */
async function obtenerDatos(){
    // Funcion asíncrona
}

/**
 * @function
 */
const saludo = function(){
    console.log("Hola");
}


const objeto = {
    /**
     * @function
     * @param {*}
     * @returns 
     */
    duplicar: function(x){
        return x*2;
    }
}


/**
 * 
 * @param {number[]} datos - Matriz de numeros a procesar 
 * @param {CallbackParaProcesar} funcion - Función a ejecutar tras procesar los números 
 */
function procesarDatos(datos, funcion){
    const resultado = datos.map(x=>x*2);
    funcion(resultado);
}

/**
 * @callback CallbackParaProcesar
 */
procesarDatos([1,2,3], (resultado)=>{
    console.log(resultado);
});

/**
 * @ignore - No saldrá en la documentación
 * @todo - Testear e implementar
 */
const funcionIrrelevante = (a) => {
    return console.log(a);
};

/**
 * @namespace funcionesMatematicas
 */

/**
 * @memberof funcionesMatematicas
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
let sumar = ((a,b)=>a+b);

/**
 * @memberof funcionesMatematicas
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
let restar = ((a,b)=>a*b);

/**
 * @memberof funcionesMatematicas
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
let multiplicar = ((a,b)=>a*b);


/**
 * @typedef {Object} Persona
 * @property {string} nombre - Nombre de la persona
 * @property {number} edad - Edad de la persona
 * 
 */

/**
 * @param {string} name
 * @param {number} edad
 * @return {Persona}
 */
function createPersona (nombre, edad){
    return nombre, edad;
}