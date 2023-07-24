import React from 'react';
import { useDataContext } from '../../constext/DataContext';

function FoodDisplay() {
  const { values, editValues } = useDataContext();

  return (
    <div className="foodDisplay">
      <div className="food__display_wrapper">
        {values.map((value) => {
          return (
            <div key={value.id} className="food__display">
              <p> {value.name}</p>
              <img src={value.imageUrl} alt="food" />
              <p> {value.description}</p>
              <button type="button" onClick={editValues}>
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
