import React from 'react';
import Vegge from './Vegge/Vegge';
import Recommended from './Popular.jsx/recommended';
import './homeapi.css';
import Catergory from './category/category';
import ForYou from './forYou';

function HomeApi() {
  return (
    <div className="homeapi">
      <div className="homeapi__container">
        <Vegge />
        <Recommended />
        <Catergory />
        <ForYou />
      </div>
    </div>
  );
}

export default HomeApi;
