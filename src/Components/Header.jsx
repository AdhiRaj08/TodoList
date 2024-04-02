import React from 'react';
import TaskBtn from './TaskBtn';
import '../App.css';

function Header(props) {
  // Render the Header component
  return (
    <>
      {/* Header section */}
      <div className='header'>
        {/* Title */}
        <h1> Task Board </h1>
        
        {/* User logo */}
        <div>
          <img src={require('../user_logo.png')} alt="user_logo" style={{ borderRadius: '14px', height: '2em' }} />
        </div>
      </div>
      
      {/* Section for adding new task */}
      <section>
        {/* Button to toggle input fields */}
        <TaskBtn click={props.handleInput} name='Add New Task!!' bg='#1877F2' color='white'></TaskBtn>
      </section>
    </>
  )
}

export default Header;
