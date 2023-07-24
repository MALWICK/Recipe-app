import React from 'react';
import './foodForm.css';
import { useDataContext } from '../../constext/DataContext';

function FoodForm() {
  /*   const { handleSubmit, values, editValues } = useDataContext(); */
  const { handleSubmit, ClosePup } = useDataContext();
  return (
    <div className="disForm">
      <div className="foodform">
        <form className="form" id="foodForm" onSubmit={handleSubmit}>
          <div className="food__name">
            <div className="closer" />
            <div className="foodn">
              <p>Food Name</p>
            </div>
            <input
              type="text"
              placeholder="Enter food Name"
              name="name"
              required
            />
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
                name="imageUrl"
              />
            </div>
          </div>
          <div className="desc">
            <div className="foodDesc">
              <p>Enter food description</p>
            </div>
            <input
              type="text"
              placeholder="food Description"
              name="description"
              required
            />
          </div>
          <div className="origin">
            <div className="foodOrigi">
              <p>Food Origin</p>
            </div>
            <input
              type="text"
              placeholder="enter Foods origin"
              name="Origin"
              required
            />
          </div>

          <div className="actions">
            <button type="submit" className="submit">
              Submit
            </button>
            <button type="button" className="cancel" onClick={ClosePup}>
              Cancel
            </button>
          </div>
        </form>
        {/* {Object.keys(values).length > 0 && (
          <div className="data">
            <h2>Form Data</h2>
            <p>Name: {values.name}</p>
            {values.imageUrl && <img src={values.imageUrl} alt="voice" />}
            <p>Description: {values.description}</p>
            <p>Origin: {values.Origin}</p>
            <button type="button" onClick={editValues}>
              edit
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default FoodForm;
