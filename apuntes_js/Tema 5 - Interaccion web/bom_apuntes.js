//! localStorage
/*
1. Vida util -> Hasta que el usuario lo borre explícitamente
2. Alcance -> Solo las webs del mismo origen (protocolo + dominio + puerto)
3. Capacidad -> Depende del navegador (Lo normal es 5MB)
4. Tipo de datos -> String (Si quiero guardar un objeto, lo tengo que convertir a JSON)
5. Disponibilidad -> Cualquier pestaña o ventana del navegador siempre que sea del mismo dominio
*/

localStorage.setItem('nombre', 'Pepe'); // Guarda un valor en el localStorage

// Eliminar un valor
localStorage.removeItem('nombre');

// Eliminar todos los valores
localStorage.clear();

// Obtener un valor
let nombre = localStorage.getItem('nombre');

// Obtener el número de elementos guardados
let numElementos = localStorage.length;

// Evento que se dispara cuando se modifica el localStorage (Funciona solo cuando se modifica desde otra pestaña o ventana)
window.addEventListener('storage', (e) => {
    console.log("Algo se ha introducido en el localStorage" + e.key + " " + e.newValue);
});


// Guardar un objeto y recuperarlo
let objeto = {
    nombre: "Pepe",
    edad: 23
};

localStorage.setItem('persona', JSON.stringify(objeto));
let objetoNuevo = JSON.parse(localStorage.getItem('persona'));
console.log(objetoNuevo);


//! sessionStorage
/*
1. Vida util -> Hasta que se cierre la pestaña o ventana
2. Alcance -> Solo las webs del mismo origen (protocolo + dominio + puerto)
3. Capacidad -> Depende del navegador (Lo normal es 5MB)
4. Tipo de datos -> String (Si quiero guardar un objeto, lo tengo que convertir a JSON)
5. Disponibilidad -> Solo en la pestaña o ventana que lo ha creado
*/

sessionStorage.setItem('nombre', 'Pepe'); // Guarda un valor en el localStorage

// Eliminar un valor
sessionStorage.removeItem('nombre');

// Eliminar todos los valores
sessionStorage.clear();

// Obtener un valor
sessionStorage.getItem('nombre');

// Obtener el número de elementos guardados
sessionStorage.length;


//! Cookies
// Dos tipos de cookies (De origen y de terceros)
/*
1. Vida util -> Fecha de fin
2. Alcance -> Solo las webs del mismo origen (protocolo + dominio + puerto)
3. Capacidad -> Depende del navegador (Lo normal es 4KB por cookie)
4. Tipo de datos -> String (Si quiero guardar un objeto, lo tengo que convertir a JSON)
5. Disponibilidad -> Solo en la pestaña o ventana que lo ha creado
*/

/*
* Propiedades de las cookies
- Expires -> Fecha de expiración (Formato UTF -> "Thu, 01 Jan 1970 00:00:00 UTC") Por defecto: AL cerrar el navegador
- Max-Age -> Tiempo de vida en segundos (Si se especifica, se ignora Expires) 
- Path -> Ruta donde se puede acceder a la cookie (Por defecto es la ruta del documento que la crea)
- Domain -> Dominio donde se puede acceder a la cookie (Por defecto es el dominio del documento que la crea)
- Secure -> Indica si la cookie solo se envía por HTTPS (Por defecto es false)
- Samesite -> Indica si la cookie se envía en una petición de terceros (Por defecto es Lax):
    1. Strict -> No se envía en peticiones de terceros
    2. Lax -> Se envía en peticiones de terceros cuando el usuario hace click en un enlace
    3. None -> Se envía en peticiones de terceros (Secure debe estar activado)
*/

// Crear una cookie
document.cookie = "nombre=Pepe; expires=Thu, 01 Jan 1970 00:00:00 UTC";

