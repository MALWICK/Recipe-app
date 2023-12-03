import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './categoryDescription.css';

function CategoryDescription() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        setMeals(response.data?.meals);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>; // Render a loader while fetching data
  }

  const handleNavigate = (mealId) => {
    navigate(`/foodCategoryDescription/${mealId}`);
    console.log(mealId, 'fucks');
  };

  console.log(meals);
  return (
    <div className="mealDescription-category">
      <h2>Category: {category}</h2>
      <ul className="categoryDescription-cont">
        {meals.map((meal) => (
          <li
            className="category-holders"
            key={meal.idMeal}
            onClick={() => handleNavigate(meal.idMeal)}
            aria-hidden="true"
          >
            <div className="img-decript">
              <img src={meal.strMealThumb} alt="meal" />
            </div>
            <span className="mealtitle"> {meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDescription;
