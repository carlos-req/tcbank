import React from "react";
import Logo from "../Logo/Logo";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navBarList = ["Home", "About Us", "Prequalify"];

  return (
    <div className=" bg-white font-display">
      <nav className=" flex items-center justify-between my-4 px-10">
        <Logo />
        {/*Regular Nav*/}
        <ul className="flex items-center">
          {navBarList.map((navBarItem) => {
            return (
              <li key={navBarItem} className="mx-2 text-md">
                {navBarItem}
              </li>
            );
          })}
        </ul>
        <div>
          <a
            href="#"
            className=" mr-4 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Register
          </a>
          <a
            href="#"
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Log In
          </a>
        </div>

        {/*Hamburger*/}
        <div className="md: hidden z-10">{!nav ? <FaBars /> : <FaTimes />}</div>

        {/*Hamburger Menu*/}
      </nav>
    </div>
  );
};

export default NavBar;
