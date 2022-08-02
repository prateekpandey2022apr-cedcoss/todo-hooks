import React from "react";

function TodoList({
  btnText,
  setBtnText,
  editId,
  setEditId,
  inputText,
  setInputText,
  id,
  status,
  tasks,
  setTasks,
}) {
  console.log(tasks);

  // debugger;

  const checked = status == "complete" ? true : false;

  const task_filtered = tasks.filter((task) => {
    return task.status === status;
  });

  function findTask(taskId) {
    return tasks.find((task) => {
      return task.id == taskId;
    });
  }

  function markTaskCompleted(task_id) {
    // debugger;
    setTasks(
      tasks.map((task) => {
        if (task.id == task_id) {
          task.status = "complete";
          return task;
        }
        return task;
      })
    );
  }

  function markTaskIncompleted(task_id) {
    // debugger;
    setTasks(
      tasks.map((task) => {
        if (task.id == task_id) {
          task.status = "incomplete";
          return task;
        }
        return task;
      })
    );
  }

  function deleteTask(taskId) {
    setTasks(
      tasks.filter((task) => {
        if (task.id != taskId) {
          return task;
        }
      })
    );
  }

  function editTask() {}

  function handleCheckboxChange(event) {
    console.log(event.target.parentElement.getAttribute("id"));

    const where = event.target.closest("ul").getAttribute("id");
    let checked = event.target.checked;
    let taskId = event.target.parentElement.getAttribute("id");

    if (where === "completed-tasks" && checked === false) {
      // move the task to incomplete
      markTaskIncompleted(taskId);
    } else {
      markTaskCompleted(taskId);
    }
  }

  function handleDeleteClick(event) {
    // debugger;
    let taskId = event.currentTarget.parentElement.getAttribute("id");
    console.log(taskId);
    deleteTask(taskId);
  }

  function handleEditClick(event) {
    // debugger;
    console.log("edit");
    let taskId = event.currentTarget.parentElement.getAttribute("id");
    // let taskId = event.target.closest("li").getAttribute("id");
    console.log(taskId);
    let task = findTask(taskId);
    console.log(task);

    setEditId(task.id);
    setInputText(task.text);
    setBtnText("Update");
    window.scrollTo(0, 0);
  }

  console.log({ task_filtered });

  return (
    <ul id={id}>
      {task_filtered.map((task) => (
        <li key={task.id} id={task.id}>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={checked}
          />
          <label>{task.text}</label>
          <input type="text" />
          <button className="edit btn btn-primary " onClick={handleEditClick}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button
            className="delete btn btn-danger "
            onClick={handleDeleteClick}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
