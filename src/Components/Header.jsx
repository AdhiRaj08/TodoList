import React from 'react';
import TaskBtn from './TaskBtn';
import '../App.css';

function Header (props) {
  return (
    <>
    <div className='header'>
        <h1> Task Board </h1>
        <div>
            <img src={require('../user_logo.png')} alt="user_logo" style = {{borderRadius:'14px', height:'2em'}}/>
        </div>
    </div>
    <section>
        <TaskBtn click = {props.handleInput} name = 'Add New Task!!' bg = '#1877F2' color = 'white'></TaskBtn>
    </section>
    </>
  )
}
export default Header;
