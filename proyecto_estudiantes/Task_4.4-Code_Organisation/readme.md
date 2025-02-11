# 🖥️ Organización de Código SGAEA
A continuación, se explicará el proceso llevado a cabo para implementar modularización en el proyecto *SGAEA* (Sistema de Gestión Académica de Estudiantes y Asignaturas) de cara a organizar el código en diversos ficheros y que este se disponga de una forma más ordenada.


## 1. Identificar los cambios a realizar
En primer lugar es necesario analizar a profundidad el código e identificar que partes se pueden modularizar. En mi caso, he decidido crear la siguiente división:
* Un archivo llamado `Clase.js`, en el que _Clase_ representa cada una de las clases que tengo en mi proyecto, por lo que en total hay 6 archivos (ej: Asignatura.js).
* Un archivo `main.js` donde implemento los otros ficheros y el resto de código con la funcionalidad del programa.

## 2. Implementar los ficheros 
Tras identificar los cambios a realizar, toca iealizar el proceso de creación de ficheros. Para mi proyecto he creado una carpeta llamada *js*, la cual contiene todo el proyecto dividido en módulos de la manera anteriormente mencionada. Para aquellos que tengan que exportar su contenido, como es el caso de las clases, debemos de usar la siguiente etiqueta:
```js
export class NombreClase{
    // Código
}
```
Para importar otros módulos, como ocurre en el archivo *main.js*, lo tendremos que realizar de esta manera:
```js
import { NombreClase } from "./NombreClase.js";
```

> [!NOTE]
> No olvides cambiar NombreClase por el nombre de las clases que tengas pensado importar.

## 3. Comprobar que el proyecto funciona
Si queremos comprobar que todo el proceso ha ido correctamente y la funcionalidad de este no ha cambiado tras realizar el proceso de modularización es importante comprobarlo en un servidor local, por lo que en mi caso he utilizado la extensión de _VSCode_ llamada *Live Server*, la cual posee la funcionalidad de abrir nuestros proyectos de esta manera. Simplemente tras hacer click derecho en nuestro *index.html* tendremos que seleccionar la opción `Open with Live Server`. Por otro lado, también es importante realizar una comprobación de que la documentación realizada en la [Tarea 4.3 - JSDOC](https://github.com/FyarX/DWEC_AaronAvilaMoral/tree/master/proyecto_estudiantes/Task_4.3-JSDoc_Documenting) continúa funcionando, por lo que se recomienda realizar el proceso explicado a detalle en esta.