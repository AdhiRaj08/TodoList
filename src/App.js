import './App.css';
import TaskBtn from './Components/TaskBtn';
import TaskInput from './Components/TaskInput';
import Header from './Components/Header';
import Card from './Components/Card';
import { useState, useEffect } from 'react';

function App() {
  const [add, setAdd] = useState(false);
  const [Tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [Task, setTask] = useState('');
  const [Des, setDes] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(Tasks));
  }, [Tasks]);
  
  const updateTask = (id) => {
    setTasks(
      Tasks.map((t) => ((t.id === id ? {...t, complete:true} : t )))
    )
  }

  const delTask = (id) => {
    setTasks(Tasks.filter((t) => (t.id === id) ? false : true));
  }

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

  const ClearInput = () => {
    setTask('');
    setDes('');
  };

  const handleTask = (event) => {
    setTask(event.target.value);
  };

  const handleDes = (event) => {
    setDes(event.target.value);
  };

  const handleInput = () => {
    setAdd(!add);
  };

  return (
    <div className='main'>
      <div className='inputsection'>
        <Header handleInput = {handleInput} />
        {add === true ? 
          <>
            <TaskInput value = {Task} placeholder = 'Enter Task' name = 'Task' change = {handleTask} />
            <TaskInput value = {Des} placeholder = 'Enter Description' name = 'Description' change = {handleDes} />
            <div className='btnSection'>
              <TaskBtn color = 'white' bg = '#1877F2' name = 'Save Task' click={() => addTask(Task, Des)} />
              <TaskBtn color = 'white' bg = 'red' name = 'Cancel' click = {ClearInput} />
            </div>
          </> : null
        }
      </div>
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


