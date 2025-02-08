//! PROMESAS 
//* Las promesas son objetos que representan la terminación o el fracaso de una operación asíncrona.

// API fetch
/*
- fetch(url) -> Hace una solicitud
- request -> Solicitud HTTP
- response -> Respuesta HTTP
    -status -> 200, 201, 404, 500
    -ok -> true, false
    -body
    -headers
    -url
    -type -> basic, cors, error, opaque
    -json()
    -blob
*/

// ! AWAIT
//* La palabra clave await hace que JavaScript espere hasta que se complete una promesa.
//* Solo se puede usar dentro de una función async.

async function conexion() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (respuesta.ok) {
        let json = await respuesta.json();
        console.log(json.nombre, json.apellidos);
    } else {
        console.log('Error en la petición');
    }
}

addEventListener('click', async ()=> {
    let respuesta2 = await fetch('https://api.chucknorris.io/jokes/random');
    if(respuesta2.ok) {
        let json2 = await respuesta2.json();
        const parrafo = document.createElement('p');
        parrafo.innerText = json2.value;
        document.body.append(parrafo);
    } else {    
        console.log('Error en la petición');
    }
});

async function conexion() {
    let respuesta = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
            'X-Api-Key': '2WIP/SoR5TLdxQcjpHcGlA==ueJqSUFZP6tFfqFW'
        }
    });
    if (respuesta.ok) {
        let json3 = await respuesta.json();
        const parrafo = document.createElement('p');
        parrafo.innerText = json3[0].quote; 
        document.body.append(parrafo);
    } else {
        console.log('Error en la petición');
    }
}

//! TRABAJADORES WEB
/*
Hilo de ejecución
Codigo sincrono -> Pila de ejecución
Codigo asincrono -> Cola de microtareas -> No se puede interrumpir
Codigo asincrono -> Cola de tareas -> Se puede interrumpir
*/

// Métodos

const trabajador = new Worker(''); // Crear un trabajador web

trabajador.terminate(); // Terminar un trabajador web
self.close(); // Terminar un trabajador web

self.importScripts(''); // Importar scripts en un trabajador web

trabajador.postMessage("msj") // Enviar mensajes del hilo principal al trabajador

self.postMessage("msj") // Enviar mensajes del trabajador al hilo principal



// Eventos
trabajador.addEventListener('message', (e) => {
    console.log(`He recibido el mensaje ${e.message}`);
});

trabajador.onerror = () => {
    console.log('Error en el trabajador');
}

// Worker que hace una tarea pesada
self.onmessage = () => {
    for(let i = 0; i < 1e9 ; i++) {
        self.postMessage("He terminado");
    }
}

const worker = new Worker('worker.js');
worker.postMessage('A trabajar');

worker.addEventListener('message', (e) => {
    console.log(e.data);
});