import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';

function foodCategoryDescription() {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        setMeal(response.data?.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeal();
  }, [idMeal]);
  console.log(meal);

  if (!meal) {
    return <div>Loading mealo...</div>;
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

  const handleClick = () => {
    navigate(`/fetchedFood`);
    console.log('badlucj');
  };

  return (
    <div className="mealsdescription">
      <div className="mealDescription__container">
        <div className="back__container">
          <button
            type="button"
            className="back__btn"
            onClick={() => handleClick()}
          >
            <i className="fa-solid fa-arrow-left" />
            Back
          </button>
        </div>
        <div className="meal__info">
          <img src={meal.strMealThumb} alt="meal" />

          <div className="fooddetails-container">
            <h1>{meal.strMeal}</h1>
            <span className="food__origin">
              Origin: <span className="bluetext">{meal.strArea}</span>
            </span>
            <h2 className="ingre">Ingredients</h2>
            <ul className="lister">
              {ingredients.map(({ ingredient, measure }) => (
                <li key={measure}>
                  {ingredient} - <span className="lighttext">{measure}</span>
                </li>
              ))}
            </ul>
            <p>{meal.strInstructions}</p>
            <div className="player-wrapper">
              <ReactPlayer
                url={meal.strYoutube}
                className="react-player"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default foodCategoryDescription;
