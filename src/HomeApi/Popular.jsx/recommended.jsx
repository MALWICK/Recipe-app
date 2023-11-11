import React from 'react';
import RecommendedItem from './recommendedItem';
import './recommended.css';

function recommended() {
  return (
    <div>
      <div className="recommeneditems">
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        {/*  <RecommendedItem /> */}
      </div>
    </div>
  );
}

export default recommended;
