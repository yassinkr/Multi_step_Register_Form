import React from 'react'
import './button.css'
const Button = ({label ,onClick}) => {
  return (
    <div className='Buttoncontainer'>
    <button onClick={onClick}>
   {label}
    </button>
    </div>
  )
}

export default Button