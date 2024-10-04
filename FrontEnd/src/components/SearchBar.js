import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by stock #" />
      <button className="btn-search">SEARCH</button>
    </div>
  );
};

export default SearchBar;
