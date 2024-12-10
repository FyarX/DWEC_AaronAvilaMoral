class Persona {
    #nombre;
    #edad;
    #direccion;

    constructor (nombre, edad, direccion){

        // Filtrado de la asignación del nombre
        if(!nombre.match(/[A-Za-zÁÉÍÓÚáéíóú ]+/)){
            throw new Error("El nombre debe de contener sólo letras y espacios");
        } else {
            this.#nombre = nombre;
        }

        this.#edad = edad;

        this.#direccion = direccion;
    }


    //<<<<<<<<<<<<<<<< Getters de la clase <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    get nombre(){
        return this.#nombre;
    }

    get edad(){
        return this.#edad;
    }

    get direccion(){
        return this.#direccion;
    }


}


class Estudiante extends Persona {

    #id;
    #asignaturas;
    #relacion;

    static contadorId = 1;
    constructor(nombre, edad, direccion){

        // Llamada al constructor de la clase padre
        super(nombre, edad, direccion);

        // Asignación de una variable autoincrementable
        this.#id = Estudiante.contadorId++;

        // Definición del resto de propiedades
        this.#asignaturas = [];
        this.#relacion = [];
    }


    // Matricular y desmatricular estudiantes
    matricularEstudiante(...asignaturas){

        for(let asignatura of asignaturas){
            this.#asignaturas.push(asignatura); 
            this.#relacion.push([`Matriculación de ${asignatura.nombre}`, new Date()]);
        }

    }

    desmatricularEstudiante(...asignaturas){

        for(let asignatura of asignaturas){
            if(this.#asignaturas.includes(asignatura.nombre)){
                this.#asignaturas = this.#asignaturas.filter(asignatura=>asignatura.nombre != asignatura.nombre); // Filtra todas las asignaturas menos la que queremos eliminar
                this.#relacion.push([`Desmatriculación de ${asignatura.nombre}`, new Date()]);    
            }
        }

    }

    // Califica al estudiante en una asignatura
    calificarEstudiante(asignatura, nota) {

        const asignaturaMatriculada = this.#asignaturas.find(a => a.nombre === asignatura.nombre); // Encuentra si la asignatura existe en las matriculadas por el alumno

        if (!asignaturaMatriculada) {
            throw new Error("El estudiante no está matriculado en esta asignatura");
        }
        
        if (nota < 0 || nota > 10) {
            throw new Error("La calificación debe estar entre 0 y 10.");
        }

        asignaturaMatriculada.agregarCalificacion(nota);
        console.log(`Calificación ${nota} agregada con éxito a ${asignaturaMatriculada.nombre}`);
    }

    // Obtener un listado de todos los procesos de Matriculación / Desmatriculación realizados
    get relacion(){

        // Crea un patrón de mapeo para mostrar la información correctamente
        return this.#relacion.map(([accion, fecha]) => {
            const fechaFormateada = fecha.toLocaleDateString('es-ES', {  // Fecha en formato español
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });
            return `${accion} - ${fechaFormateada}`;
        });
    }

    // Devuelve la media de las calificaciones del estudiante si existe 1 o mas
    promedioEstudiante(){

        let sumatorio = 0;
        let contador = 0;
        let promedioFinal = 0;

        for (let asignatura of this.#asignaturas){
            const promedioAsignatura = asignatura.calculaPromedio();
            if (promedioAsignatura !== 0) { // Solo suma si hay calificaciones
                sumatorio += promedioAsignatura;
                contador++;
            }
        }

        if (contador === 0) return 0;
        promedioFinal = Number(sumatorio/contador).toFixed(2); 
      return `El promedio del estudiante es ${promedioFinal}`
    }


    // <<<<<<<<<<<<<<<<<<<<<<<< Getters de la clase <<<<<<<<<<<<<<<<<<<<<<<
    get asignaturas(){
        return this.#asignaturas;
    }

    // Metodo predefinido toString, devuelve los datos del estudiante
    toString() {
        return `Estudiante: ${this.nombre}, ID: ${this.#id}, Dirección: ${this.direccion.toString()}`;
    }
}

class Direccion{

    #calle;
    #numero;
    #piso;
    #cp;
    #provincia;
    #localidad;

    constructor(calle, numero, piso, cp, provincia, localidad){

        // Definición de propiedades
        this.#calle = calle;
        this.#numero = numero;
        this.#piso = piso;
        this.#cp = cp;
        this.#provincia = provincia;
        this.#localidad = localidad;
    }

    //<<<<<<<<<<<<<<< Getters de la clase <<<<<<<<<<<<<<<<<<<<<<<<
    get calle(){
        return this.#calle;
    }

    get numero(){
        return this.#numero;
    }

    get piso(){
        return this.#piso;
    }

    get cp(){
        return this.#cp;
    }

    get provincia(){
        return this.#provincia;
    }

    get localidad(){
        return this.#localidad;
    }

    // Devuelve la dirección completa
    toString(){
        return `Calle: ${this.#calle}, Número: ${this.#numero}, Piso: ${this.#piso}, Código Postal: ${this.#cp}, Localidad: ${this.#localidad}(${this.#provincia})`;
    }
}

class Asignatura {

    #nombre;
    #calificaciones;

    constructor(nombre){

        // Filtrado de nombres
        this.#nombre = (nombre.match(/^[A-Za-zÁÉÍÓÚáéíóú ]+$/)) ? nombre : "Sin nombre"; // Solo acepta letras y espacios

        this.#calificaciones = [];
    }

    // Función que calcula el promedio si existe 1 o mas calificaciones
    calculaPromedio(){

        let longArray = this.#calificaciones.length;
        if(longArray > 0){

            let sumArray = 0;
            for (let i = 0; i < longArray; i++) {
            sumArray += this.#calificaciones[i];
            }

            return sumArray / longArray;

        } else {
            console.log("No existen calificaciones");
            return 0;

        }
    }

    // Agregar y eliminar calificaciones
    agregarCalificacion(nota){
        if(0<=nota<=10){
        this.#calificaciones.push(nota);
        }else {
            throw new Error("La calificación debe estar entre 0 y 10.");
        }
    }

    eliminarCalificacion(nota){
        if(this.#calificaciones.includes(nota)){
            this.#calificaciones.splice(this.#calificaciones.indexOf(nota)); // Separa del array las entradas con la calificación que se indique
        } else {
            throw new Error("La nota no puede ser eliminada ya que no existe");
        }
    }

    // <<<<<<<<<<<<<<<<< Getters de la clase <<<<<<<<<<<<<<<<<<<<<
    get nombre(){
        return this.#nombre;
    }
    
    get calificaciones(){
        return this.#calificaciones;
    }

    // Funcion predefinida toString
    toString() {
        return `Asignatura: ${this.nombre}`;
    }
}

class ListadoEstudiantes {

    #listaEstudiantes;


    constructor(...estudiantes){

        this.#listaEstudiantes = [];

        // Agrega cada estudiante que se pase como parametro al array creado previamente
        for (let estudiante of estudiantes){
            this.agregaEstudiante(estudiante);
        }

    }
    
    // Agregar y eliminar estudiantes
    agregaEstudiante(estudiante){
        if(this.#listaEstudiantes.includes(estudiante)){
            throw new Error("El estudiante ya se encuentra en la lista, no puede haber duplicados");
        } else {
            this.#listaEstudiantes.push(estudiante);
        }
    }

    eliminaEstudiante(estudiante){
        if(this.#listaEstudiantes.includes(estudiante)){

            this.#listaEstudiantes = this.#listaEstudiantes.filter(e => e !== estudiante); // Filtra a todos los estudiantes menos el que queremos eliminar
            console.log("Estudiante eliminado con éxito");

        } else {
            throw new Error("El estudiante no se encuentra en el listado");
        }
    }

    // Obtener el promedio general de todos los estudiantes
    promedioEstudiantes(){

        if(this.#listaEstudiantes.length !== 0) return "No existe ningún estudiante en la lista";
        let sum = 0;
        let contador = 0;

        for (let estudiante of this.#listaEstudiantes) {
            let promEstudiante = estudiante.promedioEstudiante(); // Se obtiene la media de cada estudiante por separado

            if (typeof promEstudiante === "number") {

                sum += promEstudiante;
                contador++;
            }
        }

        let promedioTotal = (sum / contador).toFixed(2);
        return Number(promedioTotal);
    }
        
        

    // Devuelve nombre, calificaciones por asignatura y promedio de cada estudiante
    reporte(){
        this.#listaEstudiantes.forEach(estudiante => {
            console.log();
            console.log(`Nombre del estudiante: ${estudiante.nombre}`);
            console.log(`Calificaciones:`);
            estudiante.asignaturas.forEach(asignatura => {
                const nota = Number(asignatura[1]);
                console.log(`${asignatura.nombre}: ${nota}`);
            });
            console.log(`Promedio: ${estudiante.promedioEstudiante()}`);
            console.log("--------------------------------");
        });
    }

    // Devuelve los estudiantes que coincidan con un patrón parcial
    busquedaEstudiante(patron){
        if (typeof patron !== "string") throw new Error("El patrón debe ser una cadena de texto");
        
        let patronEstudiante = new RegExp(patron, "i" );
        return this.#listaEstudiantes.filter(estudiante => patronEstudiante.test(estudiante.nombre)); // Devuelve todos los estudiantes que coinciden con el patron
    }


    getListadoEstudiantes(){
        return [...this.#listaEstudiantes];
    }
}

class ListadoAsignaturas{

    #listaAsignaturas;

    constructor(...asignaturas){

        this.#listaAsignaturas = [];
        for (let asignatura of asignaturas){
            this.añadeAsignatura(asignatura);
        }

    }

    // Funciones para agregar y eliminar asignaturas
    agregaAsignatura(asignatura){
        this.#listaAsignaturas.push(asignatura);
    }

    eliminaAsignatura(asignatura){
        if(this.#listaAsignaturas.includes(asignatura)){

            this.#listaAsignaturas.filter(a => a !== asignatura); // Filtra todas las asignaturas menos la que queremos eliminar
            console.log("Asignatura eliminada con éxito");

        } else {

            throw new Error("La asignatura no se encuentra en el listado");

        }
    }

    // Búsqueda de asignaturas coincidentes parcialmente con un patrón
    busquedaAsignatura(patron){
        if (typeof patron !== "string") throw new Error("El patrón debe ser una cadena de texto");
        let patronAsignatura = new RegExp(patron, "i" );
        return this.#listaAsignaturas.filter(asignatura => patronAsignatura.test(asignatura.nombre)); // Filtra las asignaturas que cumplen el patron

    }

    

    get listaAsignaturas(){
        return this.#listaAsignaturas;
    }
}


// ************* USO DEL PROGRAMA ******************
//? Creación de listas de estudiantes y de asignaturas

let listaEstudiantes = new ListadoEstudiantes();
let listaAsignaturas = new ListadoAsignaturas();


//? Creación de estudiantes y asignaturas

let estudiante1 = new Estudiante("David Rodríguez", 25, new Direccion("Dr. Vaca Castro", 6, "Quinto A", 43242, "Granada", "Granada"));
let estudiante2 = new Estudiante("Marta Sánchez", 22, new Direccion("Azorín", 32, "Bajo B", 53242, "Maracena", "Granada"));
let estudiante3 = new Estudiante("Marc Casadó", 21, new Direccion("Náyades", 107, "", 12952, "Sant Pere de Vilamajor", "Barcelona"));
let estudiante4 = new Estudiante("Julian Carax", 22, new Direccion("Abad Moya", 66, "Tercero D", 12805, "Alcalá la Real", "Jaén"));

const matematicaDiscreta = new Asignatura("Matemática Discreta");
const logica = new Asignatura("Lógica");
const sistemasDigitales = new Asignatura("Sistemas Digitales");
const ingComputadores = new Asignatura("Ingeniería de Computadores");

//? Matriculación y desmatriculación de estudiantes en asignaturas

estudiante1.matricularEstudiante(logica, sistemasDigitales, ingComputadores);
estudiante2.matricularEstudiante(matematicaDiscreta, logica);
estudiante3.matricularEstudiante(logica, ingComputadores);
estudiante4.matricularEstudiante(sistemasDigitales);


estudiante1.desmatricularEstudiante(logica);
estudiante2.desmatricularEstudiante(matematicaDiscreta);

//? Adición de estudiantes y asignaturas a sus respectivas listas

listaEstudiantes.agregaEstudiante(estudiante1);
listaEstudiantes.agregaEstudiante(estudiante2);
listaEstudiantes.agregaEstudiante(estudiante3);

listaAsignaturas.agregaAsignatura(logica);
listaAsignaturas.agregaAsignatura(sistemasDigitales);
listaAsignaturas.agregaAsignatura(matematicaDiscreta);
listaAsignaturas.agregaAsignatura(ingComputadores);

//? Muestra del registro de las fechas de matriculación y desmatriculación

console.log("REGISTRO MATRICULACIÓN - DESMATRICULACIÓN");
console.log(estudiante1.relacion);
console.log("\n\n");

//? Calificación de estudiantes

// estudiante1.calificarEstudiante(matematicaDiscreta, 9); //! Error, el estudiante no está matriculado en la asignatura
// estudiante1.calificarEstudiante(logica, 13); //! Error, la nota debe de estar entre 0 y 10

console.log("CALIFICACIÓN DE ESTUDIANTES");
estudiante1.calificarEstudiante(sistemasDigitales, 9);
estudiante1.calificarEstudiante(sistemasDigitales, 7);
estudiante1.calificarEstudiante(ingComputadores, 9);
estudiante2.calificarEstudiante(matematicaDiscreta, 5);
console.log("\n\n");

//? Calcular el promedio de las calificaciones del estudiante

console.log("CÁLCULO DEL PROMEDIO DE ESTUDIANTE");
estudiante1.promedioEstudiante();
console.log("\n\n");

//? Buscar asignaturas con un patron coincidente parcialmente

console.log("BÚSQUEDA DE ASIGNATURAS POR PATRÓN");
let resultadoAsig = listaAsignaturas.busquedaAsignatura("l"); // Devuelve aquellas asignaturas que contienen una l
resultadoAsig.forEach(asignatura => console.log(asignatura.toString()));
console.log("\n\n");

//? Calcular el promedio de las calificaciones de una asignatura

console.log("PROMEDIO DE LAS CALIFICACIONES EN LÓGICA");
logica.calculaPromedio(); 
console.log("\n\n");

//? Eliminación de asignaturas

listaAsignaturas.eliminaAsignatura(ingComputadores); // ingComputadores ya no estará en la lista

//? Eliminar estudiantes de la lista

listaEstudiantes.eliminaEstudiante(estudiante4); // estudiante4 ya no estará mas en la lista

//? Calcular el promedio general de todos los estudiantes

listaEstudiantes.promedioEstudiantes(); 

//? Generar reporte de las calificaciones

console.log(listaEstudiantes.reporte()); // Devuelve un reporte con nombre del estudiante, calificaciones (si tiene) y el promedio de este

//? Buscar estudiantes con un patrón coincidente parcialmente

console.log("BÚSQUEDA DE ESTUDIANTES POR PATRÓN");
let resultadoEst = listaEstudiantes.busquedaEstudiante("vid") // Devuelve al estudiante1 que es aquel cuyo tiene un nombre que coincide con el patrón
resultadoEst.forEach(estudiante => console.log(estudiante.toString()));

resultadoEst = listaEstudiantes.busquedaEstudiante("dlesw"); // No devuelve nada ya que el patron no coincide con ningún estudiante
resultadoEst.forEach(estudiante => console.log(estudiante.toString()));
