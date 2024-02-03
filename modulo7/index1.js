const numbersSlice = [1,2,3,4,5]

console.log(numbersSlice.slice()) // -> it copies all  item
console.log(numbersSlice.slice(0)) // -> it copies all  item
console.log(numbersSlice.slice(0, numbersSlice.length)) // it copies all  item 
// console.log(numbersSlice.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

let recorteTresElementos= numbersSlice.slice(1,4)
console.log(recorteTresElementos);
console.log(numbersSlice);


const numeros = [1, 2, 3, 4, 5]
numeros.splice()
console.log(numeros)                // -> remove all items



const numbersSplice = [1, 2, 3, 4, 5]
let one=numbersSplice.splice(0,1)
console.log(one);
console.log(numbersSplice)            // remove the first item


const numbers = [1, 2, 3, 4, 5, 6]

let other= numbers.splice(3,3)
console.log(other);
console.log(numbers);
numbers.splice(3, 3, 7, 8, 9,10,11,12)
console.log(numbers.splice(3, 3, 7, 8, 9,10,11,12))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
console.log(numbers);

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0][3])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1][0]) // ["Node", "Express", "MongoDB"]


 