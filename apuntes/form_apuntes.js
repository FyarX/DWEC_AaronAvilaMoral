/*
- No recomendable validar solo en el cliente

- Parámetros en cuanto a validación:
    + Método -> Nativa (HTML5), JS, Mixta (HTML5 + JS)
    + Cuando -> Al enviar el formulario (nativa), cuando queramos mediante eventos (JS y Mixta)
    + Mensajes de error -> Nativos o personalizados con JS
    + Estilo de los campos cuando son válidos y no válidos

- Mensajes de error:
    + Validación nativa -> Mensajes nativos. DEBE HABER REGLAS DE VALIDACIÓN NATIVAS. Se mandan al enviar el formulario
    + Validación JS -> Mensajes personalizados
        . Modificando el DOM (eventos y modificando el DOM)
        . Aprovechando los mensajes nativos:
            - campo.setCustomValidity('Mensaje de error') -> //? Establece un mensaje de error personalizado en un campo, el cual se manda al enviar el formulario            - campo.reportValidity() -> //? Se manda el mensaje inmediatamente   

- Parámetros en las etiquetas de formulario:
. required -> Campo obligatorio
. pattern -> Expresión regular
. type -> Tipo de campo
. min, max -> Rango de valores
. minlength, maxlength -> Longitud de caracteres
. autocomplete -> Autocompletado

- Estilos:
. :valid -> Campo válido
. :invalid -> Campo no válido


.//? Validacion con JS:
Ventajas:
- Reglas -> las que queramos
- Momento -> Cuando quiera (En nativo es al darle a enviar)
*/


//! Validación mixta (HTML5 + JS)
/*
Validación: Nativa
Momento de validación: Input y submit
Mensajes: JS
Estilos: Nativos
*/

const validarCampo = campo => {
    campo.setCustomValidity(''); // Sobreescribimos el mensaje de error nativo
    // Si le doy un valor, el validador considera el campo no válido

    /*if( !campo.value.trim() && campo.required){
        campo.setCustomValidity('Campo obligatorio');
    }
    */

    if(!campo.validity.valid){
        campo.setCustomValidity('Campo no válido');
    }


    campo.reportValidity();
}

const formulario = document.getElementsByTagName('form')[0];
const campos = document.querySelectorAll('input');

campos.forEach(campo => {
    campo.addEventListener('input', () => {validarCampo(campo);});
});

formulario.addEventListener('submit', (evento) => {
    if(evento.target.tagName == "INPUT"){
        validarCampo(evento.target);
    }
});

formulario.addEventListener('submit', (evento) => {
    campos.forEach(campo => {
        validarCampo(campo);

        if(!formulario.checkValidity()){
            evento.preventDefault();
            console.log("Hay un campo mal, revísalo");
        } else {
            formulario.submit();
            console.log("Todo correcto. Enviando formulario...");
        }
    });
});


/*
Validacion: Mixta
Momento de validación: Input y submit
Mensajes: Mixto
Estilos: JS
*/

function compararValorContraseña(){
    let claves = document.querySelectorAll('[type="password"]');
    if(claves[0].value !== claves[1].value){
        claves[1].setCustomValidity('Las contraseñas no coinciden');
        // De cara a aplicar estilos
        claves[1].classList.add('no-valido');
        claves[1].classList.remove('valido');
    } else {
        claves[1].setCustomValidity('');
    }

    claves[º].reportValidity(); // Muestra el mensaje de error 
    
    
}

// Validacion de los campos de contraseña
const formulario2 = documentQuerySelector("form");
formulario2.addEventListener("input", (evento) => {
    if(evento.target.name == "confirm-password" || evento.target.name == "password"){
        compararValorContraseña();
    }
    
});

formulario2.addEventListener("submit", (evento) => {
    if(evento.target.name == "confirm-password" || evento.target.name == "password"){
        compararValorContraseña();
    }
    
});