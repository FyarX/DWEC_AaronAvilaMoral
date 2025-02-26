
import path from 'path';
import { merge } from 'webpack-merge'; 
import common from './webpack.comun.js'; // Se importa la configuración común.

export default merge(common, {
    output: {
        filename: 'bundle.antiguo.js', // Crear un archivo bundle.antiguo.js para navegadores antiguos.
    },
    module: { 
        rules:  [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', // Babel se encarga de transpilar el código.
                    options: {
                        presets: ['@babel/preset-env'],
                      },
                }
            },
        ],
    },
});