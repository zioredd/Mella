import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import logoimg from "../images/logo.png";
import logo from "../../public/hoobank.svg";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <style>
        {`
        .navbar li {
          position: relative;
        }
        
        .navbar .dot {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #F6C90E;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .navbar li:hover .dot {
          opacity: 1;
        }
        
        /* Add animations to the navigation items */
        .navbar li {
          transition: transform 0.3s ease;
        }
        
        .navbar li:hover {
          transform: translateY(-5px);
        }
      `}
      </style>

      <img className="nav__logo" src={logo} />
      <h1 className="text-[1rem] sm:text-[2rem] text-white ml-[0.5rem] md:ml-[1rem]">
        Mella
      </h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer lgg:text-[25px] text-[15px] hover:text-white ${
              active === nav.title
                ? "text-white font-bold"
                : "text-white font-bold"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
            onMouseEnter={() => handleMouseEnter(nav.title)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            {hoveredItem === nav.title && <div className="dot" />}
          </li>
        ))}
      </ul>

      <div className="nav__menu sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[10px] h-[10px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`nav__items font-poppins font-medium cursor-pointer text-[16px] lgg:text-[20px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
