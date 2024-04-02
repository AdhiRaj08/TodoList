import React from 'react';
import '../App.css';

//Component for changing the status on buttons
function TaskBtn(props) {

  return (
    <button className='btn' style={{ color: "white", fontSize: "15px" }} onClick={props.click}>
        {props.name}
    </button>
  );
}

export default TaskBtn;
