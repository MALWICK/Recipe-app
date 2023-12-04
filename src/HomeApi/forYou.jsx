import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      {meals.map((meal) => (
        <div className="foryoucard">
          <p>{meal.strMeal}</p>
          <img src={meal.strMealThumb} alt="" />
        </div>
      ))}
    </div>
  );
}

export default forYou;
