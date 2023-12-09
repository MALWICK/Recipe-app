import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './foryou.css';

function forYou() {
  const [meals, setMeals] = useState([]);

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

  return (
    <div className="forYou">
      {meals.map((meal) => (
        <div className="foryoucard">
          <div className="image-container">
            <img src={meal.strMealThumb} alt="" />
          </div>

          <p>{meal.strMeal}</p>
        </div>
      ))}
    </div>
  );
}

export default forYou;
