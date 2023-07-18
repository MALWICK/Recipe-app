import React from 'react';
import './food.css';
import SearchNavber from '../../components/nav/searchNavber';
import FoodForm from '../../components/FoodForm/FoodForm';

function Food() {
  return (
    <div>
      <div className="foodContainer">
        <SearchNavber />
        <FoodForm />
      </div>
    </div>
  );
}

export default Food;
