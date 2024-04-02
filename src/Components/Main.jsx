import '../App.css';
import TaskBtn from './TaskBtn';
import TaskInput from './TaskInput';
import Header from './Header';
import Card from './Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTasktoRedux, removeTask, updateTask } from '../Reducers';

function Main() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);
  const [add, setAdd] = useState(false);
  const [Task, setTask] = useState('');
  const [Des, setDes] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTask = (event) => {
    setTask(event.target.value);
  };

  const handleDes = (event) => {
    setDes(event.target.value);
  };

  const handleInput = () => {
    setAdd(!add);
  };


  const addTask = (Task, Des) => {
    const id = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
    const newTask = {
      id: id,
      task: Task,
      des: Des,
      complete: false,
    };
    dispatch(addTasktoRedux(newTask)); // Dispatch addTask action
    ClearInput();
  };


  const ClearInput = () => {
    setTask('');
    setDes('');
  };

  return (
    <div className='main'>
      <div className='inputsection'>
        <Header handleInput={handleInput} />
        {add === true ? (
          <>
            <TaskInput value={Task} placeholder='Enter Task' name='Task' change={handleTask} />
            <TaskInput value={Des} placeholder='Enter Description' name='Description' change={handleDes} />
            <div className='btnSection'>
              <TaskBtn color='white' bg='#1877F2' name='Save Task' click={() => addTask(Task, Des)} />
              <TaskBtn color='white' bg='red' name='Cancel' click={ClearInput} />
            </div>
          </>
        ) : null}
      </div>
      <div>
        {tasks.map((t) => (
          <Card
            title={t.task}
            des={t.des}
            key={t.id}
            delete={() => dispatch(removeTask(t.id))}
            update={() => dispatch(updateTask(t.id))}
            complete={t.complete}
          />
        ))}
      </div>
    </div>
  );
}


export default Main;