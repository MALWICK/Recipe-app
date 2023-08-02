import React from 'react';
import { useDataContext } from '../../constext/DataContext';
import './foodDisplay.css';
import EditForm from '../EditForm/EditForm';

function FoodDisplay() {
  const { values, editValues, openEdit } = useDataContext();

  return (
    <div className="foodDisplay">
      <h1>Food Recipes</h1>
      {openEdit && <EditForm />}
      <div className="food__display_wrapper">
        {values?.map((value) => {
          return (
            <div key={value?.id} className="food__display">
              <div className="display__imgcont">
                <img src={value?.imageUrl} alt="food" />
              </div>
              <div className="display__actions">
                <p> {value?.name}</p>
                <button type="button" onClick={() => editValues(value)}>
                  edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
