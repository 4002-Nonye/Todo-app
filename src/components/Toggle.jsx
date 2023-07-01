import React, { useEffect, useState,useContext } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import TasksContext from "../context/Tasks";


const Toggle = () => {
    const {handleTheme,theme}=useContext(TasksContext)
  
  return (
    <>
      <div
        className="text-white md:text-[1.5rem] text-[1rem] cursor-pointer"
        onClick={handleTheme}
      >
        {theme==='dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
    </>
  );
};

export default Toggle;
