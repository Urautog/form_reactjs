import React from 'react';

import '../css/Select.css';

const Select = ({ children, options, handleSelect }) => {
  return (
    <>
      <div className="select-container">
        <label>{children}</label>
        <select defaultValue="Selecione" onChange={handleSelect}>
          <option disabled>Selecione</option>
          {options.map((option) => (
            <option key={option.id}>{option.name}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
