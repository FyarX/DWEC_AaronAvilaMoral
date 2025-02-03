// Proyecto Gestión de Estudiantes y Asignaturas 
// Autor: Aarón Ávila Moral

// Para ver repositorio completo:
// https://github.com/FyarX/DWEC_AaronAvilaMoral


// ************* IMPORTACIÓN DE FICHEROS ******************
import { Estudiante } from "./Estudiante.js";
import { Asignatura } from "./Asignatura.js";
import { Direccion } from "./Direccion.js";
import { ListadoEstudiantes } from "./ListadoEstudiantes.js";
import { ListadoAsignaturas } from "./ListadoAsignaturas.js";



// ************* CONJUNTO DE PRUEBAS DE CORRECTO FUNCIONAMIENTO ******************

/**
 * Prueba de interacción con estudiantes y asignaturas.
 * 
 * Esta función realiza las siguientes operaciones:
 * - Crea listas de estudiantes y asignaturas.
 * - Añade estudiantes y asignaturas a sus respectivas listas.
 * - Matricula y desmatricula estudiantes en asignaturas.
 * - Califica a los estudiantes en distintas asignaturas.
 * - Elimina estudiantes y asignaturas.
 * 
 * @description Función principal para validar las operaciones con estudiantes y asignaturas.
 */
function prueba() {

    console.log("-------------Pruebas de interacción con estudiantes y asignaturas-----------------");

    //? Creación de listas de estudiantes y de asignaturas

    /**
     * Lista de estudiantes creada.
     * @type {ListadoEstudiantes}
     */
    let listaEstudiantes = new ListadoEstudiantes();

    /**
     * Lista de asignaturas creada.
     * @type {ListadoAsignaturas}
     */
    let listaAsignaturas = new ListadoAsignaturas();

    console.log("Listas de estudiantes y asignaturas creadas con éxito");

    //? Creación de estudiantes/asignaturas y eliminación de ambos con las funciones eliminaEstdiante y eliminaAsignatura

    /**
     * @type {Estudiante}
     * @description Estudiante: David Rodríguez.
     */
    let estudiante1 = new Estudiante("David Rodríguez", 25, new Direccion("Dr. Vaca Castro", 6, "Quinto A", 43242, "Granada", "Granada"));

    /**
     * @type {Estudiante}
     * @description Estudiante: Marta Sánchez.
     */
    let estudiante2 = new Estudiante("Marta Sánchez", 22, new Direccion("Azorín", 32, "Bajo B", 53242, "Maracena", "Granada"));

    /**
     * @type {Estudiante}
     * @description Estudiante: Marc Casadó.
     */
    let estudiante3 = new Estudiante("Marc Casadó", 21, new Direccion("Náyades", 107, "", 12952, "Sant Pere de Vilamajor", "Barcelona"));

    /**
     * @type {Estudiante}
     * @description Estudiante: Julian Carax.
     */
    let estudiante4 = new Estudiante("Julian Carax", 22, new Direccion("Abad Moya", 66, "Tercero D", 12805, "Alcalá la Real", "Jaén"));

    /**
     * @type {Asignatura}
     * @description Asignatura: Matemática Discreta.
     */
    const matematicaDiscreta = new Asignatura("Matemática Discreta");

    /**
     * @type {Asignatura}
     * @description Asignatura: Lógica.
     */
    const logica = new Asignatura("Lógica");

    /**
     * @type {Asignatura}
     * @description Asignatura: Sistemas Digitales.
     */
    const sistemasDigitales = new Asignatura("Sistemas Digitales");

    /**
     * @type {Asignatura}
     * @description Asignatura: Ingeniería de Computadores.
     */
    const ingComputadores = new Asignatura("Ingeniería de Computadores");

    console.log("Estudiantes y asignaturas creados con éxito");

    // Eliminación de estudiantes/asignaturas

    /**
     * Elimina al estudiante Julian Carax de la lista de estudiantes.
     */
    ListadoEstudiantes.eliminaEstudiante(estudiante4);

    /**
     * Elimina la asignatura Ingeniería de Computadores de la lista de asignaturas.
     */
    ListadoAsignaturas.eliminaAsignatura(ingComputadores);

    console.log("Estudiantes y asignaturas eliminados con éxito");

    //? Matriculación y desmatriculación de estudiantes en asignaturas con las funciones matricularEstudiante y desmatricularEstudiante

    /**
     * Matricula a los estudiantes en las asignaturas correspondientes.
     * Si ocurre un error durante el proceso de matriculación, se captura y muestra en la consola.
     */
    try {
        estudiante1.matricularEstudiante(logica, sistemasDigitales, ingComputadores);
        estudiante2.matricularEstudiante(matematicaDiscreta, logica);
        estudiante3.matricularEstudiante(logica, ingComputadores);
        estudiante4.matricularEstudiante(sistemasDigitales);
    } catch (error) {
        console.log("Ha habido un error al matricular al estudiante");
        console.log(error);
    }

    console.log("Estudiantes matriculados con éxito");

    /**
     * Desmatricula al estudiante1 de la asignatura: lógica.
     */
    estudiante1.desmatricularEstudiante(logica);

    /**
     * Desmatricula al estudiante2 de la asignatura: matemática discreta.
     */
    estudiante2.desmatricularEstudiante(matematicaDiscreta);

    console.log("Estudiantes desmatriculados con éxito");

    //? Adición de estudiantes y asignaturas a sus respectivas listas con las funciones agregaEstudiante y agregaAsignatura

    /**
     * Agrega estudiantes y asignaturas a sus respectivas listas.
     * Si ocurre un error durante el proceso, se captura y muestra en la consola.
     */
    try {
        listaEstudiantes.agregaEstudiante(estudiante1);
        listaEstudiantes.agregaEstudiante(estudiante2);
        listaEstudiantes.agregaEstudiante(estudiante3);

        listaAsignaturas.agregaAsignatura(logica);
        listaAsignaturas.agregaAsignatura(sistemasDigitales);
        listaAsignaturas.agregaAsignatura(matematicaDiscreta);
        listaAsignaturas.agregaAsignatura(ingComputadores);
    } catch (error) {
        console.log("Ha habido un error al agregar al estudiante/asignatura a la lista");
        console.log(error);
    }

    console.log("Estudiantes y asignaturas agregados con éxito");

    //? Calificación de estudiantes en asignaturas con la función calificarEstudiante

    /**
     * Califica a los estudiantes en las asignaturas correspondientes.
     * Si ocurre un error durante el proceso de calificación, se captura y muestra en la consola.
     */
    try {
        console.log("CALIFICACIÓN DE ESTUDIANTES");

        /**
         * Califica al estudiante1 en Sistemas Digitales con nota 9.
         */
        estudiante1.calificarEstudiante(sistemasDigitales, 9);

        /**
         * Califica al estudiante1 en Sistemas Digitales con nota 7.
         */
        estudiante1.calificarEstudiante(sistemasDigitales, 7);

        /**
         * Califica al estudiante1 en Ingeniería de Computadores con nota 9.
         */
        estudiante1.calificarEstudiante(ingComputadores, 9);

        /**
         * Califica al estudiante2 en Matemática Discreta con nota 5.
         */
        estudiante2.calificarEstudiante(matematicaDiscreta, 5);

        console.log("\n\n");
    } catch (error) {
        console.log("Ha habido un error al calificar al estudiante");
        console.log(error);
    }

    console.log("Estudiantes calificados con éxito");
}

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
    
    // Llamada al metodo de prueba de inicialización de datos
    prueba();


    // Llamada al método principal
    mostrarMenu();
