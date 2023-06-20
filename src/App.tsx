import { useState, Fragment } from 'react';
import './App.css';

function App() {
  const defaultTasks = [
    {
      id: 1,
      name: 'Go Shopping',
    },
    {
      id: 2,
      name: 'Eat fruits',
    },
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  const [newTask, setNewTask] = useState('');

  function addTask() {
    if (newTask === '') return;

    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const tasksClone = [...tasks];
    tasksClone.push({ id: newId, name: newTask });
    setNewTask('');
    setTasks(tasksClone);
  }

  function deleteTask(targetId: number) {
    const tasksClone = tasks.filter((task) => task.id !== targetId);
    setTasks(tasksClone);
  }

  return (
    <Fragment>
      <h1 className='text-4xl text-center mt-4 font-semibold'>TODO LIST APP</h1>
      <div className='mx-auto mt-4 text-center'>
        <div className='flex justify-center gap-2'>
          <button
            onClick={addTask}
            className='border-4 border-red-600 bg-red-500 text-white font-bold p-2 rounded-md hover:opacity-50'
          >
            Add Task
          </button>
          <input
            type='text'
            className='border-2 p-2'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className='border-2 w-52 mx-auto my-3 flex justify-between rounded-sm'
          >
            <p className='ps-1'>{task.name}</p>
            <div
              onClick={() => deleteTask(task.id)}
              className='h-max p-4 font-bold bg-red-400 hover:opacity-50 cursor-pointer'
            >
              X
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
