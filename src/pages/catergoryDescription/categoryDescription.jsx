import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function categoryDescription() {
  const { categoryName } = useParams();
  const [dishes, setDishes] = useState([]);
  console.lo(dishes);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    )
      .then((response) => response.json())
      .then((data) => setDishes(data.meals))
      .catch((error) => console.log(error));
  }, [categoryName]);
  return (
    <div>
      <p>iudsiuiusdiuuduide</p>
      <p>idsiudijewio</p>
    </div>
  );
}

export default categoryDescription;
