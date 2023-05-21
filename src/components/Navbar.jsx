import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaLeaf } from "react-icons/fa";
import { BsFillPersonLinesFill, BsMailbox } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  function handleClick() {
    setNavigation(!navigation);
  }
  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-4 bg-gray-900 text-gray-300">
      <div>
        <Link to="/">
          {" "}
          <img src={Logo} alt="Logo" style={{ width: "35px" }} />
        </Link>
      </div>
      {/*main navigation*/}

      <ul className="md:flex hidden text-[#fdfffc]">
        <li className="hover:text-red-500 transition duration-300 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-red-500 transition duration-300 ease-in-out">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-red-500 transition duration-300 ease-in-out">
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a
            className="hover:text-red-500 transition duration-300 ease-in-out flex justify-between items-center w-full"
            href="https://www.linkedin.com/in/brendancmechatronics"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaLinkedin size={20} />
          </a>
        </li>
        <li>
          <a
            className="hover:text-red-500 transition duration-300 ease-in-out flex justify-between items-center w-full"
            href="mailto:brendancmechatronics@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <HiOutlineMail size={20} />
          </a>
        </li>
        <li>
          <a
            className="hover:text-red-500 transition duration-300 ease-in-out flex justify-between items-center w-full"
            href="https://github.com/BChharaw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithub size={20} />
          </a>
        </li>
      </ul>

      {/*mobile open navigation*/}
      <div onClick={handleClick} className="md:hidden z-30 pr-[5px]">
        {!navigation ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile navigation*/}
      <ul
        className={
          !navigation
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#011627] flex flex-col justify-center items-center z-20"
        }
      >
        <div></div>
        <li className="hover:text-[#D45550] text-4xl p-[15px]">
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#D45550] text-4xl p-[15px]">
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="hover:text-[#D45550] text-4xl p-[15px]">
          <Link to="/projects" onClick={handleClick}>
            Projects
          </Link>
        </li>
        <li className="hover:text-[#D45550] text-4xl p-[15px] pb-[50px]"></li>
        <div className="flex">
          <li>
            <a
              className="hover:text-[#D45550] flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/brendancmechatronics"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedin size={40} />
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#D45550] flex justify-between items-center w-full"
              href="mailto:brendancmechatronics@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <HiOutlineMail size={40} />
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#D45550] flex justify-between items-center w-full"
              href="https://github.com/BChharaw"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaGithub size={40} />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
