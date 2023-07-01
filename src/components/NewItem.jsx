import React, { useContext, useState } from "react";
import TasksContext from "../context/Tasks";

const NewItem = ({ task }) => {
  const { deleteTodo, handleDone } = useContext(TasksContext);

  //DELETE A TASK
  const handleDelete = () => {
    deleteTodo(task.id);
  };

  return (
    <div className="border-b border-darkTheme-lightGrayishBlueDark dark:border-darkTheme-veryDarkGrayishBluedk no-border flex w-full justify-between items-center ">
      <label className="flex relative pointer items-center p-4">
        {" "}
        <input
          type="checkbox"
          className={`check ${task.check ? "checked" : ""}`}
          value={task.check}
          onChange={() => handleDone(task.id, task.check, task.newTask)}
        />
        <p
          className={` text-darkTheme-veryDarkGrayishBluedk dark:text-darkTheme-lightGrayishBlueDark font-[700] ${
            task.check
              ? "line-through text-lightTheme-darkGrayishBlue font-[500] dark:font-[400]"
              : ""
          }`}
        >
          {task.newTask}
        </p>
      </label>

      <span className="p-4 cursor-pointer" onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </span>
    </div>
  );
};

export default NewItem;
