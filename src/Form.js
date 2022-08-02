import React, { useState } from "react";

function Form({
  btnText,
  setBtnText,
  editId,
  setEditId,
  tasks,
  setTasks,
  count,
  setCount,
  inputText,
  setInputText,
}) {
  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function updateTask(taskId, text) {
    setTasks(
      tasks.map((task) => {
        if (task.id == taskId) {
          task.text = text;
          return task;
        }
        return task;
      })
    );
  }

  function handleSubmitClick(event) {
    event.preventDefault();

    if (!inputText) {
      // stop if the input is empty
      // console.log("input empty");
      return;
    }

    // debugger;

    if (editId) {
      // task being updated
      // console.log("la la la la ");
      updateTask(editId, inputText);
      setInputText("");
      setBtnText("Add");
      setEditId(0);
    } else {
      // new task is being added
      setTasks([
        ...tasks,
        { id: count, text: inputText, status: "incomplete" },
      ]);
      setInputText("");
      setCount(count + 1);
    }
  }

  return (
    <>
      <form>
        <input
          id="new-task"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          name="task"
          defaultrequired="value"
        />
        <button onClick={handleSubmitClick} className="btn btn-primary">
          {btnText}
        </button>
      </form>
    </>
  );
}

export default Form;
