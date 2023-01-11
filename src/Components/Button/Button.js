import React from 'react';
import './Button.css';

const Button = ({name, icon, className}) => {
  return (
    <div className={`button ${className}`}>
      <span className='button-icon'>{icon}</span>
      <div className='button-name'>{name}</div>
    </div>
  )
}

export default Button