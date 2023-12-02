import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function categoryDescription() {
  const { categoryid } = useParams();
  const [dishes, setDishes] = useState(null);
  console.log(dishes);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryid}`)
      .then((response) => response.json())
      .then((data) => setDishes(data.meals))
      .catch((error) => console.log(error));
  }, [categoryid]);
  return (
    <div>
      <p>iudsiuiusdiuuduide</p>
      <p>idsiudijewio</p>
    </div>
  );
}

export default categoryDescription;
