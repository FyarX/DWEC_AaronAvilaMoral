

import Persona from './Persona.js';

/**
 * Representa un estudiante que hereda de Persona.
 * @extends Persona
 * @class
 */
export class Estudiante extends Persona {
    #id;
    #asignaturas;
    #relacion;

    static contadorId = 1;

    /**
     * Crea una nueva instancia de Estudiante.
     * @constructor
     * @param {string} nombre - Nombre del estudiante.
     * @param {number} edad - Edad del estudiante.
     * @param {Direccion} direccion - Dirección del estudiante.
     */
    constructor(nombre, edad, direccion) {
        super(nombre, edad, direccion);
        this.#id = Estudiante.contadorId++;
        this.#asignaturas = [];
        this.#relacion = [];
    }

    /**
     * Matricula al estudiante en una o más asignaturas.
     * @param {...Asignatura} asignaturas - Las asignaturas en las que se matricula al estudiante.
     */
    matricularEstudiante(...asignaturas) {
        for (let asignatura of asignaturas) {
            this.#asignaturas.push(asignatura);
            this.#relacion.push([`Matriculación de ${asignatura.nombre}`, new Date()]);
        }
    }

    /**
     * Desmatricula al estudiante de una o más asignaturas.
     * @param {...Asignatura} asignaturas - Las asignaturas de las que se desmatricula al estudiante.
     */
    desmatricularEstudiante(...asignaturas) {
        for (let asignatura of asignaturas) {
            this.#asignaturas = this.#asignaturas.filter(a => a.nombre !== asignatura.nombre);
            this.#relacion.push([`Desmatriculación de ${asignatura.nombre}`, new Date()]);
        }
    }

    /**
     * Califica al estudiante en una asignatura.
     * @param {Asignatura} asignatura - La asignatura que se calificará.
     * @param {number} nota - La nota que se asignará.
     * @throws {Error} Si no hay nota o no es válida, o si el estudiante no está matriculado.
     */
    calificar(asignatura, nota) {
        if (arguments.length === 1) {
            throw new Error("Faltan datos para calificar al estudiante");
        }
        const asignaturaMatriculada = this.#asignaturas.find(a => a.nombre === asignatura.nombre);
        if (!asignaturaMatriculada) {
            alert("El estudiante no está matriculado en esta asignatura"); 
        }
        if (nota < 0 || nota > 10) {
            throw new Error("La calificación debe estar entre 0 y 10.");
        }
        asignaturaMatriculada.calificar(nota);
    }

    /**
     * Devuelve el historial de acciones del estudiante.
     * @returns {string[]} El historial de matriculaciones y desmatriculaciones.
     */
    get relacion() {
        return this.#relacion.map(([accion, fecha]) => {
            const fechaFormateada = fecha.toLocaleDateString('es-ES', {
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });
            return `${accion} - ${fechaFormateada}`;
        });
    }

    /**
     * Calcula el promedio de calificaciones del estudiante.
     * @returns {string} El promedio calculado.
     */
    promedioEstudiante() {
        let sumatorio = 0;
        let contador = 0;
        for (let asignatura of this.#asignaturas) {
            const promedioAsignatura = asignatura.calculaPromedio();
            if (promedioAsignatura !== 0) {
                sumatorio += promedioAsignatura;
                contador++;
            }
        }
        return contador === 0 ? 0 : `${(sumatorio / contador).toFixed(2)}`;
    }

    /**
     * Obtiene las asignaturas del estudiante.
     * @returns {Asignatura[]} Las asignaturas del estudiante.
     */
    get asignaturas() {
        return this.#asignaturas;
    }

    /**
     * Representa al estudiante como una cadena.
     * @returns {string} Una cadena con los datos del estudiante.
     */
    toString() {
        return `Estudiante: ${this.nombre}, ID: ${this.#id}, Dirección: ${this.direccion}`;
    }
}
