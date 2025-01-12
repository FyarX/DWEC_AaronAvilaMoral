function producto(a, b){
    return a* b;
}

function potencia(a, b){
    return Math.pow(a, b);
}

function modulo(a, b){
    return a % b;
}

const numero = 3;

export{
    producto as mult,
    modulo as mod,
    numero
}