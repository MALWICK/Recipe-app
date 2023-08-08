import React from 'react';
import './searchBar.css';
import { useDataContext } from '../../constext/DataContext';

function searchNavber() {
  const { search, setSearch } = useDataContext();
  console.log(search);
  return (
    <div className="searchNavber">
      <div className="container">
        <div className="container__content">
          <input
            type="search"
            className="search"
            placeholder="search food recipe here"
            onChange={(e) => setSearch(e.target.value)}
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
