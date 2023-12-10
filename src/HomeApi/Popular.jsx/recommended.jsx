import React from 'react';
import RecommendedItem from './recommendedItem';
import './recommended.css';

function recommended() {
  return (
    <div className="recommended__container">
      <div className="recommeneditems">
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
      </div>
    </div>
  );
}

export default recommended;
