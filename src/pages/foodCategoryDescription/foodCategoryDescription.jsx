import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function foodCategoryDescription() {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        setMeal(response.data?.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeal();
  }, [mealId]);

  if (!meal) {
    return <div>Loading meal...</div>;
  }

  return (
    <div>
      <h2>Meal: {meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>Ingredients:</h3>
      <ul>
        {/* Render the list of ingredients */}
        {Object.keys(meal)
          .filter((key) => key.includes('strIngredient') && meal[key])
          .map((key) => (
            <li key={key}>{meal[key]}</li>
          ))}
      </ul>
    </div>
  );
}

export default foodCategoryDescription;
