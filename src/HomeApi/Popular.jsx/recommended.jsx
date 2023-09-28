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
            <h1 className="text-white" key={meal.idMeal}>
              {meal.strMeal}
            </h1>
            <img
              className={Styles.imgmeal}
              src={meal.strMealThumb}
              alt="meal"
            />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
