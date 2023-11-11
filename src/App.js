import "./App.css";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
