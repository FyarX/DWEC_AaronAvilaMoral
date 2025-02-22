// Proyecto Gestión de Estudiantes y Asignaturas 
// Autor: Aarón Ávila Moral

// Para ver repositorio completo:
// https://github.com/FyarX/DWEC_AaronAvilaMoral


// ************* IMPORTACIÓN DE FICHEROS ******************
import { Estudiante } from "./Estudiante.js";
import { Asignatura } from "./Asignatura.js";
import { Direccion } from "./Direccion.js";
import { ListadoEstudiantes } from "./ListadoEstudiantes.js";
import { ListadoAsignaturas } from "./ListadoAsignaturas.js";


//? Creación de listas de estudiantes y asignaturas
let listaDeEstudiantes = new ListadoEstudiantes();
let listaDeAsignaturas = new ListadoAsignaturas();

// //! Carga de datos almacenados en el LocalStorage
// function cargarLocalStorage() {
//     //? Carga de datos de estudiantes
//     const estudiantes = JSON.parse(localStorage.getItem("listaEstudiantes")) || [];
//     if (estudiantes) {

//         estudiantes.forEach(estudiante => {
//             const direccion = new Direccion(
//                 estudiante.direccion.calle,
//                 estudiante.direccion.numero, 
//                 estudiante.direccion.piso, 
//                 estudiante.direccion.cp, 
//                 estudiante.direccion.provincia, 
//                 estudiante.direccion.localidad
//             );

//             const nuevoEstudiante = new Estudiante(estudiante.nombre, estudiante.edad, direccion);
//             listaEstudiantes.agregaEstudiante(nuevoEstudiante);
//         });
//     }

//     //? Carga de datos de asignaturas
//     const asignaturas = JSON.parse(localStorage.getItem("listaAsignaturas")) || [];
//     if (asignaturas) {
//         asignaturas.forEach(asignatura => {
//             const nuevaAsignatura = new Asignatura(asignatura.nombre);
//             listaAsignaturas.agregaAsignatura(nuevaAsignatura);
//         });
//     }

//     //? Carga de datos de matriculaciones
//     const matriculaciones = JSON.parse(localStorage.getItem("matriculaciones")) || [];
//     if (matriculaciones) {
//         matriculaciones.forEach(matriculacion => {
//             const estudiante = listaEstudiantes.busquedaEstudiante(matriculacion.estudiante);
//             const asignatura = listaAsignaturas.busquedaAsignatura(matriculacion.asignatura);
//             estudiante.matricularEstudiante(asignatura);
//         });
//     }

//     //? Carga de datos de calificaciones
//     const calificaciones = JSON.parse(localStorage.getItem("calificaciones")) || [];
//     if (calificaciones) {
//         calificaciones.forEach(calificacion => {
//             const estudiante = listaEstudiantes.busquedaEstudiante(calificacion.estudiante);
//             const asignatura = listaAsignaturas.busquedaAsignatura(calificacion.asignatura);
//             estudiante.calificarEstudiante(asignatura, calificacion.nota);
//         });
//     }
// }

// // Se carga el LocalStorage al iniciar la aplicación
// cargarLocalStorage();

// //? Carga de registros en el LocalStorage (Va fuera de la función ya que se usará en varias funciones)
// function cargarRegistrosLocalStorage(estudiante) {
//     const registros = JSON.parse(localStorage.getItem("registros")) || [];
//     let arrayRegistros = [];
//     if(registros){
//         for(let registro of registros){
//             if(registro.nombre === estudiante.nombre){
//                 arrayRegistros = registro.registros;
//             }
//         }
//     }
//     return arrayRegistros;
// }

function cargarDatosLocalStorage() {
    //? Carga de datos de estudiantes
    let estudiantesGuardados = localStorage.getItem("todosLosEstudiantes");
    console.log(estudiantesGuardados);

    if (estudiantesGuardados) {
        estudiantesGuardados = estudiantesGuardados ? JSON.parse(estudiantesGuardados) : []; ///con json.parse convertimos el string en un objeto y asi llamamos a los valores

        estudiantesGuardados.forEach(est => {
            let nuevaDireccion = new Direccion(est.direccion.calle, est.direccion.numero, est.direccion.piso, est.direccion.cp, est.direccion.provincia, est.direccion.localidad);
            let nuevoEstudiante = new Estudiante(est.nombre, est.edad, nuevaDireccion);
            listaDeEstudiantes.agregaEstudiante(nuevoEstudiante);
        });
    }

    //? Carga de datos de asignaturas
    let asignaturasGuardadas = localStorage.getItem("todasLasAsignaturas");
    console.log(asignaturasGuardadas);



    if (asignaturasGuardadas) {
        asignaturasGuardadas = asignaturasGuardadas ? JSON.parse(asignaturasGuardadas) : []; ///con json.parse convertimos el string en un objeto y asi llamamos a los valores

        asignaturasGuardadas.forEach(asig => {
            let nuevaAsignatura = new Asignatura(asig.nombre);
            listaDeAsignaturas.agregaAsignatura(nuevaAsignatura);
        });

    }

    //? Carga de datos de matriculaciones
    let matriculacionesGuardadas = localStorage.getItem("matriculaciones");
    console.log(matriculacionesGuardadas);

    if (matriculacionesGuardadas) {
        matriculacionesGuardadas = JSON.parse(matriculacionesGuardadas); // Convertimos el string en un objeto

        for (let matriculacion of matriculacionesGuardadas) {
            let estudiante = listaDeEstudiantes.busquedaEstudiante(matriculacion.estudiante);
            let asignatura = listaDeAsignaturas.busquedaAsignatura(matriculacion.asignatura);
            if (estudiante && asignatura) {
                estudiante.matricularEstudiante(asignatura);
            }
        }
    }

    //? Carga de datos de calificaciones
    let calificacionesGuardadas = localStorage.getItem("calificaciones");
    console.log(calificacionesGuardadas);

    if (calificacionesGuardadas) {
        calificacionesGuardadas = JSON.parse(calificacionesGuardadas); // Convertimos el string en un objeto

        for (let calificacion of calificacionesGuardadas) {
            let estudiante = listaDeEstudiantes.busquedaEstudiante(calificacion.estudiante);
            let asignatura = listaDeAsignaturas.busquedaAsignatura(calificacion.asignatura);
            if (estudiante && asignatura) {
                estudiante.calificar(asignatura, calificacion.nota);
            }
        }
    }
}



// Cargar los estudiantes y asignaturas al iniciar
cargarDatosLocalStorage();


// ************* ACCIONES DEL MENÚ ******************
//! BOTÓN "Crear Estudiante"
document.addEventListener("DOMContentLoaded", () => {
    const boton1 = document.getElementById("btn1");
    const formulario1 = document.getElementById("opt1");

    formulario1.classList.add("hidden"); // Oculta el formulario al inicio

    boton1.addEventListener("click", function () {
        formulario1.classList.toggle("hidden");
    });


    // Validación de formulario
    document.getElementById("opt1").querySelector("form").addEventListener("submit", function (e) {

        const nombreEstudiante = document.getElementById("nombre").value;
        const edadEstudiante = document.getElementById("edad").value;
        const calleEstudiante = document.getElementById("calle").value;
        const numeroEstudiante = document.getElementById("numero").value;
        const pisoEstudiante = document.getElementById("piso").value;
        const cpEstudiante = document.getElementById("cp").value;
        const provinciaEstudiante = document.getElementById("provincia").value;
        const localidadEstudiante = document.getElementById("localidad").value;

        let nuevaDireccion = new Direccion(calleEstudiante, numeroEstudiante, pisoEstudiante, cpEstudiante, provinciaEstudiante, localidadEstudiante);
        let nuevoEstudiante = new Estudiante(nombreEstudiante, edadEstudiante, nuevaDireccion);
        try {
            listaDeEstudiantes.agregaEstudiante(nuevoEstudiante);
            alert("Estudiante añadido con éxito");
        } catch (error) {
            alert(error.message);
        }

        const estudiantesArray = listaDeEstudiantes.listaEstudiantes.map(estudiante => ({
            nombre: estudiante.nombre,
            edad: estudiante.edad,
            direccion: {
                calle: estudiante.direccion.calle,
                numero: estudiante.direccion.numero,
                piso: estudiante.direccion.piso,
                cp: estudiante.direccion.cp,
                provincia: estudiante.direccion.provincia,
                localidad: estudiante.direccion.localidad
            }
        }));

        // Guardar en LocalStorage
        localStorage.setItem("todosLosEstudiantes", JSON.stringify(estudiantesArray));

        
    });
});

//! BOTÓN "Eliminar Estudiante"
document.addEventListener("DOMContentLoaded", () => {
    const boton2 = document.getElementById("btn2");
    const formulario2 = document.getElementById("opt2");
    const salida2 = document.getElementById("salida2");

    formulario2.classList.add("hidden"); // Oculta el formulario al inicio

    boton2.addEventListener("click", function () {
        formulario2.classList.toggle("hidden");
    });

    // Validación de formulario
    document.getElementById("opt2").querySelector("form").addEventListener("submit", function (e) {
        const nombreEstudiante = document.getElementById("nombre_eliminar").value;
        try {
            listaDeEstudiantes.eliminaEstudiante(nombreEstudiante);
            alert("Estudiante eliminado con éxito");
        } catch (error) {
            alert(error.message);
        }

        const estudiantesArray = listaDeEstudiantes.listaEstudiantes.map(estudiante => ({
            nombre: estudiante.nombre,
            edad: estudiante.edad,
            direccion: {
                calle: estudiante.direccion.calle,
                numero: estudiante.direccion.numero,
                piso: estudiante.direccion.piso,
                cp: estudiante.direccion.cp,
                provincia: estudiante.direccion.provincia,
                localidad: estudiante.direccion.localidad
            }
        }));
    
        // Eliminar del LocalStorage
        localStorage.setItem("todosLosEstudiantes", JSON.stringify(estudiantesArray));
    });

    // Obtener datos del LocalStorage
    const datos = JSON.parse(localStorage.getItem("todosLosEstudiantes"));
    // Mostrar las asignaturas en el HTML
    salida2.innerHTML = "";
    datos.forEach(estudiante => {
        salida2.innerHTML += `<li style="color: white;">${estudiante.nombre}</li>`;
    });
        
});


//! BOTÓN "Crear Asignatura"
document.addEventListener("DOMContentLoaded", () => {
    const boton11 = document.getElementById("btn11");
    const formulario11 = document.getElementById("opt11");

    formulario11.classList.add("hidden"); // Oculta el formulario al inicio

    boton11.addEventListener("click", function () {
        formulario11.classList.toggle("hidden");
    });

    // Validación de formulario
    document.getElementById("opt11").querySelector("form").addEventListener("submit", function (e) {

        const nombreAsignatura = document.getElementById("nombre_asignatura").value;
        let nuevaAsignatura = new Asignatura(nombreAsignatura);
        const asignaturaAñadida = listaDeAsignaturas.agregaAsignatura(nuevaAsignatura);

        if (asignaturaAñadida) {
            alert("Asignatura añadida con éxito");

            const asignaturasArray = listaDeAsignaturas.listaAsignaturas.map(asignatura => ({
                nombre: asignatura.nombre
            }));

            // Guardar en LocalStorage
            localStorage.setItem("todasLasAsignaturas", JSON.stringify(asignaturasArray));
        } else {
            alert("La asignatura ya existe");
        }
    });
});


//! BOTÓN "Eliminar Asignatura"
document.addEventListener("DOMContentLoaded", () => {
    const boton12 = document.getElementById("btn12");
    const formulario12 = document.getElementById("opt12");
    const salida12 = document.getElementById("salida12");

    formulario12.classList.add("hidden"); // Oculta el formulario al inicio

    boton12.addEventListener("click", function () {
        formulario12.classList.toggle("hidden");
    });

    // Validación de formulario
    document.getElementById("opt12").querySelector("form").addEventListener("submit", function (e) {
        const nombreAsignatura = document.getElementById("nombre_eliminar_asignatura").value;
        try {
            listaDeAsignaturas.eliminaAsignatura(nombreAsignatura);
            alert("Asignatura eliminada con éxito");
        } catch (error) {
            alert(error.message);
        }

        const asignaturasArray = listaDeAsignaturas.listaAsignaturas.map(asignatura => ({
            nombre: asignatura.nombre
        }));

        // Eliminar del LocalStorage
        localStorage.setItem("todasLasAsignaturas", JSON.stringify(asignaturasArray));

    });

    // Obtener datos del LocalStorage
    const datos = JSON.parse(localStorage.getItem("todasLasAsignaturas"));

    // Mostrar las asignaturas en el HTML
    salida12.innerHTML = "";
    datos.forEach(asignatura => {
        salida12.innerHTML += `<li style="color: white;">${asignatura.nombre}</li>`;
    });
});


//! BOTÓN "Matricular Estudiante"
document.addEventListener("DOMContentLoaded", () => {
    const boton3 = document.getElementById("btn3");
    const formulario3 = document.getElementById("opt3");


    formulario3.classList.add("hidden"); // Oculta el formulario al inicio

    boton3.addEventListener("click", function () {
        formulario3.classList.toggle("hidden");
    });

    // Validación de formulario
    document.getElementById("opt3").querySelector("form").addEventListener("submit", function (e) {
        const nombreEstudiante = document.getElementById("nombre_matricular").value;
        const nombreAsignatura = document.getElementById("asignatura_matricular").value;

        const estudiante = listaDeEstudiantes.busquedaEstudiante(nombreEstudiante);
        const asignatura = listaDeAsignaturas.busquedaAsignatura(nombreAsignatura);

        if (estudiante && asignatura) {
            estudiante.matricularEstudiante(asignatura);
            alert("Estudiante matriculado con éxito");

            // Guardar en LocalStorage
            const matriculaciones = JSON.parse(localStorage.getItem("matriculaciones")) || [];
            matriculaciones.push({ estudiante: nombreEstudiante, asignatura: nombreAsignatura });
            localStorage.setItem("matriculaciones", JSON.stringify(matriculaciones));
        } else {
            alert("El estudiante o la asignatura no existen");
        }
    });
}); 

//! BOTÓN "Desmatricular Estudiante"
document.addEventListener("DOMContentLoaded", () => {
    const boton4 = document.getElementById("btn4");
    const formulario4 = document.getElementById("opt4");
    const salida4 = document.getElementById("salida4");

    formulario4.classList.add("hidden"); // Oculta el formulario al inicio

    boton4.addEventListener("click", function () {
        formulario4.classList.toggle("hidden");
    });

    // Validación de formulario
    document.getElementById("opt4").querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        const nombreEstudiante = document.getElementById("nombre_desmatricular").value;
        const nombreAsignatura = document.getElementById("asignatura_desmatricular").value;

        const estudiante = listaDeEstudiantes.busquedaEstudiante(nombreEstudiante);
        const asignatura = listaDeAsignaturas.busquedaAsignatura(nombreAsignatura);

        if (estudiante && asignatura) {
            estudiante.desmatricularEstudiante(asignatura);
            alert("Estudiante desmatriculado con éxito");

            // Eliminar del LocalStorage
            const matriculaciones = JSON.parse(localStorage.getItem("matriculaciones")) || [];
            const index = matriculaciones.findIndex(m => m.estudiante === nombreEstudiante && m.asignatura === nombreAsignatura);
            if (index !== -1) {
                matriculaciones.splice(index, 1);
                localStorage.setItem("matriculaciones", JSON.stringify(matriculaciones));
            }
        } else {
            alert("El estudiante o la asignatura no existen o el estudiante no está matriculado en la asignatura");
        }

        // Obtener datos del LocalStorage
        const datos = JSON.parse(localStorage.getItem("matriculaciones")) || [];

        // Mostrar las asignaturas en el HTML
        salida4.innerHTML = "";
        for (let matriculacion of datos) {
            salida4.innerHTML += `<li style="color: white;">${matriculacion.estudiante} - ${matriculacion.asignatura}</li>`;
        }
    });

    // Obtener datos del LocalStorage al cargar la página
    const datos = JSON.parse(localStorage.getItem("matriculaciones")) || [];

    // Mostrar las asignaturas en el HTML
    salida4.innerHTML = "";
    for (let matriculacion of datos) {
        salida4.innerHTML += `<li style="color: white;">${matriculacion.estudiante} - ${matriculacion.asignatura}</li>`;
    }
});

//! BOTÓN "Calificar Estudiante"
document.addEventListener("DOMContentLoaded", () => {
    const boton6 = document.getElementById("btn6");
    const formulario6 = document.getElementById("opt6");
    const salida6 = document.getElementById("salida6");

    formulario6.classList.add("hidden"); // Oculta el formulario al inicio

    boton6.addEventListener("click", function () {
        formulario6.classList.toggle("hidden");
    });

    // Validación de formularioç
    document.getElementById("opt6").querySelector("form").addEventListener("submit", function () {
        const nombreEstudiante = document.getElementById("nombre_calificar").value;
        const nombreAsignatura = document.getElementById("asignatura_calificar").value;
        const nota = document.getElementById("calificacion").value;

        const estudiante = listaDeEstudiantes.busquedaEstudiante(nombreEstudiante);
        const asignatura = listaDeAsignaturas.busquedaAsignatura(nombreAsignatura);

        if (estudiante && asignatura) {
            
            estudiante.calificar(asignatura, nota)? alert("Estudiante calificado con éxito"): alert("El estudiante no está matriculado en esta asignatura");

            // Guardar en LocalStorage
            const calificaciones = JSON.parse(localStorage.getItem("calificaciones")) || [];
            calificaciones.push({ estudiante: nombreEstudiante, asignatura: nombreAsignatura, nota: nota });
            localStorage.setItem("calificaciones", JSON.stringify(calificaciones));
        } else {
            alert("El estudiante o la asignatura no existen o el estudiante no está matriculado en la asignatura");
        }
    });

    // Obtener datos del LocalStorage al cargar la página
    const datos = JSON.parse(localStorage.getItem("calificaciones")) || [];

    // Mostrar las asignaturas en el HTML
    salida6.innerHTML = "";
    for (let calificacion of datos) {
        salida6.innerHTML += `<li style="color: white; margin-top: 20px;">${calificacion.estudiante} - ${calificacion.asignatura} (Nota: ${calificacion.nota})</li>`;
    }
});

//! BOTÓN "Promedio de un Estudiante"
document.addEventListener("DOMContentLoaded", () => {
    const boton7 = document.getElementById("btn7");
    const formulario7 = document.getElementById("opt7");

    formulario7.classList.add("hidden"); // Oculta el formulario al inicio

    boton7.addEventListener("click", function () {
        formulario7.classList.toggle("hidden");
    });

    // Validación de formulario
    document.getElementById("opt7").querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        const nombreEstudiante = document.getElementById("nombre_promedio").value;

        const estudiante = listaDeEstudiantes.busquedaEstudiante(nombreEstudiante);

        if (estudiante) {
            salida7.innerHTML = "";
            salida7.innerHTML += `El promedio de ${nombreEstudiante} es ${estudiante.promedioEstudiante()}`;
        } else {
            alert("El estudiante no existe");
        }
    });
});

//! BOTÓN "Promedio de Todos los Estudiantes"
document.addEventListener("DOMContentLoaded", () => {
    const boton8 = document.getElementById("btn8");
    const contenidoPromedio = document.getElementById("opt8");
    const salida8 = document.getElementById("salida8");

    contenidoPromedio.classList.add("hidden"); // Oculta el formulario al inicio

    boton8.addEventListener("click", function () {
        contenidoPromedio.classList.toggle("hidden");
    });

    // Mostrar el promedio de todos los estudiantes
    salida8.innerHTML = "";
    salida8.innerHTML += `El promedio de todos los estudiantes es ${listaDeEstudiantes.promedioEstudiantes()}`;
});

//! BOTÓN "Reporte Completo"
document.addEventListener("DOMContentLoaded", () => {
    const boton10 = document.getElementById("btn10");
    const contenidoReporte = document.getElementById("opt10");
    const salida10 = document.getElementById("salida10");

    contenidoReporte.classList.add("hidden"); // Oculta el formulario al inicio

    boton10.addEventListener("click", function () {
        contenidoReporte.classList.toggle("hidden");
    });

    // Mostrar el reporte completo
    salida10.innerHTML = "";
    listaDeEstudiantes.listaEstudiantes.forEach(estudiante => {
        salida10.innerHTML += `<h3>Nombre del estudiante: ${estudiante.nombre}</h3>`;
        salida10.innerHTML += `<h4>Calificaciones:</h4>`;
        estudiante.asignaturas.forEach(asignatura => {
            const nota = Number(asignatura.calculaPromedio());
            salida10.innerHTML += `<p>${asignatura.nombre}: ${nota}</p>`;
        });
        salida10.innerHTML += `<h4>Promedio: ${estudiante.promedioEstudiante()}</h4>`;
        salida10.innerHTML += `<hr>`;
    });
});


