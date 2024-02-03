//! 6! = 1*6*5*4*3*2 
function factorial (n) { //6
    let result = 1;
    while (n > 1) {
        result *= n;
        // result = result *n; result = 30 * 4 //30
        n--; // 1
    }
    return result;
}

console.log(factorial(6)); // -> 720


