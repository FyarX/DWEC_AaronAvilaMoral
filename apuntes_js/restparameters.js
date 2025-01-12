function sumarTodo (n1, n2){
    return n1 + n2;
}

sumarTodo( 1, 2);


// Permite ingresar un número indefinido de 
// elementos como argumento

function sumarTodo (... numeros){
    let acumulado = 0;
    for(let num of numeros){
        acumulado += num;
    }
    return acumulado;
}


function concatenaPalabras (...palabras){
    let stracumulada = "";
    for(let palabra of palabras){
        stracumulada += palabra;
    }
    return stracumulada;
}



let numeroInicial = 1000;
function restaTotal(numeroInicial, ...numeros){
    for(let numero of numeros){
       numeroInicial -= numero;
    }
return numeroInicial;
}

// Forma Recursiva

function restaRecursiva(numeroInicial, ...numeros){
    if (numeros.length == 1){
        return numeroInicial -= numeros[0];
    }else{
        numeroInicial -= numeros.pop();
        return restaRecursiva(numeroInnicial, ...numeros);
    }
}

//Recursiva con otra forma de REST
function restaRecursiva(numeroInicial){
    if (arguments.length == 2){
        return numeroInicial -= arguments[1];
    }else{
        numeroInicial -= arguments.pop();
        return restaRecursiva(numeroInicial);
    }
}