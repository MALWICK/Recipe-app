import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MealDescription() {
  const { idMeal } = useParams();
  const [mealDetails, setMealDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset the loader after 9 seconds
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 9000);

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        setMealDetails(response.data.meals[0]);
        clearTimeout(loaderTimeout); // Cancel the loader timeout if the data is fetched before 9 seconds
      })
      .catch((error) => {
        console.error('Error fetching meal details:', error);
        setIsLoading(false); // Stop the loader if an error occurs
      });

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(loaderTimeout);
  }, [idMeal]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Meal Description</h1>
      <h2>ID: {idMeal}</h2>
      {mealDetails && (
        <>
          <p>Meal Name: {mealDetails.strMealThumb}</p>
          <p>Category: {mealDetails.strInstructions}</p>
          {/* Display other meal details */}
        </>
      )}
    </div>
  );
}

export default MealDescription;
