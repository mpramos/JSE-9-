

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
//Funcion de expresión
const innerFunc = outerFunction()

console.log(innerFunc()) //1
console.log(innerFunc()) //2
console.log(innerFunc()) //3


function otraFuncion() {
        let contador=0
        function otraFuncionInterna() {
            contador++
            return contador
        }    
        return otraFuncionInterna
}
let OtraFuncion= otraFuncion()

console.log(OtraFuncion());
console.log(OtraFuncion());

let otraFuncion=()=>{
    let cont=0
   let otraFuncionInterna=()=>{
    cont++
    return cont
   }
   return otraFuncionInterna    
}
let otraFuncionFlecha=otraFuncion()
console.log(otraFuncionFlecha());
console.log(otraFuncionFlecha());
console.log(otraFuncionFlecha());







function outerFunction() {
    let count = 4;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)