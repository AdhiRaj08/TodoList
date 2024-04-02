import React from 'react';
import TaskBtn from './TaskBtn';
import '../App.css';

function Card (props) {
  return (
    <div className='Card' style = {{backgroundColor:props.complete === true && 'gray', color:props.complete === true && 'white'}}>
        <h3> {props.title} </h3>
        <p> {props.des} </p>
        <div>
          <TaskBtn color = 'white' bg = '#1877F2' name = 'Complete' click = {props.update} />
          <TaskBtn color = 'white' bg = 'red' name = 'Delete' click = {props.delete} />
        </div>
    </div>
  );
}

export default Card;