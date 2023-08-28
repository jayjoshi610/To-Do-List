import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, updateItem] = useState("");

  const [listItems, setListItems] = useState([]);


  function handleChange(event) {
    const newItem = event.target.value;
    
    updateItem(newItem);
    
  }

  function addButton() {
    if(item !== "")
    {
      setListItems((prevValue) => {
        return [...prevValue, item];
      });
    }
    else
      alert("Task cant be Empty!!");
    updateItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="item"
          placeholder="Add a task"
          value={item}
        />
        <button onClick={addButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{listItems.map(todoitem => (
          <ToDoItem text={todoitem} />
        ))}</ul>
      </div>
    </div>
  );
}

export default App;
