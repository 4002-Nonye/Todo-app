import React, { useContext, useState } from "react";
import TasksContext from "../context/Tasks";
import Card from "./Card";
import Filter from "./Filter";

const Form = () => {
  const { setTodo, todo, tasks, onInputChange, createNewTodo,isDone } =
    useContext(TasksContext);
 
  const onFormSubmit = (e) => {
    e.preventDefault();

    createNewTodo(todo, isDone);
    setTodo("");
  };

  return (
    <form className="text-white mt-9 " onSubmit={onFormSubmit}>
      <div className="flex relative">
        <div className="w-[18px] h-[18px] absolute ml-[14px] rounded-full border-2 border-darkTheme-veryDarkGrayishBluedk self-center"></div>
        <input
          className="p-3 pl-10 w-[20rem] md:w-[30rem] text-darkTheme-lightGrayishBlueDark bg-darkTheme-veryDarkDesaturatedBlue rounded-md outline-none text-md md:text-lg md:h-[3.5rem] caret-brightBlue"
          placeholder="Create a new todo..."
          value={todo}
          onChange={onInputChange}
        />
      </div>

      <Card task={todo} />

      <Filter />
    </form>
  );
};

export default Form;
