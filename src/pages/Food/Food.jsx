import React from 'react';
import { useDataContext } from '../../constext/DataContext';
import './food.css';
import SearchNavber from '../../components/nav/searchNavber';
import Button from '../../Atoms/FoodFormCaller';
import FoodForm from '../../components/FoodForm/FoodForm';
import FoodDisplay from '../../components/FoodDisplayer/FoodDisplay';
import Foodnav from './foodnav/foodnav';

function Food() {
  const { open, setOpen } = useDataContext();
  return (
    <div>
      {open && <FoodForm />}
      <div className="foodContainer">
        <div className="navbar">
          <Foodnav />
          <SearchNavber />
        </div>
        <div className="food-container__inner">
          <div className="button-conatiner">
            <Button
              text="create Food"
              className="custom__button"
              onClick={() => setOpen(true)}
            />
          </div>
          <FoodDisplay />
        </div>
      </div>
    </div>
  );
}

export default Food;
