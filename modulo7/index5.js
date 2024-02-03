const numbers = [1, 2, 3]
// let one=numbers[0]
// let two=numbers[1]
// console.log(one)
// console.log(two)
// console.log(numbers);
let [numOne, numTwo, numThree] = numbers
console.log(numOne);
console.log(numTwo);
console.log(numThree);

if (numOne) {
    console.log('existe el numero');
}
if (numTwo) {
    console.log(suma(numOne,numTwo));
} else {
    console.log('no existe');
}
function suma(one,two) {
    return one + two
}

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)



const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  let [html,css,js,react]=frontEnd
  console.log(html);
  console.log(css);
  console.log(js);
  console.log(react);
  let [node,express,mongoDb]=backEnd
  console.log(node, express,mongoDb);

  console.log(frontEnd)
  console.log(backEnd)

  const numbers1 = [1, 2, 3, 4]
  let [, , ,numThree1] = numbers1 //2 is omitted
//   let [numOne1, , numThree1] = numbers1 //2 is omitted

  console.log( numThree1)


  const names1 = [undefined, 'Brook', 'David']
let [
  firstPerson1 = 'Asabeneh',
  secondPerson2,
  thirdPerson2,
  fourthPerson2 = 'John'
] = names1

console.log(firstPerson1, secondPerson2, thirdPerson2, fourthPerson2)  
console.log(names1);



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

let [num4,num5,num6,...rest1]=rest
console.log(num4,num5,num6);
console.log(rest1)

let [num7,num8,num9,num10]=rest1
console.log(num7,num8,num9,num10);





//Another Example
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

// const getPersonInfo = obj => {
//   const skills = obj.skills
//   const formattedSkills = skills.slice(0, -1).join(', ')
//   const languages = obj.languages
//   const formattedLanguages = languages.slice(0, -1).join(', ')

//   personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//     obj.age
//   } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

//   return personInfo
// }

// console.log(getPersonInfo(person))





// Let us create a function which give information about the person object with destructuring
const getPersonInfo = (
{  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages}
) => {
  const formattedSkills = skills.slice(0, -1).join(', ') 
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}
console.log(getPersonInfo(person))
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/





const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
  ]
//  for (const objeto of todoList) {
//   console.log(objeto.task, objeto.time,objeto.completed);
//  }
  
  for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
  }
 