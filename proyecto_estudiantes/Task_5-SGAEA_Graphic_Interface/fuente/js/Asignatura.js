
/**
 * Representa una asignatura.
 * @class
 */
export class Asignatura {

    #nombre;
    #calificaciones;

    /**
     * Crea una nueva instancia de Asignatura.
     * @constructor
     * @param {string} nombre - El nombre de la asignatura. Solo se permiten letras y espacios.
     */
    constructor(nombre) {
        // Filtrado de nombres
        this.#nombre = (nombre.match(/^[A-Za-zÁÉÍÓÚáéíóú ]+$/)) ? nombre : "Sin nombre"; // Solo acepta letras y espacios

        this.#calificaciones = [];
    }

    /**
     * Calcula el promedio de las calificaciones si existen.
     * @returns {number} El promedio de las calificaciones o 0 si no hay calificaciones.
     */
    calculaPromedio() {
        // Comprueba si hay calificaciones
        let longArray = this.#calificaciones.length;
        if (longArray > 0) {

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

    /**
     * Agrega una calificación a la asignatura.
     * @param {number} nota - La calificación a agregar (debe estar entre 0 y 10).
     * @throws {Error} Si la calificación no está en el rango permitido.
     */
    calificar(nota) {
        if (0 <= nota && nota <= 10) {
            // Agrega la calificación al array
            this.#calificaciones.push(nota);
        } else {
            throw new Error("La calificación debe estar entre 0 y 10.");
        }
    }

    /**
     * Elimina una calificación de la asignatura.
     * @param {number} nota - La calificación a eliminar.
     * @throws {Error} Si la calificación no existe en la lista.
     */
    eliminarCalificacion(nota) {
        if (this.#calificaciones.includes(nota)) {
            // Separa del array las entradas con la calificación que se indique
            this.#calificaciones.splice(this.#calificaciones.indexOf(nota), 1);
        } else {
            throw new Error("La nota no puede ser eliminada ya que no existe");
        }
    }

    // <<<<<<<<<<<<<<<<< Getters de la clase <<<<<<<<<<<<<<<<<<<<<

    /**
     * Obtiene el nombre de la asignatura.
     * @type {string}
     * @readonly
     */
    get nombre() {
        return this.#nombre;
    }

    /**
     * Obtiene las calificaciones de la asignatura.
     * @type {number[]}
     * @readonly
     */
    get calificaciones() {
        return this.#calificaciones;
    }

    /**
     * Convierte la información de la asignatura en una cadena de texto.
     * @returns {string} Una representación en texto de la asignatura.
     */
    toString() {
        return `Asignatura: ${this.nombre}`;
    }
}