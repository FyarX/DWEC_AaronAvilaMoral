/*
-------------------- VENTAJAS MODULARIZACIÓN -------------------------
1. Reutilización de código
2. Organización
3. Encapsulamiento
4. Mejores prestaciones
5. Bundlers (Empaquetadores)


Criterios para modularizar:
- Principio de resposabilidad individual
- Cohesión alta
- Acoplamiento débil
- Reutilización API sencilla y bien definida
- Si hay interacción con API externas, que sea a través de un módulo
- Adaptación a la lógica de negocio
- Tamaño y complejidad (Ni demasiado grande ni demasiado pequeño)

2 formas:
- Common JS(Node.js) -> Forma antigua usada en Node.js y algunos empaquetadores
- ES6 Modules -> Forma moderna, usada en navegadores y empaquetadores modernos
*/

// Common JS (Ejemplo de uso, no recomendado usar)
const opMatematicas = require('./funciones1.js');
console.log(opMatematicas.sumar(1, 2));

// ES6 Modules (Recomendado)
import { sumar as adicion, restar as sustraccion } from './funciones1.js';
console.log(adicion(5,2), sustraccion(5, 1));

// Otra forma ES6
import * as operaciones from './funciones1.js';
console.log(operaciones.sumar(5,2), operaciones.restar(5, 1));

// Importar con default
import loQueSea from './funciones1.js';
console.log(loQueSea);

// Importamos funciones2
import * as operaciones2 from './funciones2.js';
console.log(operaciones2.numero);
console.log(operaciones2.mod(2, 3));