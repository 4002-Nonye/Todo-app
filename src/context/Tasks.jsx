import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
const TasksContext = createContext();

function Provider({ children }) {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const [theme, setTheme] = useState(getInitialTheme());

  //LIGHT AND DARK MODE

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    //first time loading application, if no theme in localStorage, set default to light
    return savedTheme ? savedTheme : "light";
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  //PERSIST DATA

  const fetchTodos = async () => {
    const response = await axios.get(" http://localhost:3001/todos");
    setTasks(response.data);
  };

  //TO CREATE A NEW TASK
  const createNewTodo = async (newTask, check) => {
    const response = await axios.post(" http://localhost:3001/todos", {
      newTask,
      check,
    });
    console.log(response.data);
    const updatedTasks = [...tasks, response.data];
    setTasks(updatedTasks);
  };

  //DELETE A TASK
  const deleteTodo = async (id) => {
    //RECEIVE AN ID FROM THE NEW ITEM COMPONENT AND DELETE THE TASK

    const response = await axios.delete(`http://localhost:3001/todos/${id}`);

    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };
  const onInputChange = (e) => {
    setTodo(e.target.value);
  };


  //MARK TASK AS COMPLETED

  const handleDone = async (id, check, newTask) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      newTask,
      check: !check,
    });
    // console.log(response.data);
    setTasks((task) =>
      task.map((t) => (t.id === id ? { ...t, ...response.data } : t))
    );
  };

  //   const handleCompleted =  () => {

  //   setSortedItem(tasks.slice().filter((task)=>task.check))

  //   console.log(sortedItems)

  //   };

  //   const handleActive=()=>{

  //  setSortedItem(tasks.slice().filter((task)=>!task.check))

  //   // console.log(sortedItems)

  //   }

  const value = {
    todo,
    setTodo,
    tasks,
    onInputChange,
    fetchTodos,
    createNewTodo,
    setTasks,
    deleteTodo,
    handleDone,

    theme,
    handleTheme,
  };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
