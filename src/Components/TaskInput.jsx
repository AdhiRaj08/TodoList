import React from 'react';
import '../App.css';

function TaskInput(props) {
  return (
    <div className='inputwrp'>
        <label> {props.name} </label>
        <input value = {props.value} className='inputForm' placeholder={props.placeholder} onChange = {props.change}/>
    </div>
  );
}

export default TaskInput;