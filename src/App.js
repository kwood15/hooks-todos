import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoItem from './components/Todo/TodoItem';
import TodoForm from './components/Todo/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const url = '/api/todos';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error(error));
  }, []);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newTodos)
    }).catch(error => console.error(error));
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    fetch(url, {
      method: 'DELETE'
    }).catch(error => console.error(error));
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(newTodos)
    }).catch(error => console.error(error));
  };

  return (
    <div className="app">
      <Header />
      <h1>View Todos:</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
