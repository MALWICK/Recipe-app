import React, { useState, useEffect } from 'react';
import Styles from './recommendeditem.module.css';

const fetchedData = () => {
  const controller = new AbortController();
  const { signal } = controller;
};

function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/random.php'
        );
        const data = await response.json();

        setMeals(data.meals);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className={Styles.loader}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div className={Styles.recom} key={meal.idMeal}>
            <div className={Styles.recom__inner}>
              <div className={Styles.overlay} />
              <h1 className={Styles.topleft}>{meal.strMeal}</h1>
              <img
                src={meal.strMealThumb}
                alt="meal"
                className={Styles.imgmeal}
              />
            </div>
          </div>
        ))
      ) : (
        <div>No meals found.</div>
      )}
    </div>
  );
}

export default App;
