import React from 'react'
import Input from './input.jsx'
import Button from './Button.jsx'
import { useNavigate } from 'react-router-dom';
import Navigation from './navigation';

import './first_step.css'
const third_step = ({onClick,name,email,topics}) => {

  const renderTopics = Array.isArray(topics) ? (
    <ul>
      {topics.map((topic, index) => (
        <li key={index}>{topic}</li>
      ))}
    </ul>
  ) : null;
          
            
  return (
    <div className='Appcontainer'>
    <div className='firststepcontainer'>
        <form>
        <div className='text'>Summary</div>
        <div className='row'><label>Name:</label>{name}</div>
        <div className='row'><label>Email:</label>{email}</div>
        <div className='row'><label>Topics:</label>
        {renderTopics}
            </div>
        <Button label={'Continue'} onClick={onClick}/>
        
        </form>
    </div>
    <Navigation step={'3'} />
            <div className='background_circle1'></div>
            <div className='background_circle2'></div>
          </div>
  )
}

export default third_step