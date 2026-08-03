import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText.trim() !== '') {
      setListTodo([...listTodo, inputText]);
    }
  };

  let deleteList = (key) => {
    let newList = [...listTodo];
    newList.splice(key, 1);
    setListTodo(newList);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">TODO</h1>
        <hr />
        <TodoInput addList={addList} />
        
        {listTodo.length === 0 ? (
          <p className="no-tasks">No tasks found!</p>
        ) : (
          listTodo.map((listItem, i) => (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteList}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;