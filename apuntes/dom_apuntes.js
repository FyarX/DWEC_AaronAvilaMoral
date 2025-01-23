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

