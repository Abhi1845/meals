"use-strict";

const searchUl = document.querySelector(".searchUl");

document
  .querySelector(".search-bar")
  .addEventListener("keyup", async function (e) {
    let meal = e.target.value;
    console.log(meal);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    const data = await res.json();
    const mealsArr = data.meals;

    mealsArr.forEach(function (meal) {
      const html = `
          <li>
          ${meal.strMeal}
          </li>
        `;

      searchUl.insertAdjacentHTML("afterbegin", html);
    });
  });
