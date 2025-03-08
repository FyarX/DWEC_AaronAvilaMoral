// Proyecto Gestión de Estudiantes y Asignaturas 
// Autor: Aarón Ávila Moral

// Para ver repositorio completo:
// https://github.com/FyarX/DWEC_AaronAvilaMoral

class Persona {
    #nombre;
    #edad;
    #direccion;

    constructor (nombre, edad, direccion){

        // Filtrado de la asignación del nombre
        if(!nombre.match(/[A-Za-zÁÉÍÓÚáéíóú ]+/)){
            throw new Error("El nombre debe de contener sólo letras y espacios");
        } else {
            // Asignación del nombre
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
            // Comprueba si el estudiante ya está matriculado en la asignatura
            this.#asignaturas.push(asignatura); 
            // Añade la acción de matriculación al historial
            this.#relacion.push([`Matriculación de ${asignatura.nombre}`, new Date()]);
        }

    }

    desmatricularEstudiante(...asignaturas){

        for(let asignatura of asignaturas){
            if(this.#asignaturas.includes(asignatura.nombre)){
                // Filtra todas las asignaturas menos la que queremos eliminar
                this.#asignaturas = this.#asignaturas.filter(asignatura=>asignatura.nombre != asignatura.nombre); // Filtra todas las asignaturas menos la que queremos eliminar
                // Añade la acción de desmatriculación al historial
                this.#relacion.push([`Desmatriculación de ${asignatura.nombre}`, new Date()]);    
            }
        }

    }

    // Califica al estudiante en una asignatura
    calificar(asignatura, nota) {


        // Comprueba si la nota está vacía, aplicando la sobrecarga de métodos. 
        // Si se llama calificar(asignatura) genera un resultado diferente a calificar(asignatura, nota)
        if (arguments.length === 1) {
            throw new Error("Faltan datos para calificar al estudiante");
        }

        // Encuentra la asignatura en la que se quiere calificar al estudiante
        const asignaturaMatriculada = this.#asignaturas.find(a => a.nombre === asignatura.nombre); // Encuentra si la asignatura existe en las matriculadas por el alumno

        // Comprueba si el estudiante está matriculado en la asignatura
        if (!asignaturaMatriculada) {
            throw new Error("El estudiante no está matriculado en esta asignatura");
        }
        
        // Comprueba que la nota esté entre 0 y 10
        if (nota < 0 || nota > 10) {
            throw new Error("La calificación debe estar entre 0 y 10.");
        }

        // Agrega la calificación a la asignatura
        asignaturaMatriculada.agregarCalificacion(nota);
        console.log(`Calificación ${nota} agregada con éxito a ${asignaturaMatriculada.nombre}`);
    }

    // Obtener un listado de todos los procesos de Matriculación / Desmatriculación realizados
    get relacion(){

        // Crea un patrón de mapeo para mostrar la información correctamente
        return this.#relacion.map(([accion, fecha]) => {

            // Formatea la fecha en un formato más legible
            const fechaFormateada = fecha.toLocaleDateString('es-ES', {  // Fecha en formato español
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });

            // Devuelve la acción realizada y la fecha en la que se realizó
            return `${accion} - ${fechaFormateada}`;
        });
    }

    // Devuelve la media de las calificaciones del estudiante si existe 1 o mas
    promedioEstudiante(){

        let sumatorio = 0;
        let contador = 0;
        let promedioFinal = 0;

        // Calcula el promedio de cada asignatura y lo suma al sumatorio
        for (let asignatura of this.#asignaturas){
            const promedioAsignatura = asignatura.calculaPromedio();
            if (promedioAsignatura !== 0) { // Solo suma si hay calificaciones
                sumatorio += promedioAsignatura;
                contador++;
            }
        }

        // Si no hay calificaciones, devuelve 0
        if (contador === 0) return 0;

        // Calcula el promedio final
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

    // Crea un objeto dirección con los datos pasados como parámetros
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

        // Comprueba si hay calificaciones
        let longArray = this.#calificaciones.length;
        if(longArray > 0){

            let sumArray = 0;
            for (let i = 0; i < longArray; i++) {
            sumArray += this.#calificaciones[i];
            }

            // Devuelve la media de las calificaciones
            return sumArray / longArray;

        } else {
            console.log("No existen calificaciones");
            return 0;

        }
    }

    // Agregar y eliminar calificaciones
    calificar(nota){
        if(0<=nota<=10){
        // Agrega la calificación al array
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
        // Comprueba si el estudiante ya está en la lista
        if(this.#listaEstudiantes.includes(estudiante)){
            throw new Error("El estudiante ya se encuentra en la lista, no puede haber duplicados");
        } else {
            this.#listaEstudiantes.push(estudiante);
        }
    }

    eliminaEstudiante(estudiante){
        if(this.#listaEstudiantes.includes(estudiante)){
            
            // Filtra a todos los estudiantes menos el que queremos eliminar
            this.#listaEstudiantes = this.#listaEstudiantes.filter(e => e !== estudiante); 
            console.log("Estudiante eliminado con éxito");

        } else {
            throw new Error("El estudiante no se encuentra en el listado");
        }
    }

    // Obtener el promedio general de todos los estudiantes
    promedioEstudiantes(){
        
        // Comprueba si hay estudiantes en la lista
        if(this.#listaEstudiantes.length !== 0) return "No existe ningún estudiante en la lista";
        let sum = 0;
        let contador = 0;

        for (let estudiante of this.#listaEstudiantes) {
            // Se obtiene la media de cada estudiante por separado
            let promEstudiante = estudiante.promedioEstudiante(); 

            // Si la media es un número, se suma al sumatorio y se incrementa el contador
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
        // Recorre la lista de estudiantes y muestra su nombre, calificaciones y promedio
        this.#listaEstudiantes.forEach(estudiante => {
            console.log();
            console.log(`Nombre del estudiante: ${estudiante.nombre}`);
            console.log(`Calificaciones:`);
            // Muestra las calificaciones de cada asignatura
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
        // Comprueba si el patrón es una cadena de texto
        if (typeof patron !== "string"){
            throw new Error("El patrón debe ser una cadena de texto");
        }
        
        // Crea un patrón de búsqueda
        let patronEstudiante = new RegExp(patron, "i" );
        // Devuelve todos los estudiantes que coinciden con el patron
        return this.#listaEstudiantes.filter(estudiante => patronEstudiante.test(estudiante.nombre)); 
    }


    getListadoEstudiantes(){
        // Devuelve una copia de la lista de estudiantes
        return [...this.#listaEstudiantes];
    }
}

class ListadoAsignaturas{

    #listaAsignaturas;

    constructor(...asignaturas){

        this.#listaAsignaturas = [];
        for (let asignatura of asignaturas){
            // Agrega las asignaturas que se pasan como parámetro
            this.añadeAsignatura(asignatura);
        }

    }

    // Funciones para agregar y eliminar asignaturas
    agregaAsignatura(asignatura){
        this.#listaAsignaturas.push(asignatura);
    }

    eliminaAsignatura(asignatura){
        // Comprueba si la asignatura está en la lista
        if(this.#listaAsignaturas.includes(asignatura)){

            // Filtra todas las asignaturas menos la que queremos eliminar
            this.#listaAsignaturas.filter(a => a !== asignatura); 
            console.log("Asignatura eliminada con éxito");

        } else {

            throw new Error("La asignatura no se encuentra en el listado");

        }
    }

    // Búsqueda de asignaturas coincidentes parcialmente con un patrón
    busquedaAsignatura(patron){
        // Comprueba si el patrón es una cadena de texto
        if (typeof patron !== "string") throw new Error("El patrón debe ser una cadena de texto");
        let patronAsignatura = new RegExp(patron, "i" );
        // Filtra las asignaturas que cumplen el patron
        return this.#listaAsignaturas.filter(asignatura => patronAsignatura.test(asignatura.nombre)); 

    }

    

    get listaAsignaturas(){
        return this.#listaAsignaturas;
    }
}


// ************* CONJUNTO DE PRUEBAS DE CORRECTO FUNCIONAMIENTO ******************

    console.log("-------------Pruebas de interacción con estudiantes y asignaturas-----------------");

    //? Creación de listas de estudiantes y de asignaturas

    let listaEstudiantes = new ListadoEstudiantes();
    let listaAsignaturas = new ListadoAsignaturas();
    console.log("Listas de estudiantes y asignaturas creadas con éxito");

    //? Creación de estudiantes/asignaturas y eliminación de ambos con las funciones eliminaEstdiante y eliminaAsignatura

    let estudiante1 = new Estudiante("David Rodríguez", 25, new Direccion("Dr. Vaca Castro", 6, "Quinto A", 43242, "Granada", "Granada"));
    let estudiante2 = new Estudiante("Marta Sánchez", 22, new Direccion("Azorín", 32, "Bajo B", 53242, "Maracena", "Granada"));
    let estudiante3 = new Estudiante("Marc Casadó", 21, new Direccion("Náyades", 107, "", 12952, "Sant Pere de Vilamajor", "Barcelona"));
    let estudiante4 = new Estudiante("Julian Carax", 22, new Direccion("Abad Moya", 66, "Tercero D", 12805, "Alcalá la Real", "Jaén"));

    const matematicaDiscreta = new Asignatura("Matemática Discreta");
    const logica = new Asignatura("Lógica");
    const sistemasDigitales = new Asignatura("Sistemas Digitales");
    const ingComputadores = new Asignatura("Ingeniería de Computadores");
    
    console.log("Estudiantes y asignaturas creados con éxito");

    //? Adición de estudiantes y asignaturas a sus respectivas listas con las funciones agregaEstudiante y agregaAsignatura

    try{
        listaEstudiantes.agregaEstudiante(estudiante1);
        listaEstudiantes.agregaEstudiante(estudiante2);
        listaEstudiantes.agregaEstudiante(estudiante3);
        listaEstudiantes.agregaEstudiante(estudiante4);
    
        listaAsignaturas.agregaAsignatura(logica);
        listaAsignaturas.agregaAsignatura(sistemasDigitales);
        listaAsignaturas.agregaAsignatura(matematicaDiscreta);
        listaAsignaturas.agregaAsignatura(ingComputadores);
        } catch (error){
            console.log("Ha habido un error al agregar al estudiante/asignatura a la lista");
            console.log(error);
        }
    
        console.log("Estudiantes y asignaturas agregados con éxito");

    //? Matriculación y desmatriculación de estudiantes en asignaturas con las funciones matricularEstudiante y desmatricularEstudiante

    try{
    estudiante1.matricularEstudiante(logica, sistemasDigitales, ingComputadores);
    estudiante2.matricularEstudiante(matematicaDiscreta, logica);
    estudiante3.matricularEstudiante(logica, ingComputadores);
    estudiante4.matricularEstudiante(sistemasDigitales);
    } catch (error){
        console.log("Ha habido un error al matricular al estudiante");
        console.log(error);
    }

    console.log("Estudiantes matriculados con éxito");

    // Desmatriculación de estudiantes
    estudiante1.desmatricularEstudiante(logica);
    estudiante2.desmatricularEstudiante(matematicaDiscreta);

    console.log("Estudiantes desmatriculados con éxito");


    //? Eliminación de estudiantes/asignaturas

    listaEstudiantes.eliminaEstudiante(estudiante4);
    listaAsignaturas.eliminaAsignatura(ingComputadores);
    
    console.log("Estudiantes y asignaturas eliminados con éxito");
     

// ****************** Programa principal *****************************
function mostrarMenu(){

    console.log("Bienvenido a Gestion de Estudiantes y Asignaturas, selecciona con que deseas interactuar:");
    console.log("1. Estudiante concreto");
    console.log("2. Asignaturas");
    console.log("3. Listado de estudiantes");
    console.log("4. Deseo salir");

    const eleccionMenu = prompt("Selecciona el número de la opción que deseas interactuar");
    
    switch(eleccionMenu){
        case "1":
            console.clear();
            console.log("Opciones a realizar con un estudiante:");
            console.log("1. Agregar estudiante");
            console.log("2. Eliminar estudiante");
            console.log("3. Matricular en una asignatura");
            console.log("4. Desmatricular de una asignatura");
            console.log("5. Mostrar historial matriculación-desmatriculación");
            console.log("6. Calificar estudiante");
            console.log("7. Mostrar promedio");
            console.log("8. Mostrar reporte completo");
            console.log("9. Salir");
            
            const eleccionEstudiante = prompt("Selecciona el número de la opción deseada:")
            switch(eleccionEstudiante){
                //? AGREGAR ESTUDIANTE
                case "1": 
                    console.clear();

                    try{
                    // Obtención del nombre del estudiante
                    console.log("Introduce el nombre del estudiante que deseas agregar:");
                    const nombreEstudiante = prompt("Nombre del estudiante:");

                    // Obtención de la edad del estudiante
                    console.log("Introduce la edad del estudiante:");
                    const edadEstudiante = Number(prompt("Edad del estudiante:"));

                    // Obtención de la calle del estudiante
                    console.log("Introduce la calle del estudiante:");
                    const calleEstudiante = prompt("Calle del estudiante:");

                    // Obtención del número de vivieda del estudiante
                    console.log("Introduce el número de vivienda:");
                    const numeroEstudiante = Number(prompt("Número de vivienda del estudiante:"));

                    // Obtención del número de piso del estudiante
                    console.log("Introduce el piso o pulsa ENTER si no vive en un piso:");
                    const pisoEstudiante = prompt("Piso del estudiante:");

                    // Obtención del código postal del estudiante
                    console.log("Introduce el código postal de la localidad:");
                    const cpEstudiante = Number(prompt("Código postal del estudiante:"));

                    // Obtención de la provincia del estudiante
                    console.log("Introduce la provincia:");
                    const provinciaEstudiante = prompt("Provincia del estudiante:");

                    // Obtención de la localidad del estudiante
                    console.log("Introduce la localidad:");
                    const localidadEstudiante = prompt("Localidad del estudiante:");

                    // Creación de la dirección completa del estudiante
                    const direccionEstudiante = new Direccion(calleEstudiante, numeroEstudiante, pisoEstudiante, cpEstudiante, provinciaEstudiante, localidadEstudiante);
                    
                    // Creación del estudiante con los datos obtenidos
                    const nuevoEstudiante = new Estudiante(nombreEstudiante, edadEstudiante, direccionEstudiante);

                    // Agregado del estudiante a la lista de estudiantes
                    listaEstudiantes.agregaEstudiante(nuevoEstudiante);

                    // Mensaje de confirmación 
                    console.log("Estudiante agregado con éxito");
                    } catch (error){
                        console.log("Ha habido un error al agregar al estudiante");
                        console.log(error);
                    }

                    break;

                //? ELIMINAR ESTUDIANTE
                case "2":
                    console.clear();

                    // Obtención del nombre del estudiante a eliminar
                    console.log("Introduce el nombre del estudiante que quieras eliminar");
                    let estudianteEliminar = prompt("Nombre del estudiante a eliminar:");
                    // Asignación de un objeto estudiante a la variable
                    estudianteEliminar = listaEstudiantes.busquedaEstudiante(estudianteEliminar);
                    // Eliminación del estudiante
                    listaEstudiantes.eliminaEstudiante(estudianteEliminar);
                    
                    break;

                //? MATRICULAR EN UNA ASIGNATURA
                case "3":
                    console.clear();

                    console.log("Introduce el nombre del estudiante que deseas matricular:");
                    // Obtención del estudiante a matricular
                    let estudianteMatricular = prompt("Nombre del estudiante:");

                    try{

                        estudianteMatricular = listaEstudiantes.busquedaEstudiante(estudianteMatricular);
                        console.log("Introduce el nombre de la asignatura eb la que deseas matricular al estudiante:");

                        // Obtención de la asignatura a matricular
                        let asignaturaMatricular = prompt("Nombre de la asignatura:");
                        asignaturaMatricular = listaAsignaturas.busquedaAsignatura(asignaturaMatricular);

                        // Matriculación del estudiante en la asignatura
                        estudianteMatricular.matricularEstudiante(asignaturaMatricular);

                    } catch (error){

                        console.log(`No se ha podido matricular a ${estudianteMatricular.nombre} en ${asignaturaMatricular.nombre}`);
                        console.log(error);

                    }
                    break;

                //? DESMATRICULAR DE UNA ASIGNATURA
                case "4":
                    console.clear();

                    console.log("Introduce el nombre del estudiante que deseas desmatricular:");
                    // Obtención del estudiante a desmatricular
                    let estudianteDesmatricular = prompt("Nombre del estudiante:");
                    try{

                        // Búsqueda del estudiante
                        estudianteDesmatricular = listaEstudiantes.busquedaEstudiante(estudianteDesmatricular);
                        console.log("Introduce el nombre de la asignatura de la que deseas desmatricular al estudiante:");

                        // Obtención de la asignatura a desmatricular
                        let asignaturaDesmatricular = prompt("Nombre de la asignatura:");
                        asignaturaDesmatricular = listaAsignaturas.busquedaAsignatura(asignaturaDesmatricular);

                        // Desmatriculación de la asignatura
                        estudianteDesmatricular.desmatricularEstudiante(asignaturaDesmatricular);

                    } catch (error){

                        console.log(`No se ha podido desmatricular a ${estudianteDesmatricular.nombre} de ${asignaturaDesmatricular.nombre}`);
                        console.log(error);
                        
                    }
                    break;

                //? MOSTRAR HISTORIAL DE MATRICULACIÓN-DESMATRICULACIÓN
                case "5":
                    console.clear();

                    console.log("Introduce el nombre del estudiante del que deseas ver el historial:");
                    // Obtención del estudiante del que se quiere ver el historial
                    let estudianteHistorial = prompt("Nombre del estudiante:");
                    // Búsqueda del estudiante
                    estudianteHistorial = listaEstudiantes.busquedaEstudiante(estudianteHistorial);
                    // Muestra del historial
                    console.log(estudianteHistorial.relacion); 

                    break;

                //? CALIFICAR ESTUDIANTE
                case "6":
                    console.clear();

                    try{
                    console.log("Introduce el nombre del estudiante al que deseas calificar:");
                    // Obtención del estudiante al que se quiere calificar
                    let estudianteCalificar = prompt("Nombre del estudiante:");
                    estudianteCalificar = listaEstudiantes.busquedaEstudiante(estudianteCalificar);
                    console.log("Introduce el nombre de la asignatura en la que deseas calificar al estudiante:");
                    // Obtención de la asignatura en la que se quiere calificar al estudiante
                    let asignaturaCalificar = prompt("Nombre de la asignatura:");
                    asignaturaCalificar = listaAsignaturas.busquedaAsignatura(asignaturaCalificar);
                    console.log("Introduce la calificación que deseas asignar al estudiante:");
                    // Obtención de la calificación a asignar
                    let calificacion = prompt("Calificación:");
                    // Calificación del estudiante
                    estudianteCalificar.calificar(asignaturaCalificar, calificacion);
                    } catch (error){
                        console.log("Ha habido un error al calificar al estudiante");
                        console.log(error);
                    }

                    break;

                //? MOSTRAR PROMEDIO
                case "7":
                    console.clear();

                    console.log("Introduce el nombre del estudiante del que deseas ver el promedio:");
                    // Obtención del estudiante del que se quiere ver el promedio
                    let estudiantePromedio = prompt("Nombre del estudiante:");
                    estudiantePromedio = listaEstudiantes.busquedaEstudiante(estudiantePromedio);
                    // Muestra del promedio
                    console.log(estudiantePromedio.promedioEstudiante());

                    break;

                //? MOSTRAR REPORTE COMPLETO
                case "8":
                    console.clear();
                    console.log("Reporte completo de los estudiantes:");
                    console.log(listaEstudiantes.reporte());

                    break;

                //? SALIR
                case "9":
                    console.clear();
                    console.log("Saliendo del programa...");
                    break;
                default:
                    console.clear();
                    console.log("Selecciona un número entre 1 y 9 para elegir una opción");
                    mostrarMenu();

            }
            
            break;


        case "2":
            console.clear();
            console.log("Opciones a realizar con una asignatura:");
            console.log("1. Agregar asignatura");
            console.log("2. Eliminar asignatura");
            console.log("3. Calcular promedio de las calificaciones de una asignatura");
            console.log("4. Buscar asignatura");
            console.log("5. Calificar asignatura");
            console.log("6. Salir");

            const eleccionAsignatura = prompt("Selecciona el número de la opción deseada:")
            switch(eleccionAsignatura){
                //? AGREGAR ASIGNATURA
                case "1":
                    console.clear();
                    try{
                    console.log("Introduce el nombre de la asignatura que deseas agregar");
                    // Obtención del nombre de la asignatura a agregar
                    const nombreAsignatura = prompt("Nombre de la asignatura:");
                    // Creación de la asignatura
                    const nuevaAsignatura = new Asignatura(nombreAsignatura);
                    // Agregado de la asignatura a la lista de asignaturas
                    listaAsignaturas.agregaAsignatura(nuevaAsignatura);
                    console.log("Asignatura agregada con éxito");
                    } catch (error){
                        console.log("Ha habido un error al agregar la asignatura");
                        console.log(error);
                    }

                    break;
                
                //? ELIMINAR ASIGNATURA
                case "2":
                    console.clear();

                    console.log("Introduce el nombre de la asignatura que deseas eliminar");
                    // Obtención del nombre de la asignatura a eliminar
                    const nombreAsignaturaEliminar = prompt("Nombre de la asignatura:");
                    // Búsqueda de la asignatura a eliminar
                    const asignaturaAEliminar = listaAsignaturas.busquedaAsignatura(nombreAsignaturaEliminar);
                    // Eliminación de la asignatura
                    listaAsignaturas.eliminaAsignatura(asignaturaAEliminar);

                    break;
                
                //? CALCULAR PROMEDIO DE LAS CALIFICACIONES DE UNA ASIGNATURA
                case "3":
                    console.clear();

                    console.log("Introduce el nombre de la asignatura de la que deseas calcular el promedio");
                    // Obtención del nombre de la asignatura de la que se quiere calcular el promedio
                    const nombreAsignaturaPromedio = prompt("Nombre de la asignatura:");
                    // Búsqueda de la asignatura
                    const asignaturaPromedio = listaAsignaturas.busquedaAsignatura(nombreAsignaturaPromedio);
                    // Muestra del promedio
                    console.log(asignaturaPromedio.calculaPromedio());

                    break;
                
                //? BUSCAR ASIGNATURA
                case "4":
                    console.clear();

                    console.log("Introduce el nombre de la asignatura que deseas buscar");
                    // Obtención del nombre de la asignatura a buscar
                    const nombreAsignaturaBuscar = prompt("Nombre de la asignatura:");
                    // Búsqueda de la asignatura
                    const asignaturaABuscar = listaAsignaturas.busquedaAsignatura(nombreAsignaturaBuscar);
                    // Muestra de la asignatura
                    console.log(asignaturaABuscar.toString());

                    break;
                
                //? CALIFICAR ASIGNATURA
                case "5":
                    console.clear();

                    // Obtenemos el nombre de la asignatura a calificar
                    console.log("Introduce el nombre de la asignatura que deseas calificar");
                    const nombreAsignaturaCalificar = prompt("Nombre de la asignatura:");
                    // Búsqueda de la asignatura
                    const asignaturaCalificar = listaAsignaturas.busquedaAsignatura(nombreAsignaturaCalificar);
                    // Obtenemos la calificación a asignar
                    console.log("Introduce la calificación que deseas asignar a la asignatura");
                    const calificacionAsignatura = prompt("Calificación:");
                    // Calificación de la asignatura
                    asignaturaCalificar.calificar(calificacionAsignatura);

                    break;

                //? SALIR
                case "6":
                    console.clear();
                    console.log("Saliendo del programa...");
                    break;
                
                default:
                    console.clear();
                    console.log("Selecciona un número entre 1 y 5 para elegir una opción");
                    mostrarMenu();
            }
            
            break;
    
        case "3":
            console.clear();
            console.log("Opciones a realizar con la lista de estudiantes:")
            console.log("1. Calcular promedio general de los estudiantes");
            console.log("2. Eliminar estudiantes de la lista");
            console.log("3. Buscar a un estudiante")
            console.log("4. Salir")
            
            const eleccionListaEstudiantes = prompt("Selecciona el número de la opción deseada:");

            //? Opciones sobre la lista de estudiantes
            switch(eleccionListaEstudiantes){

                //? CALCULAR PROMEDIO GENERAL DE LOS ESTUDIANTES
                case "1":
                    console.clear();
                    
                    // Muestra del promedio general de los estudiantes
                    console.log("El promedio general de los estudiantes es: " + listaEstudiantes.promedioEstudiantes());

                    break;
                
                //? ELIMINAR ESTUDIANTES DE LA LISTA
                case "2":
                    console.clear();

                    try{
                    console.log("Introduce el nombre del estudiante que deseas eliminar de la lista");
                    // Obtención del nombre del estudiante a eliminar
                    const nombreEstudiante = prompt("Nombre del estudiante:");
                    // Búsqueda del estudiante
                    const estudianteAEliminar = listaEstudiantes.busquedaEstudiante(nombreEstudiante);
                    // Eliminación del estudiante
                    listaEstudiantes.eliminaEstudiante(estudianteAEliminar);
                    } catch (error){
                        console.log("Ha habido un error al eliminar al estudiante");
                        console.log(error);
                    }
                    
                    break;
                
                //? BUSCAR A UN ESTUDIANTE
                case "3":
                    console.clear();

                    console.log("Introduce el nombre del estudiante que deseas buscar");
                    // Obtención del nombre del estudiante a buscar
                    const nombreEstudianteBuscar = prompt("Nombre del estudiante:");
                    // Búsqueda del estudiante
                    const estudianteABuscar = listaEstudiantes.busquedaEstudiante(nombreEstudianteBuscar);
                    // Muestra del estudiante
                    console.log(estudianteABuscar.toString());

                    break;
                
                //? SALIR
                case "4":
                    console.clear();
                    console.log("Saliendo del programa...");
                    break;
                
                default:
                    console.clear();
                    console.log("Selecciona un número entre 1 y 4 para elegir una opción");
                    mostrarMenu();
            }

            break;
        
        case "4":
            console.clear();
            console.log("Saliendo del programa...")
            break;
    
        default:
            console.clear();
            console.log("Selecciona un número entre 1 y 4 para elegir una opción");
            mostrarMenu();
    }
    }

    // Llamada al método principal
    mostrarMenu();
