import path from 'path';
import { merge } from 'webpack-merge';  
import comun from './webpack.comun.js'; // Se importa la configuración común.

export default merge(comun, {
    output: {
        filename: 'bundle.moderno.js', // Crea un archivo bundle.modern.js para el código moderno.
    },
});