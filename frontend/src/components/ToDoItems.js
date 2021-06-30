import React from 'react';

function ToDoItem(props) {
  return (
    <div>
      <li>{props.text.description}</li>
    </div>
  );
}

export default ToDoItem;
