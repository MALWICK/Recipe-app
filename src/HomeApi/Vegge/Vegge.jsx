import React, { useEffect, useState } from 'react';
import './vegge.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Vegge() {
  const navigate = useNavigate();
  const [mainData, setMainData] = useState([]);
  console.log(mainData, 'jakas');

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => setMainData(response.data.meals))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleMealClick = (meal) => {
    navigate(`/meal-description/${meal.idMeal}`);
  };

  return (
    <div className="vegge">
      {mainData?.map((meal) => (
        <div
          className="vegge__container"
          key={meal.idMeal}
          style={{ backgroundImage: `url(${meal.strMealThumb})` }}
          onClick={() => handleMealClick(meal)}
          aria-hidden="true"
        >
          <p>ff</p>
        </div>
      ))}
    </div>
  );
}

export default Vegge;
