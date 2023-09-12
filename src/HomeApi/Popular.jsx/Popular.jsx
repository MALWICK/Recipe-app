import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Meals</h1>

      {meals.map((meal) => (
        <ul>
          <li key={meal.idMeal}>{meal.strMeal}</li>
          <img src={meal.strMealThumb} alt="meal" className="rounded-lg" />
        </ul>
      ))}
    </div>
  );
}

export default App;
