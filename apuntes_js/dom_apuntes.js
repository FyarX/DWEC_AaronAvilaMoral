//! MODIFICAR EL DOM
//? Creación de nodos
let elemento = document.createElement('p');
document.createComment('Comentario que irá en el HTML');
document.createTextNode('Texto que irá en el HTML');

// Clonar nodos
let elementoClonado = elemento.cloneNode(true); // true: clona el nodo y todo su contenido
console.log(elementoClonado.isConnected); // false (no está conectado al DOM)

// Crear una estructura temporal para añadirla al DOM más tarde
let fragmento = document.createDocumentFragment();

//! REEMPLAZAR NODOS
//? NodeAPI (Antigua)
elemento.appendChild(document.createTextNode('Texto')); // Añade un nodo al final del elemento
elemento.insertBefore(document.createTextNode('Texto'), elemento.firstChild); // Añade un nodo al principio del elemento
elemento.insertBefore()

//? ElementAPI (Actual)
// Before
let comentario = document.createComment('Comentario');
document.querySelector('p').before(comentario);

// After
document.querySelector('p').after(comentario);

// Append
document.querySelector('p').append(comentario);

// Prepend
document.querySelector('p').prepend(comentario);

// InsertAdjacentElement
document.querySelector('p').insertAdjacentElement('beforebegin', comentario); // Antes del elemento
document.querySelector('p').insertAdjacentElement('afterbegin', comentario); // Dentro del elemento, al principio
document.querySelector('p').insertAdjacentElement('beforeend', comentario); // Dentro del elemento, al final
document.querySelector('p').insertAdjacentElement('afterend', comentario); // Después del elemento

// ReplaceChild (Solo un elemento)
document.querySelector('p').replaceChild(comentario, document.querySelector('p').firstChild);

// ReplaceWith (Todos los elementos)
document.querySelector('p').replaceWith(comentario);

// ReplaceChildren (Solo los hijos)
document.querySelector('p').replaceChildren(comentario);


//! ELIMINAR NODOS
//? NodeAPI (Antigua)
elemento.removeChild(elemento.firstChild); // Elimina el primer hijo del elemento

//? ElementAPI (Actual)



//! MOVIMIENTO DEL DOM
// Movernos por los hijos
let origen = document.body;
console.log(origen.children); // Devuelve un HTMLCollection de los hijos

console.log(origen.firstElementChild); // Primer hijo del elemento
console.log(origen.lastElementChild); // Último hijo del elemento

console.log(origen.firstChild); // Primer hijo del elemento (incluyendo nodos de texto)
console.log(origen.lastChild); // Último hijo del elemento (incluyendo nodos de texto)

// Movernos por los hermanos
console.log(origen.nextSibling); // Siguiente hermano
console.log(origen.previouSibling); // Anterior hermano


//! EVENTOS
//? Adjuntar eventos
const clicar = () => {
    console.log('Click');
}
elemento.addEventListener('click', clicar);

elemento.addEventListener('click', () => {console.log("Me han clicado")});

// Definirlo como clase
class Evento {
    constructor(elemento) {
        if(!elemento) {
            throw new Error('Necesitas un elemento');
        } else {
            elemento.addEventListener('click', this.clicar);
        }
    }
    clicar() {
        console.log('Click');
    }
    
}

//? Evitar el comportamiento por defecto
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    alert("No puedes ir a otro sitio");
});


document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert("No puedes hacer click derecho");
});

//? Eliminar manejadores de eventos
document.querySelector('#mouseover').addEventListener('mouseover', () => {
    console.log('Mouseover');
    document.querySelector('#mouseover').removeEventListener('mouseover', () => {
        console.log('Mouseover');
    });
});


document.querySelector('#eliminarManejador').addEventListener('click', () => {
    document.querySelector('#mouseover').removeEventListener('mouseover', () => {
        console.log('Mouseover');
    });
});

//? Propagacion de eventos

document.querySelector('#padre').addEventListener('click', () => {
    console.log('Padre');
}); //* Captura (Se delega en los hijos y no es la fase por defecto)


document.querySelector('#seccion').addEventListener('click', () => {
    console.log('Hola');
}); //* Burbuja (Se delega en los padres y es la fase por defecto)

// Evitar la propagación
document.querySelector('#hijo').addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Hijo');
});



// Mouse events:

// click: the user clicks on an element.
// dblclick: the user double clicks.
// mouseover: the mouse passes over an element.
// mouseout: the mouse leaves an element.
// mousemove: the mouse moves inside an element.
// mouseenter: Similar to mouseover, but does not propagate to child elements.
// mouseleave: Similar to mouseout, but does not propagate to child elements.
// contextmenu: the user presses right click (opens the context menu).


// Keyboard events:

// keydown: the user presses a key.
// keyup: the user releases a key.

document.querySelector('input').addEventListener('keydown', (e) => {
    console.log("El evento que ha ocurrido es " + e.type + " y la tecla pulsada es " + e.code);
});

// Form events:

// submit: a form is submitted.
// change: the value of an input field changes.
// input: Similar to change, but occurs while the user is typing.
//! NOT RECOMMENDED focus: an input field gains focus.
//? INSTEAD focusin: an element gains focus. 
//! NOT RECCOMENDED blur: a field loses focus.
//? INSTEAD focusout: an element loses focus.
// Document/window events:

// DOMContentLoaded: When the DOM is fully loaded.
// load: all resources (images, scripts, etc.) are fully loaded.
// resize: the browser window is resized.
// scroll: the user scrolls the page.
// Clipboard events:

// cut: the user cuts text.
// copy: the user copies text.
// paste: the user pastes text.ç


//! CARGA DINÁMICA DE BIBLIOTECAS

// Al pulsar boton1 se carga un fichero en la web
document.querySelector('#boton1').addEventListener('click', () => {
    let script = 
    document.head.appendChild(script);
});
