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
}


class Estudiante extends Persona {
    #id;
    //<<<<<<<<<<<<<<<<<<<<<<<<<< COMPROBAR SI ES NECESARIO DEFINIRLAS AQUI OTRA VEZ
    #nombre;
    #edad;
    #direccion;
    #asignaturas;
    #relacion;

    static contadorId = 1;
    constructor(nombre, edad, direccion){

        super(nombre, edad, direccion);

        // Asignación de una variable autoincrementable
        this.#id = Estudiante.contadorId++;

        this.#asignaturas = [];
        this.relacion = [];
    }

    matricularEstudiante(...asignaturas){
        for(asignatura of asignaturas){
            this.#asignaturas.push(asignatura);
            this.#relacion.push([`Matriculación de ${asignatura.nombre}`, new Date()]);
        }
    }

    desmatricularEstudiante(...asignaturas){
        for(let asignatura of asignaturas){
            if(this.#asignaturas.includes(asignatura.nombre)){
                this.#asignaturas = this.#asignaturas.filter(asignatura=>asignatura[0].nombre != asignatura.nombre);
                this.#relacion.push([`Desmatriculación de ${asignatura.nombre}`, new Date()]);    
            }
        }
    }

    get relacion(){
        for (let entrada of this.#relacion){
          entrada[1].toLocaleDateString('es-Es', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          });
          
          return entrada;
        }
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
        this.#calle = calle;
        this.#numero = numero;
        this.#piso = piso;
        this.#cp = cp;
        this.#provincia = provincia;
        this.#localidad = localidad;
    }

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

    toString(){
        return `Calle: ${this.#calle}, Número: ${this.#numero}, Piso: ${this.#piso}, Código Postal: ${this.#cp}, Localidad: ${this.#localidad}(${this.#provincia})`;
    }
}

class Asignatura {
    #nombre;
    #calificaciones;

    constructor(nombre){
        // Filtrado de nombres
        this.#nombre = (nombre.match(/^[A-Za-zÁÉÍÓÚáéíóú ]+$/)) ? nombre : "Sin nombre";
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

    // Agregar y eliminar calificaciones
    agregarCalificacion(nota){
        if(0<=nota<=10){
        this.#calificaciones.push(nota);
        }
    }

    eliminarCalificacion(nota){
        if(this.#calificaciones.includes(nota)){
            this.#calificaciones.splice(this.#calificaciones.indexOf(nota));
        } else {
            throw new Error("La nota no puede ser eliminada ya que no existe");
        }
    }
}

class ListadoEstudiantes {

    #listaEstudiantes;


    constructor(...estudiantes){
        this.#listaEstudiantes = [];
        for (let estudiante of estudiantes){
            this.agregaEstudiante(estudiante);
        }
    }

    agregaEstudiante(estudiante){
        if(this.#listaEstudiantes.includes(estudiante)){
            throw new Error("El estudiante ya se encuentra en la lista, no puede haber duplicados");
        } else {
            this.#listaEstudiantes.push(estudiante);
        }
    }

    eliminaEstudiante(estudiante){
        if(this.#listaEstudiantes.includes(estudiante)){
            this.#listaEstudiantes.filter(e => e !== estudiante);
            console.log("Estudiante eliminado con éxito");
        } else {
            throw new Error("El estudiante no se encuentra en el listado");
        }
    }

    reporte(){
        this.#listaEstudiantes.array.forEach(estudiante => {
            console.log();
            console.log(`Nombre del estudiante: ${estudiante.nombre}`);
            console.log(`Calificaciones:`);
            estudiante.asignaturas.array.forEach(asignatura => {
                const nota = Number(asignatura[1]);
                console.log(`${asignatura.nombre}: ${nota}`);
            });
            console.log(`Promedio: ${estudiante.calculaPromedio()}`);
        });
    }

    busquedaEstudiante(patron){
        let patronEstudiante = new RegExp(patron, "i" )
        return this.#listaEstudiantes.filter(estudiante => patronEstudiante.test(estudiante.nombre)); 
    }

    getListadoEstudiantes(){
        return this.#listaEstudiantes;
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
        if(this.#listaAsignaturas.includes(asignaturaElimina)){
            this.#listaAsignaturas.filter(a => a !== asignatura);
            console.log("Asignatura eliminada con éxito");
        } else {
            throw new Error("La asignatura no se encuentra en el listado");
        }
    }

    // Búsqueda de asignaturas coincidentes parcialmente con un patrón
    busquedaAsignatura(patron){
        let patronAsignatura = new RegExp(patron, "i" )
        return this.#listaAsignaturas.filter(asignatura => patronAsignaturas.test(asigatura.nombre))
    }

    getListadoAsignaturas(){
        return this.#listaAsignaturas;
    }
}