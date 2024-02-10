document.addEventListener('DOMContentLoaded',function () {
    const characterContainer = document.getElementById('characters-container')
    console.log(characterContainer);
    fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta=>  respuesta.json())
    .then(data=> {
        data.results.forEach(character => {
            const card = createCharacterCard(character)
            characterContainer.appendChild(card)
        });
    })
    .catch(error => console.log('Error en el fetching ',error ))
} )

function createCharacterCard(character) {
            const card= document.createElement("div")
            card.classList.add('card')
            
            const img = document.createElement("img")
            img.src= character.image;
            img.alt = character.name
            
            const name = document.createElement("h2")
            name.textContent=character.name
            
            const especie = document.createElement("p")
            especie.textContent = ` Species : ${character.species}`
            
            
            const estado =document.createElement("p")
            estado.textContent =  ` Status : ${character.status}`

            card.appendChild(img)    
            card.appendChild(name)    
            card.appendChild(especie)    
            card.appendChild(estado)
            
            return card
}
