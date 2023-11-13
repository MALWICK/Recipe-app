/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function MealDescription({ match }) {
  const [meal, setMeal] = useState([]);
  console.log(meal);

  const mealId = match.params.id;

  // Fetch the meal details based on the mealId
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]))
      .catch((error) => console.log(error));
  }, [mealId]);

  console.log(meal);

  // Render the meal details
  return (
    <div>
      <div>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <p>{meal.strInstructions}</p>
        <h3>Ingredients:</h3>
      </div>
    </div>
  );
}

export default MealDescription;
