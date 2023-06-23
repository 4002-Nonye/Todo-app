import React, { useContext,useState } from "react";
import NewItem from "./NewItem";
import TasksContext from "../context/Tasks";

const Card = () => {
  const { tasks} = useContext(TasksContext);
  


  return (
    <div className="bg-darkTheme-veryDarkDesaturatedBlue mt-4 rounded-md max-w-[20rem] md:max-w-[30rem] ">
      <div className="max-h-[15rem] overflow-scroll cursor-grab no-scrollbar ">
        {" "}
        {
          tasks.map((task, index) => {
            return (
          <NewItem  key={index} task={task} index={index} />
              
            );
          })}
      </div>
      <div className="flex justify-between p-4 pt-5 text-darkTheme-veryDarkGrayishBluedk font-[700] text-sm">
        <p>{tasks.length} item(s) left</p>
        <p className="cursor-pointer">Clear Completed</p>
      </div>
    </div>
  );
};

export default Card;
