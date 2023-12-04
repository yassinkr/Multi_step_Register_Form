import React from 'react';
import './input.css';

const Input = ({ label, placeholder, type, onChange }) => {

  const handleInputChange = (event) => {
    
    onChange(event.target.value); // Call the provided onChange prop with the input value
  };

  return (
    <div className='inputcontainer'>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={handleInputChange}></input>
    </div>
  );
}

export default Input;
