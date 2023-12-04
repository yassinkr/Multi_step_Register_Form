import React from 'react';
import { useState ,useReducer} from 'react';
import FirstStep from './components/first_step';
import SecondStep from './components/second_step';
import ThirdStep from './components/third_step';

import './App.css';

const initialState = {
  name: '',
  Email: '',
  softwear:'',
  uiux:'',
  graphic:''
  // other fields...
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const App = () => {
  const [registerstep,setregisterstep]=useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateField = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };
  const incstep = () => {
    const step = (registerstep % 3) + 1;
  
    if (step === 3) {
      if (state.Email && state.name && (state.softwear || state.uiux || state.graphic)) {
        setregisterstep((prevStep) => {
          console.log('Setting registerstep to:', step);
          return step;
        });
      } else {
        setregisterstep((prevStep) => {
          console.log('Setting registerstep back to 2');
          return 2;
        });
      }
    } else {
      if (step === 2 && state.Email && state.name) {
        setregisterstep((prevStep) => {
          console.log('Setting registerstep to:', step);
          return step;
        });
      }
    }
  };
  
 

  return (
    
     <div>
       {registerstep === 1 && <FirstStep onClick={incstep} onChangeName={(value) => updateField('name', value)} onChangeEmail={(value) => updateField('Email', value)}/>}
       {registerstep === 2 && <SecondStep onClick={incstep}onChangeSf={(value) => updateField('softwear', value)} onChangeUIUX={(value) => updateField('uiux', value)} onChangeGD={(value) => updateField('graphic', value)}/>}
       {registerstep === 3 &&  <ThirdStep onClick={incstep} name={state.name} email={state.Email} softwear={state.softwear} uiux={state.uiux} graphics={state.graphic}/>}
        </div>
      
    
  );
}

export default App;
