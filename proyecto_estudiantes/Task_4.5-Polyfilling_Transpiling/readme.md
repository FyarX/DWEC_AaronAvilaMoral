# 🔄 Polyfilling y Transpilación SGAEA 
A continuación, se explicará el proceso llevado a cabo para implementar, configurar y comprobar el funcionamiento de Node, Webpack y Babel de cara a realizar polyfill y transpilación del proyecto *SGAEA* (Sistema de Gestión Académica de Estudiantes y Asignaturas) y que este se pueda ejecutar tanto en navegadores antiguos como en modernos.

## 🍃 1. Descargar Node.js [aquí](https://nodejs.org/es) y comenzar un proyecto nuevo
Para comenzar un proyecto nuevo basta con inicializar la terminal dentro de la carpeta que vayamos a usar y ejecutar el siguiente comando:
```
npm init -y
```

## 📦 2. Instalar los paquetes necesarios 
De cara a realizar el polyfilling y transpilación del proyecto serán necesarios varios paquetes que aportarán ciertas funcionalidades que son necesarias si queremos que funcione correctamente:

```
npm install --save-dev webpack webpack-cli webpack-merge @babel/core @babel/preset-env babel-loader core-js regenerator-runtime copy-webpack-plugin cross-env html-webpack-plugin
```
Una pequeña explicación del funcionamiento de cada paquete:
* **webpack** -> Permite crear blundles de archivos de JavaScript.
* **webpack-cli** -> Concede la posibilidad de correr Webpack desde la terminal.
* **webpack-merge** -> Permite combinar configuraciones de Webpack para crear diferentes configuraciones.
* **@babel/core y @babel/preset-env** -> Configuran Babel para transpilar código moderno.
* **babel-loader** -> Carga Babel en el webpack para poder transpilarlo.
* **core-js** -> Librería que aporta polyfills para las nuevas implementaciones de JavaScript.
* **regenerator-runtime** -> Provee polyfills para funciones asíncronas.
* **copy-webpack-plugin** -> P
* **cross-env** -> Permite que el programa se pueda ejecutar en varios sistemas operativos.
* **html-webpack-plugin** -> Genera un HTML con el que se puede comprobar el correcto funcionamiento en diferentes navegadores

## 🔧 3. Configuración de Webpack
Si queremos implementar Webpack en nuestro proyecto es necesario configurar 3 archivos, uno con la configuración compatible con
navegadores antiguos, uno con la de navegadores modernos y otro con una configuración común para ambos:

* `webpack.antiguo.js` -> Genera un bundle que compatibiliza el código con versiones de navegadores antiguas:
```
import path from 'path';
import { merge } from 'webpack-merge'; 
import common from './webpack.comun.js'; // Se importa la configuración común.

export default merge(common, {
    output: {
        filename: 'bundle.antiguo.js', // Crea el bundle para poder ejecutar el programa en navegadores antiguos
    },
    module: { 
        rules:  [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                }
            },
        ],
    },
});
```

* `webpack.moderno.js` -> Genera un bundle que compatibiliza el código con versiones de navegadores actuales:
```
import path from 'path';
import { merge } from 'webpack-merge';  
import comun from './webpack.comun.js'; // Se importa la configuración común.

export default merge(comun, {
    output: {
        filename: 'bundle.moderno.js', // Crea el bundle para poder ejecutar el programa en navegadores modernos
    },
});
```

* `webpack.comun.js` -> Establece una configuración conjunta:
```
export default {
  entry: './js/main.js', // Ruta donde se encuentra nuestro programa
  output: {
    path: path.resolve(process.cwd(), 'compilado', process.env.modo), // 'compilado' es el nombre de la carpeta con los bundles
  },
  mode: process.env.modo,

  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: './index.html', to: '.' },  // Se indica la ruta del HTML base
        ],
    }),
],
}
```

> [!NOTE]
> El nombre de los webpacks es meramente orientativo, pero se recomienda que sean los mostrados anteriormente o similares

## ⚙️ 4. Configuración de Babel
Se requiere la creación de un archivo llamado `babel.config.js` de cara a poder configurar Babel. Dentro de este encontraremos las directivas que se le dan a Babel para que al transpilar el código este se adapte a los navegadores que deseemos. El archivo debe de contener el siguiente código:
```
export default {
    presets: [
      [
        '@babel/preset-env', // Incluye el preset de Babel que hace posible la transpilación
        {
          targets: '> 0.25%, not dead',  // Directrices para que funcione en los navegadores deseados
          useBuiltIns: 'usage',        
          corejs: 3                    
        }
      ]
    ]
  };
```
> [!WARNING]
> Las directrices se adaptan al objetivo que se busque, puede variar respecto al usado en este proyecto

## 🖥️ 5. Configuración del HTML
Si queremos que junto a los bundles se genere tambien un archivo .html en el que poder comprobar el correcto funcionamiento en ciertos navegadores es necesario crear un index.html en el que se realice una llamada a ambos bundles. De esta manera, cada navegador seleccionará el que se adapte a sus características y lo ejecutará. La dependencia `html-webpack-plugin` copiará el archivo que hemos creado y lo colocará en las carpetas con los bundles. El codigo a colocar en el index.html es el siguiente:
```
    <script defer type="module" src="bundle.moderno.js"></script>
    <script defer src="bundle.antiguo.js"></script>
```
> [!NOTE]
> Recueda añadir estas lineas dentro de la etiqueta **_head_** de nuestro index.html

## ⏭️ 6. Creación de los scripts necesarios

## ☑️ 7. Generación de los bundles y comprobación













## 🖥️ Comando para generar la documentación del proyecto
```
npm run doc
```
Recuerda que el nombre del archivo que deberás abrir para verlo es: 
```
sgaea_documenting.js.html
```

## ⚙️ Como se ha creado la documentación
* **Instalación de Node.js y JSDoc.** Descarga de Node.js desde [aquí]{https://nodejs.org/es} y uso de este comando en la terminal del proyecto para hacer lo propio con JSDoc:
```
npm install -g jsdoc
```

* **Adición de comentarios con JSDoc.** En el enlace justo debajo del título se puede encontrar toda la documentación oficial usada como guia en el proceso.

* **Creación de un script npm con el que generar la documentación** Añadido de un un script al package.json y creacion de un archivo de configuración llamado
```
jsdoc.json
```
con información como archivos a incluir, excluir y la carpeta donde se va a destinar la documentación

* **Ejecución del archivo de documentación.** Comprobación de que no ha habido ningún problema a la hora de crear el archivo y que todo el código ha sido documentado correctamente

* **Creación de un archivo readme.md.** En el se indica como ha sido tu proceso de forma clara y elegante