import React from 'react';
import TaskBtn from './TaskBtn';
import '../App.css';

function Card(props) {
  // Render the Card component
  return (
    <div className='Card' style={{ backgroundColor: props.complete === true && 'gray', color: props.complete === true && 'white' }}>
      {/* Display task title */}
      <h3> {props.title} </h3>
      
      {/* Display task description */}
      <p> {props.des} </p>
      
      {/* Button section */}
      <div>
        {/* Button to mark task as complete */}
        <TaskBtn color='white' bg='#1877F2' name='Complete' click={props.update} />
        
        {/* Button to delete task */}
        <TaskBtn color='white' bg='red' name='Delete' click={props.delete} />
      </div>
    </div>
  );
}

export default Card;
