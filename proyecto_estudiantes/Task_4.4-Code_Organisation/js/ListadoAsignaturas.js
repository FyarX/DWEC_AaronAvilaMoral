
/**
 * Representa un listado de asignaturas.
 * @class
 */
export default class ListadoAsignaturas {

    #listaAsignaturas;

    /**
     * Crea una nueva instancia de ListadoAsignaturas.
     * @constructor
     * @param {...Asignatura} asignaturas - Las asignaturas a agregar inicialmente.
     */
    constructor(...asignaturas) {
        this.#listaAsignaturas = [];
        for (let asignatura of asignaturas) {
            // Agrega las asignaturas que se pasan como parámetro
            this.añadeAsignatura(asignatura);
        }
    }

    /**
     * Agrega una asignatura al listado.
     * @param {Asignatura} asignatura - La asignatura a agregar.
     */
    agregaAsignatura(asignatura) {
        this.#listaAsignaturas.push(asignatura);
    }

    /**
     * Elimina una asignatura del listado.
     * @param {Asignatura} asignatura - La asignatura a eliminar.
     * @throws {Error} Si la asignatura no se encuentra en el listado.
     */
    eliminaAsignatura(asignatura) {
        // Comprueba si la asignatura está en la lista
        if (this.#listaAsignaturas.includes(asignatura)) {
            // Filtra todas las asignaturas menos la que queremos eliminar
            this.#listaAsignaturas.filter(a => a !== asignatura);
            console.log("Asignatura eliminada con éxito");
        } else {
            throw new Error("La asignatura no se encuentra en el listado");
        }
    }

    /**
     * Busca asignaturas que coincidan parcialmente con un patrón.
     * @param {string} patron - El patrón a buscar.
     * @returns {Asignatura[]} Las asignaturas que coinciden con el patrón.
     * @throws {Error} Si el patrón no es una cadena de texto.
     */
    busquedaAsignatura(patron) {
        // Comprueba si el patrón es una cadena de texto
        if (typeof patron !== "string") throw new Error("El patrón debe ser una cadena de texto");
        let patronAsignatura = new RegExp(patron, "i");
        // Filtra las asignaturas que cumplen el patrón
        return this.#listaAsignaturas.filter(asignatura => patronAsignatura.test(asignatura.nombre));
    }

    /**
     * Obtiene la lista completa de asignaturas.
     * @returns {Asignatura[]} El listado de asignaturas.
     */
    get listaAsignaturas() {
        return this.#listaAsignaturas;
    }
}