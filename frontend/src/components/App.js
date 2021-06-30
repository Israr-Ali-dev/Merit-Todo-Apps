import React, { useState } from 'react';
import ToDoItem from './ToDoItems';
import { createList } from '../apiCore';

function App() {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setTask(newValue);
  }

  function addTask(list) {
    console.log(task);
    createList(task).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.data);
        setItems((prevValues) => {
          return [...prevValues, data.data];
        });
        setTask('');
      }
    });
    // setItems((prevValues) => {
    //   return [...prevValues, task];
    // });
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>Merit ToDo App</h1>
      </div>
      <div className='form'>
        <input
          name='taskInput'
          type='text'
          onChange={handleChange}
          value={task}
        />
        <button
          onClick={(e) => {
            addTask(e.target.value);
          }}>
          <span>ADD</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem key={index} text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
