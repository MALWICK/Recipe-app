import React from 'react';
import { useDataContext } from '../../constext/DataContext';
import './foodDisplay.css';

function FoodDisplay() {
  const { values } = useDataContext();

  return (
    <div className="foodDisplay">
      <div className="food__display_wrapper">
        {values?.map((value) => {
          return (
            <div key={value?.id} className="food__display">
              <img src={value?.imageUrl} alt="food" />
              <p> {value?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
