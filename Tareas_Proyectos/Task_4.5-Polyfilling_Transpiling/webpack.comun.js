import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';


export default {
  entry: './js/main.js',
  output: {
    path: path.resolve(process.cwd(), 'compilado', process.env.modo),
    filename: 'bundle.js',
  },
  mode: process.env.modo,

  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: './index.html', to: '.' }, 
        ],
    }),
],
}