function potencia (x, n){
    return x ** n;
}

console.log(potencia(2, 3));

function otraPotencia(x, n){
    let resultado = 1;
    for(let i = 0; i < n; i++){
        resultado*=x;
    }
    return resultado;
}

//RECURSIVIDAD
// 1. Caso base que termine la recursividad
// 2. Problema que tiene que dividirse en subproblemas

function potenciaRecursiva(x, n){
    if(n == 1){
        return x;
    }else{
        return (x*potenciaRecursiva(x, n-1))
    }
}

//1ra interacción
x=2, n=3
return 2*potenciaRecursiva(2*2);

//2da interacción
x=2, n=2
return 2*potenciaRecursiva(2*1);

//3ra interacción
x=2, n=1
return 2

