const container = document.getElementById("container")
const input_search = document.getElementById("input_search")

window.addEventListener('DOMContentLoaded',api)

function search(){
    container.innerHTML = ""
    input_search.value=input_search.value.toUpperCase()
    api()
  }

function api(){
    // console.log(`https://www.thecocktaildb.com/`);
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input_search.value}`)
      .then(response => response.json())
    .then(data => data["drinks"].map(msj=>{
        createCard(msj)
        })
    )}

function createCard(element){
    const {strDrink,strDrinkThumb,strCategory}=element
    
    const div = document.createElement('div');
    div.classList.add("div")

    const name = document.createElement('p')
    name.textContent=strDrink+" - "+strCategory
    name.classList.add("name")

    const img = document.createElement('img')
    img.setAttribute("src",strDrinkThumb)
    img.classList.add("img")

    div.appendChild(name)
    div.appendChild(img)

    container.appendChild(div)
}