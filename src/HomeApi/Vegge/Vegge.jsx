import React, { useEffect, useState } from 'react';
import './vegge.css';
import axios from 'axios';

function Vegge() {
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => setMainImage(response.data.meals[0].strMealThumb))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(mainImage, 'yeah');

  return (
    <div className="vegge" style={{ backgroundImage: `url(${mainImage})` }}>
      <p>ido</p>
    </div>
  );
}

export default Vegge;
