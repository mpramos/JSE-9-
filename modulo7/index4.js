// Una función de devolución de llamada, el nombre de la función podría ser cualquier nombre
const callback = (n) => {
    return n ** 2 // 9
  }
  
  // Función que toma otra función como devolución de llamada
  function cube(callback, n) {
    return callback(n) * n // 9*3 //27
  }
  
  console.log(cube(callback, 3))
  
  // Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
//   console.log(higherOrder(2)(3)(10))
  console.log(higherOrder(2)(3)(10))


const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))




const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5



objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
  })
  
  // or
  
  objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
  })
  
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return 1
    if (a.age > b.age) return -1
    return 0
  })
  console.log(users) // sorted ascending
  // [{…}, {…}, {…}, {…}]


  let first=[1,2,3]
  let second=[4,5,6,7]

  let third =[...first, ...second]
  console.log(third);