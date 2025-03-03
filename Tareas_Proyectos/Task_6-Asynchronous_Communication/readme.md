# ⭐ Proyecto: Pokedex con JavaScript y jQuery

Este es un sitio web responsive que muestra tarjetas de Pokémon obtenidas de la API [PokeAPI](https://pokeapi.co/). Implementa un efecto de desplazamiento infinito y utiliza **JavaScript** en una página y **jQuery** en otra para conectarse a la API, permitiendo comparar ambas tecnologías obteniendo un resultado similar.

## ✨ Características
- Dos páginas: `index.html` (JavaScript) y `jquery.html` (jQuery).
- Diseño responsive con **Tailwind**.
- Encabezado y pie de página con componentes predefinidos de Flowbite.
- Tarjetas con imagen, nombre y tipos de cada Pokémon.
- **Infinite Scroll** para cargar más Pokémon al desplazarse.
- Flujo de trabajo con **Node.js**, **Parcel** y TailwindCSS.

## 📝 Tecnologías utilizadas
- **[PokeAPI](https://pokeapi.co/)** para obtener los datos.
- **TailwindCSS** para los estilos del main.
- **Flowbite** para los estilos del encabezado y pie de página
- **JavaScript y jQuery** para la conexión a la API.
- **Parcel** como empaquetador.
- **Node.js** para gestionar dependencias.

## 📂 Estructura del Proyecto
```plaintext
/Task_6-Asynchronous_Communication
 ├── /src
 │   ├── index.html          # Página con JavaScript
 │   ├── jquery.html         # Página con jQuery
 │   ├── styles.css          # Estilos de TailwindCSS
 │   ├── scripts.js          # Código JavaScript
 │   ├── jquery.js           # Código jQuery
 ├── package.json            # Configuración de Node.js
 ├── tailwind.config.js      # Configuración de TailwindCSS
 ├── .gitignore              # Ignorar archivos innecesarios
 ├── README.md               # Documentación del proyecto
```

## ✨ Instalación y Configuración
### 1. Clonar el repositorio
```sh
git clone https://github.com/FyarX/DWEC_AaronAvilaMoral.git
cd Task_6-Asynchronous_Communication
```
### 2. Instalar dependencias
```sh
npm install
```
### 3. Iniciar el servidor de desarrollo
```sh
npm run dev
```
Esto iniciará el proyecto en `http://localhost:1234`.

### 4. Generar archivos de producción
```sh
npm run build
```
Esto creará los archivos minificados en la carpeta `dist/`.

## 📊 API Utilizada
Se ha usado [PokeAPI](https://pokeapi.co/) para obtener la lista de Pokémon. Se solicita un número determinado de Pokémon y se cargan más conforme el usuario hace scroll.


---
