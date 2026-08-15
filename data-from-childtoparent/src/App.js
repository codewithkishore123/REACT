import { useState } from 'react';
import './App.css';
import Search from './Search';

function App() {
  const [todoList, setTodoList] = useState(['Learn React', 'Practice JavaScript']);

  const addTodo = (task) => {
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    setTodoList((prevList) => [...prevList, trimmedTask]);
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <Search onAddTodo={addTodo} />

      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li key={`${todo}-${index}`} className="todo-item">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
