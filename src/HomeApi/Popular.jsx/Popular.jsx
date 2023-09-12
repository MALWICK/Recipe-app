import React, { useState, useEffect } from 'react';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Meals</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
