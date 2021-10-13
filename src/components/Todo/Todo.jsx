import React from 'react';
import './Todo.css';

export function Todo(props) {
  return (
    <div className='todoContainer'>
      <p className='todoText'>{props.title}</p>
    </div>
  )
};

export default Todo;