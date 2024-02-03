



function operation(func, first, second) {
    return func(first, second);
}
//! Expresion de funciones
let myAdd = function(a, b) {
    return a + b;
}
let myMulti = function(a,b){
    return a *b
}

console.log(operation(myAdd, 10, 20)); // -> 30
console.log(operation(myMulti, 10, 20)); // -> 30

console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200
