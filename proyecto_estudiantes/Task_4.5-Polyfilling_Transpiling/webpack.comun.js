import path from 'path';


export default {
  entry: './js/main.js',
  output: {
    path: path.resolve(process.cwd(), 'compilado', process.env.modo),
  },
  mode: process.env.modo,
};