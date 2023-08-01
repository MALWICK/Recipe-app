import React from 'react';
import './editFrom.css';
import { useDataContext } from '../../constext/DataContext';

function EditForm() {
  const { closeEditform, handleSubmit, editFood } = useDataContext();
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
              defaultValue={editFood.name}
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
                defaultValue={editFood.imageUrl}
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
              defaultValue={editFood.description}
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
              defaultValue={editFood.Origin}
            />
          </div>

          <div className="actions">
            <button type="submit" className="submit">
              Submit
            </button>
            <button type="button" className="cancel" onClick={closeEditform}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
