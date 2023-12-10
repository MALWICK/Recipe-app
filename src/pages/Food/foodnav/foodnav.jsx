import React from 'react';
import './foodnav.css';
import { useNavigate } from 'react-router-dom';

function foodnav() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="backlinks">
      <div className="backlins-container">
        <div className="second">
          <div className="backhome">
            <button type="button" onClick={() => handleClick()}>
              Back To Home
            </button>
          </div>
        </div>
        <div className="fisrt">
          <div className="thehedding">Der Gericht</div>
        </div>
      </div>
    </div>
  );
}

export default foodnav;
