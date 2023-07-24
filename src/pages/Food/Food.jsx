import React from 'react';
import { useDataContext } from '../../constext/DataContext';
import './food.css';
import SearchNavber from '../../components/nav/searchNavber';
import Button from '../../Atoms/FoodFormCaller';
import FoodForm from '../../components/FoodForm/FoodForm';

function Food() {
  const { open, setOpen } = useDataContext();
  return (
    <div>
      {open && <FoodForm />}
      <div className="foodContainer">
        <SearchNavber />
        <div className="food-container__inner">
          <div className="button-conatiner">
            <Button
              text="create Food"
              className="custom__button"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
