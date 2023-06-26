import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import TasksContext from "./context/Tasks";
import Header from "./components/Header";
// import Form from "./components/Form";

const App = () => {
  const { fetchTodos } = useContext(TasksContext);
  useEffect(()=>{
    fetchTodos()
  },[])

  return (
    <>
      <div className="bg-[url(./assets/images/bg-desktop-dark.jpg)] bg-cover h-56 lg:h-[16rem] relative  "></div>
      <Header title="todo" />
    </>
  );
};

export default App;
