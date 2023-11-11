import React from 'react';
import Vegge from './Vegge/Vegge';
import Recommended from './Popular.jsx/recommended';
import './homeapi.css';

function HomeApi() {
  return (
    <div className="homeapi">
      <div className="homeapi__container">
        <Vegge />
        <Recommended />
      </div>
    </div>
  );
}

export default HomeApi;
