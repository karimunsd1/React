import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './ToDoList'
import { use } from 'react'


function App() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk a dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {                          //Updates newTask state with input value
    setNewTask(event.target.value)
  }
  function addTask() {
    if (newTask.trim() !== "")
      setTasks(tasks => [...tasks, newTask]);                    //adds task
    setNewTask("");                                          //resets the input field
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);    //This creates a new array by filtering out the task at the given index
    setTasks(updatedTasks);                                              //re-render with the updated list of tasks
  }                   

 function moveTaskUp(index) {
  if (index > 0) {
    const updatedTasks = [...tasks];
    const temp = updatedTasks[index];
    updatedTasks[index] = updatedTasks[index - 1];
    updatedTasks[index - 1] = temp;
    setTasks(updatedTasks);
  }
}

function moveTaskDown(index) {
  if (index < tasks.length - 1) {
    const updatedTasks = [...tasks];
    const temp = updatedTasks[index];
    updatedTasks[index] = updatedTasks[index + 1];
    updatedTasks[index + 1] = temp;
    setTasks(updatedTasks);
  }
}


  return (<div className='to-do-list'>
    <h1>To-Do-List</h1>
    <div >
      <input type='text' placeholder='enter a task' value={newTask} onChange={handleInputChange} />
    <button className='add-button' onClick={addTask}>Add</button>
    </div>
    <ol>{tasks.map((task, index) =>
      <li key={index}>
        <span className='text'>{task}</span>
        <button
          className='delete-button'
          onClick={() => deleteTask(index)}>
          Delete
        </button>
        <button className='move-button'
          onClick={() => moveTaskUp(index)}>
          👆
          </button>
        <button className='move-button'
          onClick={() => moveTaskDown(index)}>
          👇
          </button>
      </li>)}</ol>
  </div>);
}
export default App
