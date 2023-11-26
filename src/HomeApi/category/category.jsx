import React, { useEffect, useState } from 'react';

function catergory() {
  const [categories, setCatogories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json())
      .then((data) => setCatogories(data.meals))
      .catch((error) => console.log(error));
  }, [2]);
  /*  console.log(categories); */
  return (
    <div className="categories-container">
      {categories.map((mealsType) => (
        <div className="category-holder" key={mealsType.strCategory}>
          {mealsType.strCategory}
        </div>
      ))}
    </div>
  );
}

export default catergory;
