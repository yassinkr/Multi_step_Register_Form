import React from 'react';
import Button from './Button.jsx';
import Navigation from './navigation';

import './third_step.css'; // Assuming you have a third_step.css file

const ThirdStep = ({ onClick, name, email, softwear, uiux, graphics }) => {
  const renderTopics = () => (
    <ul>
      {softwear !== '' && <li>{softwear}</li>}
      {uiux !== '' && <li>{uiux}</li>}
      {graphics !== '' && <li>{graphics}</li>}
    </ul>
  );

  return (
    <div className='Appcontainer'>
      <div className='thirdstepcontainer'>
        <form>
          <div className='text'>Summary</div>
          <div className='rowthird'>
           <div className='container'> <label className='lable'>Name:</label>
            <p>{name}</p></div>
            <div className='container'>
            <label className='lable'>Email:</label>
            <p>{email}</p></div>
          </div>
          
          <div className='rowthird'>
            <label className='lable'>Topics:</label>
            {renderTopics()} {/* Call the function to render topics */}
          </div>
          <div className='btncontainer'>        
             <Button label={'Continue'} onClick={onClick} /></div>
        </form>
      </div>
      <Navigation step={'3'} />
      <div className='background_circle1'></div>
      <div className='background_circle2'></div>
    </div>
  );
};

export default ThirdStep;
