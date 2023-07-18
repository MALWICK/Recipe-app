/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './foodForm.css';

function FoodForm() {
  return (
    <div className="foodform">
      <form className="form">
        <div className="food__name">
          <div className="foodn">
            <p>Food Name</p>
          </div>
          <input type="text" placeholder="Enter food Name" />
        </div>
        <div className="img__upload">
          <div className="imgt">
            <p>Choose food Image</p>
          </div>
          <div className="inputer__img">
            <input
              type="text"
              placeholder="enter images url"
              className="img__in"
            />
            <input required style={{ display: 'none' }} type="file" id="file" />
            <label htmlFor="file" className="upl">
              <button type="button">upload</button>
            </label>
          </div>
        </div>
        <div className="desc">
          <div className="foodDesc">
            <p>Enter food description</p>
          </div>
          <input type="text" placeholder="food Description" />
        </div>
        <div className="origin">
          <div className="foodOrigi">
            <p>Food Origin</p>
          </div>
          <input type="text" placeholder="enter Foods origin" />
        </div>

        <div className="actions">
          <button type="submit" className="submit">
            Submit
          </button>
          <button type="button" className="cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default FoodForm;
