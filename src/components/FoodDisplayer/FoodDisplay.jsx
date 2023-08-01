import React from 'react';
import { useDataContext } from '../../constext/DataContext';
import './foodDisplay.css';
import EditForm from '../EditForm/EditForm';

function FoodDisplay() {
  const { values, editValues, openEdit } = useDataContext();

  return (
    <div className="foodDisplay">
      {openEdit && <EditForm />}
      <div className="food__display_wrapper">
        {values?.map((value) => {
          return (
            <div key={value?.id} className="food__display">
              <img src={value?.imageUrl} alt="food" />
              <p> {value?.name}</p>
              <button type="button" onClick={() => editValues(value.id)}>
                edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
