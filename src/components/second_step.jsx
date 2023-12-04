// second_step.jsx
import React, { useState, useEffect } from 'react';
import Checkbox from './check_btn.jsx';
import Button from './Button.jsx';
import Navigation from './navigation';
import './second_step.css';

const second_step = ({ onClick, onChangeSf,onChangeUIUX,onChangeGD }) => {
 

  return (
    <div className='Appcontainer'>
      <div className='firststepcontainer'>
        <form>
          <div className='text'>Which topics are you interested in?</div>
          <label className='row'>
            <Checkbox
              type={'checkbox'}
              name={'interest'}
              label={'Software Development'}
              value={'software-development'}
              onChange={(value) => onChangeSf(value)}
            />
          </label>
          <label className='row'>
            <Checkbox
              type={'checkbox'}
              name={'interest'}
              label={'User Experience'}
              value={'user-experience'}
              onChange={(value) =>{ onChangeUIUX(value)}}
            />
          </label>
          <label className='row'>
            <Checkbox
              type={'checkbox'}
              name={'interest'}
              label={'Graphic Design'}
              value={'graphic-design'}
              onChange={(value) => onChangeGD(value)}
            />
          </label>
          <Button label={'Continue'} onClick={onClick} />
        </form>
      </div>
      <Navigation step={'2'} />
      <div className='background_circle1'></div>
      <div className='background_circle2'></div>
    </div>
  );
};

export default second_step;
