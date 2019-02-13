import React, { useState } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Testing out hooks 🦄', isCompleted: false },
    { text: 'Loving the new features', isCompleted: false },
    { text: "Let's build a great app", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header />
      <h1>View Todos:</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
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
