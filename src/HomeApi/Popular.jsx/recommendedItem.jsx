import React, { useState, useEffect } from 'react';
import Styles from './recommendeditem.module.css';

const fetchData = async () => {
  const controller = new AbortController();
  const { signal } = controller;

  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
      { signal }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    controller.abort(); // Cancel request if it's still pending
  }
};

function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData()
        .then((fetchedData) => {
          setMeals(fetchedData.meals);
          setIsLoading(false); // Set isLoading to false after fetching data
        })
        .catch((error) => {
          setErrors(error);
          setIsLoading(false); // Set isLoading to false on error
        });
    }, 8000);

    return () => clearTimeout(timeout); // Clear timeout on component unmount
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
      {errors && <div className="error">{errors.message}</div>}
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
