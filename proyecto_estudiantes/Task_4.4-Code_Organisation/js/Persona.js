
/**
 * Representa una persona genérica.
 * @class
 */
export default class Persona {
    #nombre;
    #edad;
    #direccion;

    /**
     * Crea una nueva instancia de Persona.
     * @constructor
     * @param {string} nombre - Nombre de la persona.
     * @param {number} edad - Edad de la persona.
     * @param {Direccion} direccion - Dirección de la persona.
     * @throws {Error} Si el nombre contiene caracteres no válidos.
     */
    constructor(nombre, edad, direccion) {
        if (!nombre.match(/[A-Za-zÁÉÍÓÚáéíóú ]+/)) {
            throw new Error("El nombre debe contener solo letras y espacios");
        } else {
            this.#nombre = nombre;
        }
        this.#edad = edad;
        this.#direccion = direccion;
    }

    /**
     * Obtiene el nombre de la persona.
     * @returns {string} El nombre de la persona.
     */
    get nombre() {
        return this.#nombre;
    }

    /**
     * Obtiene la edad de la persona.
     * @returns {number} La edad de la persona.
     */
    get edad() {
        return this.#edad;
    }

    /**
     * Obtiene la dirección de la persona.
     * @returns {Direccion} La dirección de la persona.
     */
    get direccion() {
        return this.#direccion;
    }
}   
