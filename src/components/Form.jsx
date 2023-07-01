import React, { useContext, useState } from "react";
import TasksContext from "../context/Tasks";
import Card from "./Card";
import Filter from "./Filter";

const Form = () => {
  const { setTodo, todo, onInputChange, createNewTodo } =
    useContext(TasksContext);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!todo) return;

    createNewTodo(todo, false);
    setTodo("");
  };

  return (
    <>
      <form className="text-white mt-9 " onSubmit={onFormSubmit} action="#">
        <div className="flex relative">
          <div className="w-[20px] h-[20px] absolute ml-[14px] rounded-full border-2 border-lightTheme-darkGrayishBlue dark:border-darkTheme-veryDarkGrayishBluedk self-center"></div>
          <input
            className="p-3 pl-10 w-[20rem] md:w-[30rem] text-darkTheme-veryDarkBlue dark:text-darkTheme-lightGrayishBlueDark bg-lightTheme-veryLightGrayishBlue dark:bg-darkTheme-veryDarkDesaturatedBlue rounded-md outline-none text-md md:text-lg md:h-[3.5rem] caret-brightBlue"
            placeholder="Create a new todo..."
            value={todo}
            onChange={onInputChange}
          />
        </div>
      </form>
      <Card task={todo} />

      <Filter />
    </>
  );
};

export default Form;
