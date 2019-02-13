import React from 'react';

const TodoItem = ({ todo, index, completeTodo, removeTodo }) => (
  <div
    className="todo"
    style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
  >
    {todo.text}

    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  </div>
);

export default TodoItem;
