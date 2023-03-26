import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navBarList = ["Home", "About Us", "Prequalify"];

  return (
    <div className=" bg-white w-full h-[80px] font-display font-normal">
      <nav className="flex items-center justify-between my-4 px-10">
        <Logo />

        {/*Regular Nav*/}
        <ul className=" hidden md:flex items-center">
          {navBarList.map((navBarItem) => {
            return (
              <li key={navBarItem} className="mx-2 text-md">
                {navBarItem}
              </li>
            );
          })}
        </ul>
        <div className="hidden md:block">
          <a
            href="#"
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Log In
          </a>
        </div>

        {/*Hamburger*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes className="text-slate-200" />}
        </div>

        {/*Hamburger Menu*/}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center text-center"
          }
        >
          <ul className>
            {navBarList.map((navBarItem) => {
              return (
                <li key={navBarItem} className=" text-slate-200 py-6 text-4xl ">
                  {navBarItem}
                </li>
              );
            })}
          </ul>
          <div className="my-3">
            <a
              href="#"
              className="mr-4 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-bold text-slate-50 shadow-sm hover:bg-slate-100 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              Register
            </a>
            <a
              href="#"
              className="rounded-md bg-slate-100 px-3.5 py-2.5 text-sm font-bold text-zinc-900 shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              Log In
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
