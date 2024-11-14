import React from 'react';
import '../Style.K/styles.css'; // Correct path to your global styles

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <h3>Refine Results</h3>
      <div className="filter-group">
        <label>Make</label>
        <select>
          <option>Any Make</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Model</label>
        <select>
          <option>Any Model</option>
        </select>
      </div>
      <div className="filter-row">
        <div className="filter-group">
          <label>Min Year</label>
          <select>
            <option>Min Year</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Max Year</label>
          <select>
            <option>Max Year</option>
          </select>
        </div>
      </div>
      <div className="filter-row">
        <div className="filter-group">
          <label>Min Price</label>
          <select>
            <option>Min Price</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Max Price</label>
          <select>
            <option>Max Price</option>
          </select>
        </div>
      </div>
      {/* Add similar fields for transmission, color, engine, fuel type */}
      <div className="filter-group">
        <label>Transmission</label>
        <select>
          <option>Any Transmission</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Body Style</label>
        <select>
          <option>Any Body Style</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Color</label>
        <select>
          <option>Any Color</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Engine</label>
        <select>
          <option>Any Engine</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Fuel Type</label>
        <select>
          <option>Any Fuel Type</option>
        </select>
      </div>
      <div className="search-group">
        <input type="text" placeholder="Keyword Search: Stock #" />
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
};

export default FilterPanel;
