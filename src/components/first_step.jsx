import React from 'react'
import Input from './input.jsx'
import Button from './Button.jsx'
import Navigation from './navigation';

import './first_step.css'
const first_step = ({onClick,onChangeName,onChangeEmail}) => {
   
  
            
  return (
    <div className='Appcontainer'>
    <div className='firststepcontainer'>
        <form>
        <div className='text'>Register</div>
        <div className='row'><Input type={"text"}label={'Name'} placeholder={'enter your name'} onChange={onChangeName}/></div>
        <div className='row'><Input type={"email"} label={'Email'} placeholder={'example@gmail.com'} onChange={onChangeEmail}/></div>
        <Button label={'Continue'} onClick={onClick}/>
        
        </form>
    </div>
    <Navigation step={'1'} />
            <div className='background_circle1'></div>
            <div className='background_circle2'></div>
          </div>
  )
}

export default first_step