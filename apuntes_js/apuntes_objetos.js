//? Definicion de objetos
let persona = {};
let persona2 = {
    nombre: "Pedro",
    edad: 27,
    saluda:function(){
        console.log("Hola");
    },
    despidete(texto){
        console.log(texto);
    },
    pregunta:(texto)=>(console.log(texto))
}

// Asignación de objetos
const persona1= Object.assign({}, persona); // Podemos poner la cantidad de objetos que queramos


// Object create // Herencia (Mas eficiente que el anterior pero no puede pasar propiedades anidadas)
const persona3= Object.create(persona); 


//!      MEJOR MANERA DE CREAR UN OBJETO
class Coche{

    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar(){
        console.log(`Soy ${this.marca} y estoy acelerando`);
    }
}

//? <<<<<<<<<<<<<<<<<<<<<<<<<<<ENCAPSULACION<<<<<<<<<<<<<<<<<<<<<<<<<<
//! HACER PRIVADA UNA PROPIEDAD
class Coche{

    #marca;
    #modelo;

    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

//! ENCAPSULACION DE METODOS
// En constructores
function persona(){
    _nombre, 
    _apellidos,
    quienSoy = function(_nombre){
        console.log(`Soy ${this._nombre}`);
    }
};

// En clases
class Coche{

    #marca;
    #modelo;
    #miFuncion(){
        console.log("Mi función");
    }

    llamaMiMetodo(){
        this.#miFuncion;
    }
}

//! ACCEDER A LAS PROPIEDADES DE UNA CLASE

class Coche{

    #marca;
    #modelo;

    constructor(marca, modelo){
        this.#marca = marca;
        this.#modelo = modelo;
    }
    
    get marca(){
        console.log(this.#marca);
    }

    set nombre(nombre){
        this.#marca = nombre;
    }

}
new coche1 = new Coche("Ford", "Focus");
coche.marca = "Fiesta"; // SET
console.log(coche.nombre); // GET

// Definición con un constructor (+Eficiencia, Cadena de herencia)
// Problema: Se duplican los métodos
function Perro(tipo, nombre){
    this.nombre = nombre;
    this.tipo = tipo;
    this.ladrar = function(){
        console.log("Guau!");
    };
}

new miPerro = new Perro("Teckel", "Byron");

//! SOLUCIÓN
Coche.prototype.ladrar= function() {console.log("Guau!")};

// Definicion con factory fuction (NO PERMITE HERENCIA)
const construyeAnimal= (nombre, edad)=>{
    return{
        nombre: nombre,
        edad: edad,
        acelerar(){
            console.log("Acelerando");
        }
    }
}

let animal = construyeAnimal("Patch", 5);


// Acceso a las propiedades de los objetos

// Con un punto
console.log(persona2.nombre);
// Con corchetes
console.log(persona2["nombre"]);




// Añadir mas propiedades a un objeto ya creado
persona2.ejemplo = "Lo que sea";
persona[ejemplo] = true;
persona.saluda=()=> {console.log("Buenos días")};

// Otra forma mas óptima
Object.defineProperty(persona, 'profesion', {
    value: 'Ascensorista',
    writable: false, // No puede cambiar el valor
    enumerable: false, // No puede ser iterado
    configurable: false // No se puede ser eliminado
})
persona.profesion = "Medico"; // No se cambiaria el valor anterior


Object.defineProperty(persona, 'saluda', {
    value: function(){console.log(`Hola soy ${this.nombre}`)},
    writable: true,
    enumerable: true,
    configurable: false
}
)


// Comprobar si una propiedad existe
persona.hasOwnProperty("peso");  // FORMA ANTIGUA

Object.hasOwn(persona, "peso"); // FORMA MODERNA


// Prevenir objetos de ser cambiados o de añadir nuevas propiedades
Object.freeze(persona);
persona.profesion = "Panadero" // No cambiaría

// Eliminar una propiedad
persona.altura = 180;
delete persona.altura;

// Prevenir de añadir y eliminar propiedades
Object.seal(persona);

// Prevenir solo de añadir propiedades
Object.preventExtensions(persona2);

// Comprobar si un objeto es iterable
console.log(persona[Symbol.iterator]); // Undefined si no es iterable


// Copiar propiedades anidadas
const persona = {
    nombre: "Recaredo",
    profesion: "Rey godo",
    medidas: {
        altura: 160,
        peso: 80
    }
};

const persona4 = Object.assign({},persona);
persona4.nombre = "Recareda"; // Solo cambia el objeto persona4
console.log(persona.nombre, persona4.nombre);
persona4.medidas.altura = 190; // Cambia el valor de ambos objetos
console.log(persona.medidas.altura, persona4.medidas.altura);

// Con esto hacemos que las propiedades anidadas se manden 
persona4 = structuredClone(persona);





// Recorrer un objeto
let valores = Object.values(persona); //Devuelve los valores del objeto
for (let index = 0; index < valores.length; index++) {
    console.log(valores[index]);
}


for(let valor in persona){
    console.log(elemento);
}


Object.values(persona).forEach(valor=>{
    console.log(valor);
})

Object.keys(persona).forEach(valor=>{
    console.log(valor);
})

Object.entries(persona).forEach(valor=>{
    console.log(valor);
})

// Comparar objetos
let person1=person2={
    nombre: "Sisebuto",
    edad: 30
}

let person3={
    nombre: "Sisebuto",
    edad: 30
}
persona2.nombre = "Venancio";
console.log(person1.nombre, person2.nombre); // Los dos tienen el mismo valor ya apuntan al mismo lugar en la memoria 
console.log(person1==person3); // False ya que apuntan a distintos sitios de memoria

//! THIS

function Persona(nombre, edad){
this.nombre=nombre;
this.edad=edad;
};

Persona.prototype.saludar=function(){
console.log(`Hola soy ${this.nombre}`);
}

// This tiene un problema con las funciones de flecha
let persona={
    nombre: "Higinio",
    edad: 22
}

persona.saluda=()=>{
    console.log(`Yo ${this.nombre}, te saludo`);
}

persona.despidete=function(){
    console.log(`Yo ${this.nombre}, me despido`);
}

persona.saluda(); // Da undefined por ser función de flecha
persona.despidete(); // Si que se ejecuta correctamente


// Establecer un contexto
//! BIND Y CALL ESTABLECEN DE FORMA ESTATICA UN CONTEXTO
const persona= {
    nombre: "Aarón",
    saludar: function(){
        console.log(`Hola soy ${this.nombre}`);
    },
}

persona.saludar();
const saludarFuera = persona.saludar; // Hola soy undefined
saludarFuera(); // Se pierde el contexto (persona)

const saludarConBind = persona.saludar.bind(persona); // Hola soy Aarón
saludarConBind(); // No se pierde el contexto en este caso 


const fuera = function(){
    console.log(this.nombre);
}

let aux = fuera.bind(persona);
fuera();// Se imprime el nombre de persona


// EJEMPLO DE CALL
function saludar(){
    console.log(`${this.nombre} te saluda`);
}

saludar() // No tiene nada que ver con persona
persona.saludar() // Error ya que no es una funcion definida como propiedad en el objeto
saludar.call(persona); // Aarón te saluda


function persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
} 

Object.defineProperty(persona.prototype, "saludar", {
    value: function(){
        console.log(`${this.nombre} te saluda`);
    }
})

const personaNueva = new persona("Demetrio", 27); // QUE COJONES SON ESTOS NOMBRES
persona1.saludar;
persona.prototype.saludar.call(persona1);


//! OBJETOS LITERALES
let persona ={
    _nombre, // Con la _ damos a entender que es una propiedad protegida
    _apellidos,
};

let personaa = Object.create(persona);
personaa.nombre = "Apolinar";
console.log(personaa);


//! Herencia prototípica

// Objetos literales
const animal1 = {
    _nombre:"",
    hacerSonido(){
        console.log("Hago un sonido");
    }
}

const perro = Object.create(animal1);
const bulldog = Object.create(perro);


// Función constructor
function Animal(){};

Animal.prototype.hacerSonido = function(){
    console.log("AaAaaaaaaaaaAAAaaa");
}

let miAnimal = new Animal();

function Perro(nombre){
    Animal.call(this, "mamifero");
    this._nombre = nombre;
}
Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

const miPerro = new Perro();
miPerro.hacerSonido();

function bulldog(){};
bulldog.prototype =Object.create(Perro.prototype); //?
bulldog.prototype.constructor = bulldog; //?
let miBulldog = new bulldog();
miBulldog.hacerSonido();


//? setPrototypeOf (Similar a las dos lineas marcadas)
Object.setPrototypeOf(Perro, Animal);

// Herencia de clases
class Animal{
    mover(){
        console.log("Me muevo");
    }

    comer(){
        console.log("Estoy comiendo");
    }
}

class Mamifero extends Animal{
        constructor(nuevoTipo){
        super();
        this.tipo = nuevoTipo
    }
    #tipo;

    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo; 
    }

    get tipo(){
        return this.#tipo;
    }
}

class Perro extends Mamifero{
    constructor(nuevoTipo, nuevoNombre){
        super(nuevoTipo);
        this.nombre = nuevoNombre
    }
    #nombre;

    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }

    get nombre(){
        return this.#nombre;
    }
}
const miPerrito = new Perro("Caniche", "Toby");


//! FUNCIONES TRADICIONALES O DE FLECHA CON THIS
function Animal(nombre){
    this.nombre = nombre;
    this.hacerSonido=()=>{
        console.log(`${this.nombre} está haciendo un sonido`);
    }

    this.comer = function(){
        console.log(`${this.nombre} está comiendo`);
    }
}

Animal.prototype.hazSonido = ()=>{
    console.log(`${this.nombre} está haciendo un sonido`);
}

Animal.prototype.come = function(){
    console.log(`${this.nombre} está comiendo`);
}

Animal.prototype.corre = function(){
    const funcFlecha = ()=>{
        console.log(`${this.nombre} está durmiendo`);
    }
    funcFlecha();
}

const miAnimal1 = new Animal("Algodón");
miAnimal1.hacerSonido(); // FLECHA. Funciona ya que está dentro de animal
miAnimal1.comer() // Funciona ya que es la forma tradicional
miAnimal1.hazSonido() // FLECHA. No tiene contexto ya está definido en el objeto global
miAnimal.come() // Funciona ya que es la forma tradicional. Coge el contexto en ejecución
miAnimal1.duerme() // Funciona ya que está definido sobre una funcion tradicional
setTimeout(miAnimal1.hacerSonido, 3000) // FUNCIONA por ser función de flecha
setTimeout(miAnimal1.comer) // NO FUNCIONA por ser tradicional


//! SOBREESCRITURA DE METODOS
//? Funciones constructoras
function Animal(){};

Animal.prototype.ruido = function(){
    console.log("Estoy haciendo un ruido de animal");
}

function Gato(nombre){
    Animal.call(this) // Como el super en clases pero en funciones  
    this.nombre = nombre;
}

// Herencia con sobreescritura

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.ruido = function(){
    console.log("Estoy maullando");
}
const miGato = new Gato("Tizón");
miGato.ruido();

//? Clases
class Animal {
    ruido(){
        console.log("Ruido de animal");
    }
};

class Gato extends Animal{
    constructor(nombre){
        super();
        this.nombre = nombre
    }

    ruido(){
        console.log("Miau");
    }
};

const miGato3 = new Gato("Blanquito");


//! METODOS ESTATICOS Y PROPIEDADES (NO SE HEREDAN)

// Funciones constructoras
function Direccion(){}
Direccion.calle = "Utrilla"; // PROPIEDAD ESTÁTICA
Direccion.dimeDondeVives = function(calle, numero){ // METODO ESTATICO
    console.log(`Tu dirección es ${calle}, ${numero}`);
} 
// SI INTENTAMOS EJECUTAR LA FUNCION EN UN OBJETO QUE HEREDE DE DIRECCION
// NO VA A FUNCIONAR


// Clases
class Animal {
    static contador = 0;

    constructor(){
        Animal.contador++;
    }
    static comparar(animal1, animal2){
        console.log("Texto de ejemplo");
    }
}

//! DESESTRUCTURACION
const animalEj = {
    nombre: "Pipo",
    especie: "Colorin",
    edad: 5,
    direccion: {
        calle:"pez",
        numero: 2
    }
}

const {nombre, especie}= animalEj; // Tienen que tener el mismo nombre
console.log(nombre, especie); 
const {direccion:{calle,numero}}= animalEj;
console.log(calle, numero);


//! OPERADORES DE OBJETOS
class Animal{};
const myAnimal = new Animal();
console.log(myAnimal instanceof Animal); // True ya que es una instancia de ese objeto

let persona7={hablar(){
    console.log("Hola");
}};
console.log(persona7.direccion?.calle); // Undefined y no error
persona7.chillar?.(); // Undefined y no error



//! MISSINGS
class Base{
    constructor(){
        this.contador = 0;
    }
    aumenta(){
        this.contador = 0;
    }

    muestra(){
        console.log(this.contador);
    }
}

let mezcla = (claseBase)=>class extends claseBase{
    constructor(){
        super();
    }
    disminuye(){
        this.contador--;
    }
}

class Heredada extends mezcla(Base){ //Heredada hereda tanto de base como de claseBase
    reiniciar(){
        this.contador = O;
    }
}

let miClase = new Heredada(); 
