// radio_btn.jsx
import React from 'react';
import './check_btn.css';
import { useState } from 'react';
const check_btn = ({ label, name, type, value, onChange }) => {
        const [isChecked,setToggle]=useState(false);
        
          const checkHandler = (event) => {
            
            setToggle(!isChecked);
            const updatedValue = isChecked ? '' : value; // Toggle the value
            onChange(updatedValue);
            console.log(updatedValue);
          };
  return (
    <label className='inputcheckcontainer'>
      <input type={type} name={name} value={value} onChange={onChange} onClick={checkHandler} />
      <span className="custom-checkbox"><h3>{label}</h3></span>
    </label>
  );
};

export default check_btn;
