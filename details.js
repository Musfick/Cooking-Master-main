const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${myParam}`)
  .then((response) => response.json())
  .then((data) => {
    var meal = data.meals[0];
    var wrapper = document.getElementById('wrapper');

    var content = `<img src='${meal.strMealThumb}' alt="">`;

    wrapper.innerHTML = content;
  });
