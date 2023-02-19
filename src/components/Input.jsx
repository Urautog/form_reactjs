import React from 'react';

import '../css/Input.css';

const Input = ({ children, inputType }) => {
  return (
    <>
      <div className="input-container">
        <label> {children} </label>
        <input type={inputType}></input>
      </div>
    </>
  );
};

export default Input;
