import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import robotbackground from "../assets/robotbackground.webp";

const Content = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to handle page resize
    const handleResize = () => {
      // Update window width state
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for the "resize" event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when window width changes
    window.scrollTo(0, 0);
  }, [windowWidth]);

  return (
    <div
      className="bg-neutral-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20 min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${robotbackground})` }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl p-2 font-bold mt-4 text-white">Hi! I make ideas happen.</h1>
        <p className="text-lg p-2 max-w-md mx-auto mt-6">
          I'm currently working at{" "}
          <a
            target="_blank"
            className="text-blue-500 hover:underline "
            href="https://www.goodlabs.studio/"
          >
            GoodLabs Studio
          </a>{" "}
          as a Machine Learning and Robotics Developer where I'm heading the AI development for Robbie (shown in background)!
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/about">
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-neutral-900 hover:text-white duration-300 ease-in-out flex items-center">
              About me!
              <HiArrowNarrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;