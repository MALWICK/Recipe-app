import React, { useEffect, useState } from 'react';
import './vegge.css';
import axios from 'axios';

function Vegge() {
  const [mainImage, setMainImage] = useState('');
  const [recipeURL, setRecipeURL] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [imageDescriptions, setImageDescriptions] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => {
        setMainImage(response.data.meals[0].strMealThumb);
        setRecipeURL(response.data.meals[0].strMeal);

        const mealID = response.data.meals[0].idMeal;
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/images.php?i=${mealID}`)
          .then((descResponse) => setImageDescriptions(descResponse.data.meals))
          .catch((error) =>
            console.error('Error fetching image descriptions:', error)
          );
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(mainImage, 'yeah');

  const handleImageClick = () => {
    window.location.href = recipeURL;
  };

  return (
    <div
      className="vegge"
      style={{ backgroundImage: `url(${mainImage})` }}
      onClick={handleImageClick}
      aria-hidden="true"
    >
      <img src={mainImage} alt="Random Vegge Dish" />
      <p>ff</p>
    </div>
  );
}

export default Vegge;
