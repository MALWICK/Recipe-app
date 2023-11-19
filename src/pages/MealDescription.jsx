/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

function MealDescription() {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setMeal(data.meals[0]);
        } else {
          setError('Meal not found');
        }
        setIsLoading(false);
      } catch (errorr) {
        console.error('Error:', errorr);
        setError('An error occurred while fetching the meal');
        setIsLoading(false);
      }
    };

    fetchMeal();
  }, [mealId]);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!meal) {
    return <div>No meal found.</div>;
  }

  const ingredients = Object.entries(meal)
    .filter(([key, value]) => key.startsWith('strIngredient') && value)
    .map(([key, value]) => {
      const measureKey = `strMeasure${key.slice(13)}`;
      const measure = meal[measureKey];
      return {
        ingredient: value,
        measure,
      };
    });

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt="meal" />
      <p>{meal.strInstructions}</p>
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map(({ ingredient, measure }, index) => (
          <li key={index}>
            {ingredient} - {measure}
          </li>
        ))}
      </ul>
      <div className="player-wrapper">
        <ReactPlayer
          url={meal.strYoutube}
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default MealDescription;
