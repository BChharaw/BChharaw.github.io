import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  function handleClick() {
    setNavigation(!navigation);
  }

  return (
    <nav className="fixed w-full h-16 flex justify-between items-center px-4 bg-gray-900 text-white backdrop-filter backdrop-blur-lg bg-opacity-70">
      <div className="flex items-center">
        <Link to="/">
        <h1 className="text-xl font-bold ml-2">Brendan C</h1>


        </Link>
        
      </div>

      <ul className="md:flex hidden space-x-6">
        <li>
          <Link
            to="/"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Projects
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/brendancmechatronics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
          >
            <FaLinkedin className="inline-block text-xl" />
          </a>
        </li>
        <li>
          <a
            href="mailto:brendancmechatronics@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
          >
            <FaEnvelope className="inline-block text-xl" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/BChharaw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
          >
            <FaGithub className="inline-block text-xl" />
          </a>
        </li>
      </ul>

      <div
        onClick={handleClick}
        className="md:hidden z-30 p-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out"
      >
        {!navigation ? (
          <FaBars className="text-2xl" />
        ) : (
          <FaTimes className="text-2xl" />
        )}
      </div>

      <div
  className={
    !navigation
      ? "hidden"
      : "absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-20 backdrop-filter backdrop-blur-lg bg-opacity-95 bg-gray-900"
  }
>
  <div className="text-center">
    <p className="hover:text-blue-500 transition duration-300 ease-in-out text-2xl py-2">
      <Link to="/" onClick={handleClick}>
        Home
      </Link>
    </p>
    <p className="hover:text-blue-500 transition duration-300 ease-in-out text-2xl py-2">
      <Link to="/about" onClick={handleClick}>
        About
      </Link>
    </p>
    <p className="hover:text-blue-500 transition duration-300 ease-in-out text-2xl py-2">
      <Link to="/projects" onClick={handleClick}>
        Projects
      </Link>
    </p>
  
  <div className="justify-centre text-center flex">
    
    <p className="hover:text-blue-500 transition duration-300 ease-in-out text-2xl py-2 px-1 inline-block mr-4">
      <a
        href="https://www.linkedin.com/in/brendancmechatronics"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <FaLinkedin className="inline-block text-3xl" />
      </a>
    </p>
    <p className="hover:text-blue-500 transition duration-300 ease-in-out text-2xl py-2 px-2 inline-block mr-4">
      <a
        href="mailto:brendancmechatronics@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <FaEnvelope className="inline-block text-3xl" />
      </a>
    </p>
    <p className="hover:text-blue-500 transition duration-300 ease-in-out text-2xl py-2 inline-block mr-4">
      <a
        href="https://github.com/BChharaw"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <FaGithub className="inline-block text-3xl" />
      </a>
    </p>
    
  </div>
</div>
</div>


    </nav>
  );
};

export default Navbar;
