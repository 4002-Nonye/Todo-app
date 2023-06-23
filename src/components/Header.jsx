import React from "react";
import Form from "./Form";
import { BsFillSunFill } from "react-icons/bs";
// import bgDark from 'sr/assets/images/bg-desktop-dark.jpg'

const Header = ({ title }) => {
  return (
    <div className="absolute top-16 m-auto w-full flex flex-col  items-center">
    <header className="flex flex-col" >

      <div className="flex justify-between items-center">
        <h1 className="text-white uppercase tracking-[1rem] md:text-[3rem] text-[2rem] font-[700]">
          {title}
        </h1>
        <BsFillSunFill className="text-white md:text-[2rem] text-[1rem] cursor-pointer" />
      </div>
      <div>
        <Form />
      </div>
    </header>
    </div>
  );
};

export default Header;
