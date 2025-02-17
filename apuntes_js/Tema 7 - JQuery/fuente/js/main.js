import $ from 'jquery'; // No olvidar añadir type="module" en el json de la página


//* Asi se comienza un fichero en JQuery
$(() => {
    
    // Seleccionar elementos por su clase
    $('.parrafo')

    // Seleccionar todos los p y section
    $("p"), $("section")

    // Selecciona el último p
    $("p:last-of-type")

    //? Eventos 
    $("#button1").on("click", () => {
        alert("Has pulsado el botón 1");
    });

    /*
    click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, change, submit, load, resize, scroll, unload, error
    */ 

    //? Modificar atributos y propiedades
    $("p.parrafo").on("mouseover", () => {
        $("p.parrafo").text("Has pasado por encima de este párrafo");
    });

    $("p.parrafo").on("mouseout", () => {
        $("p.parrafo").attr("href", "Párrafo de ejemplo");
    });

    $("#button3").on("click", () => {
        $("img").attr("alt", "Tu prima");
        $("p")
    });

    /*
    attr(), prop(), removeAttr(), removeProp(), val(), text(), html(), css(), addClass(), removeClass(), toggleClass(),
    */

    //? Modificar el DOM

    // Añadir un elemento
    $("#button4").on("click", () => {
        $("section").append("<p>Este es un nuevo párrafo</p>");
        $("section").prepend("<p>Este es un nuevo párrafo al final</p>");
    });

    // Envolver un elemento
    $("section").wrap("<div></div>");

    // Desenvolver un elemento
    $("section").unwrap();

    // Eliminar un elemento
    $("section").remove();
});

