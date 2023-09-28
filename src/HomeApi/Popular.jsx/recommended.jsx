import React, { useState, useEffect } from 'react';
import Styles from './recommendeditem.module.css';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/random.php'
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  console.log(meals);

  return (
    <div className={Styles.recom}>
      <div className="shadow">
        {meals.map((meal) => (
          <ul>
            <li key={meal.idMeal}>{meal.strMeal}</li>
            <img src={meal.strMealThumb} alt="meal" className="rounded-lg" />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
