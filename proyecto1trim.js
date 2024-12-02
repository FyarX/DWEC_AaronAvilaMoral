class Estudiante {
    #id;
    #nombre;
    #edad;
    #direccion;
    #asignaturas;

    static contadorId = 1;
    constructor(nombre, edad, direccion){
        // Asignación de una variable autoincrementable
        this.#id = Estudiante.contadorId++;

        // Filtrado de la asignación del nombre
        if(!nombre.match(/[A-Za-zÁÉÍÓÚáéíóú ]+/)){
            throw new Error("El nombre debe de contener sólo letras y espacios");
        } else {
            this.#nombre = nombre;
        }

        this.#edad = edad;

        this.#direccion = direccion;
    }

    matricularEstudiante(...asignaturas){
        asignaturas.forEach((asignatura)=>{
            this.#asignaturas.push(asignatura);
        })
    }

    desmatricularEstudiante(...asignaturas){
        asignaturas.forEach((asignatura)=>{
            if(this.#asignaturas.includes(asignatura.nombre)){
            this.#asignaturas = this.#asignaturas.filter(asignatura=>asignatura[0].nombre != asignatura.nombre);
            }
        })
    }

    getDireccion(){
        return this.#direccion;
    }
}

class Asignatura {
    #nombre;
    #calificaciones;

    constructor(nombre){
        // Filtrado de nombres
        this.#nombre = (nombre.match(/[A-Za-zÁÉÍÓÚáéíóú ]+/)) ? nombre : "Sin nombre";
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
        }

    }
}

class ListaEstudiantes {

    #listado;

    constructor(...estudiantes){
        estudiantes.forEach((estudiante)=>{
            this.añadeEstudiante(estudiante);
        })
    }

    agregaEstudiante(estudiante){

    }

    eliminaEstudiante(estudiante){

    }

    busquedaEstudiante(patron){

    }
}

class ListadoAsignaturas{

    #listado;

    constructor(...asignaturas){
        for (let asignatura of asignaturas){
            this.añadeAsignatura(asignatura);
        }
    }

    // Funciones para agregar y eliminar asignaturas
    agregaAsignatura(asignatura){

    }

    eliminaAsignatura(asignatura){

    }

    // Búsqueda de asignaturas coincidentes parcialmente con un patrón
    busquedaAsignatura(patron){

    }
}