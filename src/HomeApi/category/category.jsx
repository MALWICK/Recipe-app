import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';

function catergory() {
  const [categories, setCatogories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((data) => setCatogories(data.meals))
      .catch((error) => console.log(error));
  }, []);

  console.log(categories);

  const handleCategoryClick = (strCategory) => {
    console.log(strCategory, 'catergoryid');
    /* navigate(`/categoryDescription/${strCategory}`); */
  };
  /*  console.log(categories); */
  return (
    <div className="categories-container">
      {categories.map((mealsType) => (
        <div
          className="category-holder"
          key={mealsType.strCategory}
          onClick={() => handleCategoryClick(categories.strCategory)}
          aria-hidden="true"
        >
          {mealsType.strCategory}
        </div>
      ))}
    </div>
  );
}

export default catergory;
