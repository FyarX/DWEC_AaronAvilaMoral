//Nulish operators
if(valor ?? 100) console.log("") 

//CONDITIONALS 
//If
if (a>9 && b!=12){
    console.log("El if funciona");
}
//If de otra manera
a>9 ? console.log("Se cumple la sentencia") : console.log("No se cumple la sentencia");

//Switch
switch(calificacion){
    case 0:
        console.log ("A mejorar");
        break;
    case 1:
        console.log("No está mal");
    default:
        console.log("No has hecho el examen");
}

//While
while(i<0){
    i++;
}

// Recorrer elemento iterable (Matriz, por ejemplo)
for(let elemento of matriz){
    console.log(elemento);
}

// Recorrer elemento no iterable (Objeto, por ejemplo)
for(let elemento in objeto){
    console.log(elemento, objeto[elemento]);
}

for(let i = 0; i < Object.keys(objeto).length; i++){
    let elemento = Object.keys(objeto)[objeto];
    console.log(elemento);
}

// Definir funciones
function ejemplo_funcion(variable_ejemplo){
    variable_ejemplo+=1;
}
ejemplo_funcion(4);

function devuelve_valor(valor, aux= ejemplo_funcion(variable_ejemplo)){
    return valor;
}


let nombre = "Pepe";
let acceso = "operario";
let nombre2 = "Manolo";
let acceso2 = "administrador";
function compruebaAcceso(usuario){
    if(usuario == nombre){
        imprime_mensaje(acceso);
    }else{
        imprime_mensaje(acceso2);
    }
}

function imprime_mensaje(valoracceso){
    if(valoracceso == "acceso"){
        console.log(`El usuario tiene acceso de ${acceso}`);
    }else{
        console.log(`El usuario tiene acceso de ${acceso2}`);
    }
}

function mayoria_edad(edad){
    return(edad>18); //True si se cumple la condicion, false si no
}


function saluda(quien){
    if(quien){
        console.log(`hola ${quien}`);
    }else{
        saluda("invitado")
    }
}

// Funciones flecha
let sumar = (a,b)=>(a+b);
sumar(3, 2);

// Funciones callback
function preguntar(pregunta, si, no){
    if(confirm(pregunta)) {
        si();
    }else{
        no();
    }
}

function afirmativo(){
    console.log("aceptaste");
}

function negativo(){
    console.log("rechazaste");
}

preguntar("Aceptas lascondiciones?", afirmativo, negativo);

// Metodos predefinidos de array
arrayEjemplo.pop(); // Elimina el ultimo elemento y devuelve su valor
arrayEjemplo.shift(); // Elimina el primer elemento de la matriz y lo devuelve


// Funciones anidadas
function externa(){
    console.log("Externa");
    function interna(){
        console.log("Interna");
    }
}

// Funciones autoejecutables
(function(quien){(console.log(`Hola ${quien}`));})("Aarón");