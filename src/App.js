import { useState, useRef } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import uuidv4 from "uuid/dist/v4";

const App = () => {
  const taskRef = useRef(),
    dateRef = useRef(),
    checkRef = useRef();
  const [form, setForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "appt",
      day: "monday",
      reminder: false,
    },
  ]);
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (e) => {
    e.preventDefault();
    const inputRefName = taskRef.current.value;
    const inputRefDate = dateRef.current.value;
    const inputRefCheck = checkRef.current.checked;
    if (inputRefName.trim() === "") {
      alert("Please enter a task");
      return;
    } else if (inputRefDate.trim() === "") {
      alert("Please enter a date");
      return;
    } else {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          text: inputRefName,
          day: inputRefDate,
          reminder: inputRefCheck,
        },
      ]);
    }
    document.getElementById("myForm").reset();
  };

  const toggleForm = () => {
    if (form === true) setForm(false);
    else setForm(true);
  };

  return (
    <div className="container">
      <Header form={form} onToggle={toggleForm} text="Task Tracker"></Header>
      {form ? (
        <form id="myForm" className="add-form">
          <div className="form-control">
            <label>Task</label>
            <input ref={taskRef} type="text" placeholder="Add Task" />
          </div>
          <div className="form-control">
            <label>Day & Time</label>
            <input ref={dateRef} type="text" placeholder="Add Date" />
          </div>
          <input ref={checkRef} type="checkbox" />
          Set Reminder
          <input
            type="submit"
            value="Save Task"
            className="btn btn-block"
            onClick={addTask}
          />
        </form>
      ) : (
        ""
      )}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onClick={removeTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        <h3>No Tasks</h3>
      )}
    </div>
  );
};

export default App;
