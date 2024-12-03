import React from "react";

const CatalogSort = ({ sortType, onSortChange, sortOptions }) => {
  return (
    <select value={sortType} onChange={onSortChange} className="catalog-sort">
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CatalogSort;

