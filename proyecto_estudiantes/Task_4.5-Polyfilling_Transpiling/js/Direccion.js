/**
 * Representa una dirección.
 * @class
 */
export class Direccion {
    #calle;
    #numero;
    #piso;
    #cp;
    #localidad;
    #provincia;

    /**
     * @param {string} calle - Nombre de la calle.
     * @param {string} provincia - Nombre de la provincia.
     * @param {number} numero - Número de la vivienda.
     * @param {string} piso - Número de piso.
     * @param {number} cp - Código postal.
     * @param {string} localidad - Nombre de la localidad.
     * 
     */


    constructor(calle, numero, piso, cp, localidad, provincia) {
        this.#calle = calle;
        this.#numero = numero;
        this.#piso = piso;
        this.#cp = cp;
        this.#provincia = provincia;
        this.#localidad = localidad;
    }

    /**
     * Obtiene la calle.
     * @returns {string} La calle.
     */
    get calle(){
        return this.#calle;
    }


    /**
     * Obtiene el número.
     * @returns {number} 
     */
    get numero() {
        return this.#numero;
    }

    /**
     * Obtiene el piso.
     * @returns {string} 
     */
    get piso() {
        return this.#piso;
    }

    /**
     * Obtiene el código postal.
     * @returns {string}
     */
    get cp() {
        return this.#cp;
    }

    /**
     * Obtiene la provincia.
     * @returns {string}
     */
    get provincia(){
        return this.#provincia;
    }
    
    /**
     * Obtiene la localidad.
     * @returns {string}
     */
    get localidad(){
        return this.#localidad;
    }

    /**
     * Representa la dirección como una cadena.
     * @returns {string} Una cadena con la dirección completa.
     */
    toString() {
        return `Calle: ${this.#calle}, Número: ${this.#numero}, Piso: ${this.#piso}, Código Postal: ${this.#cp}, Localidad: ${this.#localidad}(${this.#provincia})`;
    }
}
