import React from 'react';
import './reciepeDescription.css';
import { useParams } from 'react-router-dom';

function RecipeDescription() {
  const [food, setFood] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const foodItem = JSON.parse(localStorage.getItem('item'))?.find(
      (item) => +item.id === +id
    );
    if (foodItem) setFood({ ...foodItem });
  }, [id]);

  return (
    <div>
      RecipeDescription
      {food && (
        <div>
          <p>name: {food.name}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeDescription;
