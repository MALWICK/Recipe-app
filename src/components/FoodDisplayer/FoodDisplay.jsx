import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from '../../constext/DataContext';
import './foodDisplay.css';
/* import EditForm from '../EditForm/EditForm'; */

function FoodDisplay() {
  const { values, search } = useDataContext();
  const navigate = useNavigate();

  return (
    <div className="foodDisplay">
      <h3>Let Discover Food</h3>
      <h1>Special Dishes Today</h1>

      <div className="i__container">
        <div className="dinner">
          <i className="fa-solid fa-plate-utensils" />
        </div>
      </div>

      {/*  {openEdit && <EditForm />} */}
      <div className="food__display_wrapper">
        {values
          ?.filter((value) => {
            return search.toLowerCase() === ''
              ? value
              : value.name.toLowerCase();
          })
          .map((value) => {
            return (
              <div key={value?.id} className="food__display">
                <div className="display__imgcont">
                  <img src={value?.imageUrl} alt="food" />
                </div>
                <div className="display__actions">
                  <p> {value?.name}</p>
                  {/* <button type="button" onClick={() => editValues(value)}>
                  edit
                </button> */}
                </div>
                <div className="readmore">
                  <button
                    type="button"
                    onClick={() => navigate(`/fooddescription/${value?.id}`)}
                  >
                    READ MORE
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
