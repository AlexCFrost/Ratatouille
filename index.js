
const RandomMealContainer = document.getElementById("RandomMealContainer")
const randomMeal = document.getElementById("randomMeal")
const searchedFoodContainer = document.getElementById("searchedFoodContainer")   

document.getElementById("searchid").addEventListener("click", ()=>{
    const searchResult = document.getElementById("search").value
    searchedFoodContainer.innerHTML='';
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchResult}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data.meals)
        const food = data.meals
        appendMeals(food)
    })
    .catch(Error=>{
        console.log(Error)
      })
})


function appendMeals(food){
    food.forEach((el) => {
        const div = document.createElement("div")
        div.classList.add("fetallimg")

        const imagesTag = document.createElement("img")
        imagesTag.src = el.strMealThumb

        const h3 = document.createElement("h3")
        h3.innerText = el.strMeal

        div.appendChild(imagesTag)
        div.appendChild(h3)
        searchedFoodContainer.appendChild(div)
    });
}


    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.meals[0].strMealThumb);
    randomMeal.src = data.meals[0].strMealThumb
    
  })
  .catch(Error=>{
    console.log(Error)
  })













