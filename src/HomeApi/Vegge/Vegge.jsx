import React from 'react';
import { useNavigate } from 'react-router-dom';
import './vegge.css';

function Vegge() {
  const navigate = useNavigate();
  const handleNavigatin = () => {
    navigate('/');
  };
  return (
    <div className="vegge">
      <h1 onClick={() => handleNavigatin()} aria-hidden="true">
        Der Gricht D
      </h1>
    </div>
  );
}

export default Vegge;
