import React from 'react';
import './searchBar.css';

function searchNavber() {
  return (
    <div className="searchNavber">
      <div className="container">
        <div className="container__content">
          <input
            type="search"
            className="search"
            placeholder="search food recipe here"
          />
          <button type="button" className="searchBtn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default searchNavber;
