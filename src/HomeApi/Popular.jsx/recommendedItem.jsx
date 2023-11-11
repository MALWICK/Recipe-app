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

  /*  console.log(meals); */

  return (
    <div>
      {meals.map((meal) => (
        <div className={Styles.recom}>
          <div className={Styles.recom__inner}>
            <div className={Styles.overlay} />
            <h1 className={Styles.topleft} key={meal.idMeal}>
              {meal.strMeal}
            </h1>
            <img
              src={meal.strMealThumb}
              alt="meal"
              className={Styles.imgmeal}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
