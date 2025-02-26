
/**
 * Representa un listado de asignaturas.
 * @class
 */
export class ListadoAsignaturas {

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
        try {
            if (this.#listaAsignaturas.find(elemento => elemento.nombre.toLowerCase() === asignatura.nombre.toLowerCase())) {
                throw new Error("Ya existe la asignatura");
            }
            this.#listaAsignaturas.push(asignatura);
            return true;
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }
    }

    /**
     * Elimina una asignatura del listado.
     * @param {Asignatura} asignatura - La asignatura a eliminar.
     * @throws {Error} Si la asignatura no se encuentra en el listado.
     */
    eliminaAsignatura(nombreAsignatura) {
        // Comprueba si el nombre de la asignatura es una cadena de texto
        if (typeof nombreAsignatura !== "string") throw new Error("El nombre de la asignatura debe ser una cadena de texto");
    
        // Encuentra la asignatura que coincide exactamente con el nombre
        const asignatura = this.#listaAsignaturas.find(asignatura => asignatura.nombre.toLowerCase() === nombreAsignatura.toLowerCase());
    
        // Comprueba si la asignatura está en la lista
        if (asignatura) {
            const index = this.#listaAsignaturas.indexOf(asignatura);
            this.#listaAsignaturas.splice(index, 1);
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
        // Encuentra la asignatura que coincide exactamente con el patrón
        return this.#listaAsignaturas.find(asignatura => asignatura.nombre.toLowerCase() === patron.toLowerCase());
    }

    /**
     * Obtiene la lista completa de asignaturas.
     * @returns {Asignatura[]} El listado de asignaturas.
     */
    get listaAsignaturas() {
        return this.#listaAsignaturas;
    }
}