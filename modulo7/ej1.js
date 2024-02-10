//? const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
//?const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//? const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]

// Utilice forEach para console.log cada país de la matriz countries.
// Use forEach para console.log cada nombre de la matriz names.

//? const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach(element => {
    console.log(element);
});
// Utilice map para crear una nueva matriz cambiando cada país a mayúsculas en la matriz countries.
//? const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
let countriesToUpper=countries.map(element=>
    element.toUpperCase()
    )
    console.log(countriesToUpper);
    console.log(countries);
    
    // Utilice el filtro para filtrar los países que contienen land.
    //? const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
    let countrieWithLand=countries.filter(e=> e.toLowerCase().includes('land'));
    console.log(countrieWithLand);
    
    
    //Utilice el filter para filtrar los países que tienen seis caracteres.
    //?const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
    
    let countriesWith6Characters=countries.filter(country=> country.length === 6)
    console.log(countriesWith6Characters);
    
    /*let countriesWith6CharactersAnother=[]
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length === 6) {
            countriesWith6CharactersAnother.push(countries[i])
        }
    }
    console.log(countriesWith6CharactersAnother);
    */ 
   
   // Use some para comprobar si la longitud de algunos nombres es mayor que siete en la matriz de nombres
   const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
   let lengthIs=names.some(name=>name.length>7)
   console.log(lengthIs);
   
   //  Utilice find para encontrar el primer país que contiene solo seis letras en la matriz de países
//?    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
   let firstCountryWithSixCharacters=countries.find(country=>country.length===6)
   console.log(firstCountryWithSixCharacters);
   
   //    Use findIndex para encontrar la posición de Noruega, si no existe en la matriz, obtendrá -1.
   const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
let indexCountryNoruega=countries.findIndex(country=>country ==='IceLand')
console.log(indexCountryNoruega);


// Encuentre la suma del precio de los productos usando solo reduce (devolución de llamada))
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  
  let sum=products.filter(product=> typeof product.price ==='number').reduce((suma,product)=> suma+ product.price,0)
  console.log(sum);

   user={
    nombre:'',
    edad:35
   }
  function nombres(a,b) {
    return {a:a,b:b}
  } 
  console.log(nombres('juana','fernanda'));
   


