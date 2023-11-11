import axios from 'axios';
import React from 'react';
import { useParams, useEffect, useState } from 'react-router-dom';

function theDescription() {
  const { recipeID } = useParams();
  const [imageDescriptions, setImageDescriptions] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/images.php?i=${recipeID}`)
      .then((response) => setImageDescriptions(response.data.meals))
      .catch((error) =>
        console.error('Error fetching image descriptions:', error)
      );
  }, []);

  return (
    <div className="recipe-description">
      {imageDescriptions.map((image) => (
        <img src={image.strMealThumb} key={image.idMeal} alt="Description" />
      ))}
    </div>
  );
}

export default theDescription;
