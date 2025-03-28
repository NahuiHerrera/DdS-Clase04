/*function calcularFactorial(numero){
    if (numero==1) {
        return 1
    }
    if (numero<0){
        return 0;
    }
    if (numero>1) {
        return numero * calcularFactorial(numero-1)
    }
}
console.log (calcularFactorial(4))*/


function calculadoraPotencia(base, exponente){
    if (exponente < 0) {
        base = 1 / base
        return base * calculadoraPotencia(base, exponente - 1); 
    }
    if (exponente == 0 ) {
        return 1;
    }
    if (exponente == 1 ) {
        return base;
    }
}

console.log(calculadoraPotencia (2, 3))
console.log("Hola")