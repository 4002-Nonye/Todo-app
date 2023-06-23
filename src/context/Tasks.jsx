import React, { useState, createContext } from "react";
import axios from "axios";
const TasksContext = createContext();

function Provider({ children }) {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isDone, setIsDone] = useState(false);
 

  //PERSIST DATA

  const fetchTodos = async ()=>{
    const response = await axios.get(" http://localhost:3001/todos")
    setTasks(response.data)
  }

  //TO CREATE A NEW TASK
  const createNewTodo = async (newTask,check) => {
    const response = await axios.post(" http://localhost:3001/todos", {
      newTask,check
    });
    const updatedTasks = [...tasks, response.data];
    setTasks(updatedTasks);
  };

  //DELETE A TASK
  const deleteTodo=async(id)=>{
    //RECEIVE AN ID FROM THE NEW ITEM COMPONENT AND DELETE THE TASK
  
    const response = await axios.delete(`http://localhost:3001/todos/${id}`)
  

   const updatedTasks = tasks.filter((task) => {
    
     return task.id !== id;
    }); 
    setTasks(updatedTasks);
    
  }
  const onInputChange = (e) => {
    setTodo(e.target.value);
  };

 

  const value = { todo, setTodo, tasks, onInputChange,fetchTodos,createNewTodo,setTasks ,deleteTodo,isDone};
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
