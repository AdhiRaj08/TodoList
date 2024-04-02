// Importing necessary CSS and components
import './App.css';
import TaskBtn from './Components/TaskBtn';
import TaskInput from './Components/TaskInput';
import Header from './Components/Header';
import Card from './Components/Card';
import { useState, useEffect } from 'react';

function App() {
  // State variables for managing tasks and input fields
  const [add, setAdd] = useState(false);  // State for showing/hiding input fields
  const [Tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);  // State for storing tasks
  const [Task, setTask] = useState('');  // State for task input
  const [Des, setDes] = useState('');  // State for description input

  // Effect to update local storage whenever Tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(Tasks));
  }, [Tasks]);
  
  // Function to mark a task as complete
  const updateTask = (id) => {
    setTasks(
      Tasks.map((t) => ((t.id === id ? {...t, complete:true} : t )))
    )
  }

  // Function to delete a task
  const delTask = (id) => {
    setTasks(Tasks.filter((t) => (t.id === id) ? false : true));
  }

  // Function to add a new task
  const addTask = (Task, Des) => {
    const id = Tasks.length === 0 ? 1 : Tasks.length+1;
    const detail = {
      id: id,
      task: Task,
      des: Des,
      complete: false
    }
    setTasks(
      [...Tasks, detail]
    );
    ClearInput();
  };

  // Function to clear input fields
  const ClearInput = () => {
    setTask('');
    setDes('');
  };

  // Event handler for task input change
  const handleTask = (event) => {
    setTask(event.target.value);
  };

  // Event handler for description input change
  const handleDes = (event) => {
    setDes(event.target.value);
  };

  // Event handler for showing/hiding input fields
  const handleInput = () => {
    setAdd(!add);
  };

  // Render the App component
  return (
    <div className='main'>
      <div className='inputsection'>
        {/* Header component */}
        <Header handleInput = {handleInput} />
        
        {/* Conditional rendering for input fields */}
        {add === true ? 
          <>
            <TaskInput value = {Task} placeholder = 'Enter Task' name = 'Task' change = {handleTask} />
            <TaskInput value = {Des} placeholder = 'Enter Description' name = 'Description' change = {handleDes} />
            
            {/* Button section for updation and deletion*/}
            <div className='btnSection'>
              <TaskBtn color = 'white' bg = '#1877F2' name = 'Save Task' click={() => addTask(Task, Des)} />
              <TaskBtn color = 'white' bg = 'red' name = 'Cancel' click = {ClearInput} />
            </div>
          </> : null
        }
      </div>
      
      {/* Displaying tasks */}
      <div>
        {
          Tasks.map((t) => (
            <Card title = {t.task} des = {t.des} key = {t.id} delete = {() => delTask(t.id)} update = {() => updateTask(t.id)} complete = {t.complete} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
