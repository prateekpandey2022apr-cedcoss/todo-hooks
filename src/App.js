import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(1);
  const [inputText, setInputText] = useState("");
  const [editId, setEditId] = useState(0);
  const [btnText, setBtnText] = useState("Add");

  return (
    <>
      <div className="container">
        <h2>TODO LIST</h2>
        <h3>Add Item</h3>

        <Form
          btnText={btnText}
          setBtnText={setBtnText}
          editId={editId}
          setEditId={setEditId}
          tasks={tasks}
          setTasks={setTasks}
          count={count}
          setCount={setCount}
          inputText={inputText}
          setInputText={setInputText}
        />

        <h3>Todo</h3>
        <TodoList
          btnText={btnText}
          setBtnText={setBtnText}
          editId={editId}
          setEditId={setEditId}
          inputText={inputText}
          setInputText={setInputText}
          id="incomplete-tasks"
          status="incomplete"
          tasks={tasks}
          setTasks={setTasks}
        />

        <h3>Completed</h3>
        <TodoList
          btnText={btnText}
          setBtnText={setBtnText}
          editId={editId}
          setEditId={setEditId}
          inputText={inputText}
          setInputText={setInputText}
          id="completed-tasks"
          status="complete"
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </>
  );
}

export default App;
