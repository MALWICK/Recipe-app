import React, { useEffect, useState } from 'react';
import './vegge.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Vegge() {
  const navigate = useNavigate();
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => setMainData(response.data.meals))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="vegge">
      {mainData.map((meal) => (
        <div
          className="vegge__container"
          key={meal.idMeal}
          style={{ backgroundImage: `url(${meal.strMealThumb})` }}
          onClick={() => navigate(`/meal-description/${meal.idMeal}`)}
          aria-hidden="true"
        >
          <p>ff</p>
        </div>
      ))}
    </div>
  );
}

export default Vegge;
