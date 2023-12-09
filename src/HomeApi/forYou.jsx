import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './foryou.css';

function forYou() {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
        );
        setMeals(response.data?.meals);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(meals, 'foryou');

  const handleClick = (idMeal) => {
    navigate(`/foryouFoodDescription/${idMeal}`);
  };

  return (
    <div className="forYou">
      {meals.map((meal) => (
        <div
          key={meal.strMeal}
          className="foryoucard"
          onClick={() => handleClick(meal.idMeal)}
          aria-hidden="true"
        >
          <div className="image-container">
            <img src={meal.strMealThumb} alt="" />
          </div>
          <div className="food-header">
            <p>{meal.strMeal}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default forYou;
