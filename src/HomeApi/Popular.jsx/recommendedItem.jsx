import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

function RecommendedItem() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

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
    }, 800);

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []);

  if (isLoading) {
    return (
      <div className={Styles.loader}>
        <h2>Loading...</h2>
      </div>
    );
  }

  const descriptionNavigation = (mealId) => {
    console.log(mealId, 'mealid');
    navigate(`/meal-description/${mealId}`);
  };

  return (
    <div>
      {errors && <div className="error">{errors.message}</div>}
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div
            className={Styles.recom}
            key={meal.idMeal}
            onClick={() => descriptionNavigation(meal.idMeal)}
            aria-hidden="true"
          >
            <div className={Styles.recom__inner}>
              <div className={Styles.overlay} />
              <h1 className={Styles.topleft}>{meal.strMeal}</h1>
              <img
                src={meal.strMealThumb}
                alt="meal"
                className={Styles.imgmeal}
                loading="lazy"
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

export default RecommendedItem;
