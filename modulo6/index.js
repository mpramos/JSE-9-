// // let multiply = (a, b) => a + b;
// // let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
// // console.log(result);
// // console.log('maria')

// // console.log('abc'); // -> abc
// // conole.log('def'); // -> Uncaught ReferenceError: conole is not defined
// // console.log('ghi');


// try {
//     console.log('abc'); // -> abc
//     conole.log('abc');
//     console.log('maria');
// } catch (error) {  
//     console.log(error.message); // -> conole is not defined 
// }
// console.log('maria');
// console.log(2+3);


try {
    let a = b;
} catch (error) {
    console.log(error); // -> ReferenceError: b is not defined
}
console.log("Hemos manejado la excepción"); // -> Hemos manejado la excepción

