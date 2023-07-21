import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <input
      className="filter"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
