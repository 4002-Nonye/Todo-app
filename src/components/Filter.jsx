import React, { useContext } from "react";
import TasksContext from "../context/Tasks";

const Filter = () => {
    const {fetchTodos}=useContext(TasksContext)
  
 
  return (
    <div className="flex w-full dark:bg-darkTheme-veryDarkDesaturatedBlue p-4 mt-4 bg-lightTheme-veryLightGrayishBlue">
      <div className="flex items-center justify-center w-full gap-4 text-darkTheme-darkGrayishBluedk dark:text-darkTheme-veryDarkGrayishBluedk font-[700] text-md ">
        <a className="hov " onClick={fetchTodos} >All</a>
        <a className="hov"  >Active</a>
        <a className="hov">Completed</a>
      </div>
    </div>
  );
};

export default Filter;
