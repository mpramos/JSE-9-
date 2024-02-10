const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens


 
    //! Async Await
let url1='https://restcountries.com/v2/all'    
const fetchData = async ()=>{
  try {
    const respuesta= await fetch(url1)
    const paises= await respuesta.json()
    console.log(paises);

  } catch (error) {
    console.error(error)
  }
}  
fetchData()