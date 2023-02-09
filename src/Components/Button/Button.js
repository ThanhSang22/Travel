import React from 'react';
import './Button.css';

const Button = ({name, icon, className, type}) => {
  return (
    <button type={type || 'button'} className={`button ${className}`}>
      <span className='button-icon'>{icon}</span>
      <div className='button-name'>{name}</div>
    </button>
  )
}

export default Button