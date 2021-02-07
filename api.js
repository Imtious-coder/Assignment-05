// api adding..
const searchForFood = () => {
    document.getElementById('food-section').innerHTML = "";
    document.getElementById('food-infoSection').innerHTML = "";
    const foodName = document.getElementById('food-name').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}&search.php?f=${foodName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showFood(data))
        .catch(error => document.getElementById('food-section').innerHTML = `<h4> No food is related to this word... please try something else :( </h4>`);
    document.getElementById('food-name').value = '';
}

// search results..
const showFood = foodsName => {
    const foodSection = document.getElementById('food-section');
    foodsName.meals.forEach(foodName => {

        const imgFood = foodName.strMealThumb;
        const nameFood = foodName.strMeal;
        const imgAndNameInfo = document.createElement('div');
        imgAndNameInfo.className = 'img-name';
        imgAndNameInfo.innerHTML = `
            <div onclick="foodInfo('${foodName.strMealThumb}','${foodName.strMeal}','${foodName.strIngredient1}','${foodName.strIngredient2}','${foodName.strIngredient3}','${foodName.strIngredient4}','${foodName.strIngredient5}','${foodName.strIngredient6}')">
            <img src=${imgFood}>
            <h3>${nameFood}</h3>
            </div>
        `;
        foodSection.appendChild(imgAndNameInfo);
    });
};