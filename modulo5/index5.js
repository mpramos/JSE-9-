
//! 6! = 6*5*4*3*2*1 
//! 6! = 6*5*4*3*2*1! //2 * factorial(1) =2 * 1 =2
//!  6! = 6*5*4*3*2! //3 * factorial(2) = 3 *2 =6
//!  6! = 6*5*4*3! // 4 * factorial(3)
//!  6! = 6*5*4! // 5 * factorial(4)
//!  6! = 6*5! // n*factorial(5) = 6*120

//? 5! = 5*4*3*2*1 = 120
//? 4! = 4*3*2*1 = 12
//? 3! = 3*2*1 = 6
//? 2! = *2*1 = 2
//? 1! = 1 = 1


function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(6)); // -> 720
