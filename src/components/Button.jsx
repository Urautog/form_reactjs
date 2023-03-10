import React from 'react';

import '../css/Button.css';

const Button = ({ children, onClick, className, type }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
