import React from 'react';
import './TextDecoration.css';

const TextDecoration = ({name, className}) => {
    return (
        <u className={`text-decoration ${className}`}>{name}</u>
    )
}

export default TextDecoration;