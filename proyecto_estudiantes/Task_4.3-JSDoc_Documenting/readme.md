# 📄 Documentación Proyecto SGAEA con JSDoc
Esta documentación ha sido realizada por Aarón Ávila Moral con la herramienta [JSDoc](https://jsdoc.app/)

## 🖥️ Comando para generar la documentación del proyecto
```
npm run doc
```
Recuerda que el nombre del archivo que deberás abrir para verlo es: 
```
sgaea_documenting.js.html
```

## ⚙️ Como se ha creado la documentación
* **Instalación de Node.js y JSDoc.** Descarga de Node.js desde [aquí](https://nodejs.org/es) y uso de este comando en la terminal del proyecto para hacer lo propio con JSDoc:
```
npm install -g jsdoc
```

* **Adición de comentarios con JSDoc.** En el enlace justo debajo del título se puede encontrar toda la documentación oficial usada como guia en el proceso.

* **Creación de un script npm con el que generar la documentación** Añadido de un un script al package.json y creacion de un archivo de configuración llamado `jsdoc.json` con información como archivos a incluir, excluir y la carpeta donde se va a destinar la documentación. Los scripts que se han añadido son los siguientes:
```
    "doc": "npx jsdoc -c jsdoc.json",
    "clean": "rimraf documentacion",
    "all": "npm-run-all clean doc"
```

* **Ejecución del archivo de documentación.** Comprobación de que no ha habido ningún problema a la hora de crear el archivo y que todo el código ha sido documentado correctamente. El codigo a ejecutar en la linea de comandos de nuestro proyecto es `npm run all`. Este comando elimina la documentacion hasta ahora y genera una nueva con todos los cambios aplicados