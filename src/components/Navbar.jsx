import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const tailwindStyles = {
  navbar: "fixed w-full h-16 flex justify-between items-center px-4 bg-black text-white shadow-md z-[1] transition-all duration-300 ease-in-out border-b-2 border-white",
  logo: "text-2xl font-bold ml-2 hover:text-blue-400 transform duration-300 ease-in-out",
  navItem: "text-lg font-medium hover:text-blue-400 transition-colors duration-300 ease-in-out relative before:absolute before:inset-0 before:bg-gray-800 before:opacity-0 before:scale-x-0 before:scale-y-0 before:transform origin-right duration-300 ease-in-out",
  navIcon: "text-xl hover:text-blue-400 transition-colors duration-300 ease-in-out",
  mobileNavButton: "md:hidden z-30 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 ease-in-out",
  mobileNavOverlay: "fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-20 bg-black bg-opacity-90 transform transition-all duration-300 ease-in-out",
  mobileNavLinks: "text-center",
  desktopNavItems: "md:flex hidden space-x-6 mt-1 leading-none", 
  mobileNavIcon: "hover:text-blue-400 transition-colors duration-300 ease-in-out text-2xl py-2 px-3 inline-block mr-4",
};
const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  function handleClick() {
    setNavigation(!navigation);
  }

  return (
    <nav className={tailwindStyles.navbar}>
      <div className="flex items-center">
        <Link to="/">
          <h1 className={tailwindStyles.logo}>Brendan C</h1>
        </Link>
      </div>

      <ul className={tailwindStyles.desktopNavItems}>
        <li>
          <Link to="/" className={tailwindStyles.navItem}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={tailwindStyles.navItem}>About</Link>
        </li>
        <li>
          <Link to="/experience" className={tailwindStyles.navItem}>Experience</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brendancmechatronics" target="_blank" rel="noopener noreferrer" className={tailwindStyles.navIcon}>
            <FaLinkedin className="inline-block text-xl" />
          </a>
        </li>
        <li>
          <a href="mailto:brendancmechatronics@gmail.com" target="_blank" rel="noopener noreferrer" className={tailwindStyles.navIcon}>
            <FaEnvelope className="inline-block text-xl" />
          </a>
        </li>
        <li>
          <a href="https://github.com/BChharaw" target="_blank" rel="noopener noreferrer" className={tailwindStyles.navIcon}>
            <FaGithub className="inline-block text-xl" />
          </a>
        </li>
      </ul>

      <div onClick={handleClick} className={tailwindStyles.mobileNavButton}>
        {!navigation ? <FaBars className="text-2xl" /> : <FaTimes className="text-2xl" />}
      </div>

      <div className={!navigation ? "hidden" : tailwindStyles.mobileNavOverlay}>
        <div className={tailwindStyles.mobileNavLinks}>
          <p className={tailwindStyles.mobileNavIcon}>
            <Link to="/" onClick={handleClick}>Home</Link>
          </p>
          <p className={tailwindStyles.mobileNavIcon}>
            <Link to="/about" onClick={handleClick}>About</Link>
          </p>
          <p className={tailwindStyles.mobileNavIcon}>
            <Link to="/experience" onClick={handleClick}>Experience</Link>
          </p>
        </div>
        <div className="justify-center text-center flex mt-6">
          <a href="https://www.linkedin.com/in/brendancmechatronics" target="_blank" rel="noopener noreferrer" onClick={handleClick} className={tailwindStyles.mobileNavIcon}>
            <FaLinkedin className="inline-block text-3xl" />
          </a>
          <a href="mailto:brendancmechatronics@gmail.com" target="_blank" rel="noopener noreferrer" onClick={handleClick} className={tailwindStyles.mobileNavIcon}>
            <FaEnvelope className="inline-block text-3xl" />
          </a>
          <a href="https://github.com/BChharaw" target="_blank" rel="noopener noreferrer" onClick={handleClick} className={tailwindStyles.mobileNavIcon}>
            <FaGithub className="inline-block text-3xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
