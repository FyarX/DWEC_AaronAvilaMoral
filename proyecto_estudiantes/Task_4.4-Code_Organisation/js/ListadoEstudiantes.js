/**
 * Representa un listado de estudiantes.
 * @class
 */
export default class ListadoEstudiantes {

    #listaEstudiantes;

    /**
     * Crea una nueva instancia de ListadoEstudiantes.
     * @constructor
     * @param {...Estudiante} estudiantes - Los estudiantes a agregar inicialmente.
     */
    constructor(...estudiantes) {
        this.#listaEstudiantes = [];

        // Agrega cada estudiante que se pase como parámetro al array creado previamente
        for (let estudiante of estudiantes) {
            this.agregaEstudiante(estudiante);
        }
    }

    /**
     * Agrega un estudiante al listado.
     * @param {Estudiante} estudiante - El estudiante a agregar.
     * @throws {Error} Si el estudiante ya está en la lista.
     */
    agregaEstudiante(estudiante) {
        // Comprueba si el estudiante ya está en la lista
        if (this.#listaEstudiantes.includes(estudiante)) {
            throw new Error("El estudiante ya se encuentra en la lista, no puede haber duplicados");
        } else {
            this.#listaEstudiantes.push(estudiante);
        }
    }

    /**
     * Elimina un estudiante del listado.
     * @param {Estudiante} estudiante - El estudiante a eliminar.
     * @throws {Error} Si el estudiante no se encuentra en la lista.
     */
    eliminaEstudiante(estudiante) {
        if (this.#listaEstudiantes.includes(estudiante)) {
            // Filtra a todos los estudiantes menos el que queremos eliminar
            this.#listaEstudiantes = this.#listaEstudiantes.filter(e => e !== estudiante);
            console.log("Estudiante eliminado con éxito");
        } else {
            throw new Error("El estudiante no se encuentra en el listado");
        }
    }

    /**
     * Calcula el promedio general de todos los estudiantes.
     * @returns {number|string} El promedio general o un mensaje si no hay estudiantes.
     */
    promedioEstudiantes() {
        // Comprueba si hay estudiantes en la lista
        if (this.#listaEstudiantes.length === 0) return "No existe ningún estudiante en la lista";

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

    /**
     * Muestra un reporte con el nombre, calificaciones y promedio de cada estudiante.
     */
    reporte() {
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

    /**
     * Busca estudiantes que coincidan parcialmente con un patrón.
     * @param {string} patron - El patrón a buscar.
     * @returns {Estudiante[]} Los estudiantes que coinciden con el patrón.
     * @throws {Error} Si el patrón no es una cadena de texto.
     */
    busquedaEstudiante(patron) {
        // Comprueba si el patrón es una cadena de texto
        if (typeof patron !== "string") {
            throw new Error("El patrón debe ser una cadena de texto");
        }

        // Crea un patrón de búsqueda
        let patronEstudiante = new RegExp(patron, "i");
        // Devuelve todos los estudiantes que coinciden con el patrón
        return this.#listaEstudiantes.filter(estudiante => patronEstudiante.test(estudiante.nombre));
    }

    /**
     * Obtiene una copia de la lista de estudiantes.
     * @returns {Estudiante[]} Una copia del listado de estudiantes.
     */
    getListadoEstudiantes() {
        // Devuelve una copia de la lista de estudiantes
        return [...this.#listaEstudiantes];
    }
}