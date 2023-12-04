import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './navigation.css';

const navigation = ({ step }) => {
  const [circleClasses, setCircleClasses] = useState({
    circle1: 'circlecontainer',
    circle2: 'circlecontainer',
    circle3: 'circlecontainer',
  });

  useEffect(() => {
    setCircleClasses({
      circle1: classNames('circlecontainer', { 'current': step === '1' }),
      circle2: classNames('circlecontainer', { 'current': step === '2' }),
      circle3: classNames('circlecontainer', { 'current': step === '3' }),
    });
  }, [step]);
      

  return (
    <div className='navigation_container'>
      <div className='step'>Step {step} of 3</div>
      <div className='circles'>
      <div className={circleClasses.circle1}>
            <div className='circle'>
                <div className='innercircle'></div>
      </div>
      </div>
    
        <div className={circleClasses.circle2}>
            <div className='circle'>
                <div className='innercircle'></div>
                </div>
        </div>
      
        <div className={circleClasses.circle3}>
            <div className='circle'>
                <div className='innercircle'></div>
                </div>
        </div>
    </div>
      </div>
  
  )
}

export default navigation