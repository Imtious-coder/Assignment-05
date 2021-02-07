// api adding..
const searchForFood = () => {
    document.getElementById('food-section').innerHTML = "";
    document.getElementById('food-infoSection').innerHTML = "";
    const foodName = document.getElementById('food-name').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}&search.php?f=${foodName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showFood(data))
        .catch(error => document.getElementById('food-section').innerHTML = `<h4> No food is related to this word... please try something else bro...</h4>`);
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

// Food info here...
const foodInfo = (img, name, Ingredient1, Ingredient2, Ingredient3, Ingredient4, Ingredient5, Ingredient6) => {
    document.getElementById('food-infoSection').innerHTML = "";
    const info = document.getElementById('food-infoSection');
    const infoDetail = document.createElement('div');
    infoDetail.className = 'info-food';
    infoDetail.innerHTML = `
    <img src=${img}>
    <h3>${name}</h3>
    <h4>Ingredients</h4>
    <ul>
        <li>${Ingredient1}</li>
        <li>${Ingredient2}</li>
        <li>${Ingredient3}</li>
        <li>${Ingredient4}</li>
        <li>${Ingredient5}</li>
        <li>${Ingredient6}</li>
    </ul>
    `;
    info.appendChild(infoDetail);
};