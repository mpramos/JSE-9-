const evens = [0, 2, 4, 6, 8, 10]

const evenNumbers = [...evens]
evenNumbers[3]='ana'
console.log(evenNumbers);
console.log(evens);


const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

 const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  const copiedUser = {...user,phone:'231231313',adress:'H'}

  console.log(copiedUser)
  console.log(user)


