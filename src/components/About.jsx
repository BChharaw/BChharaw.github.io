import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import gantrybackground from "../assets/gantrybackground.png";

const About = () => {
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
      className="bg-gray-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20 min-h-screen"
      style={{ backgroundImage: `url(${gantrybackground})` }}
    >
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mt-5">
            About Me
          </h1>
          <div className="max-w-md mx-auto mt-6">
            <p className="text-base">
              I'm Brendan, a Mechatronics Engineering student from the University of Waterloo. <br /><br />My main expertise lies in machine learning and computer vision development using Python and libraries such as TensorFlow, PyTorch, OpenCV, and Isaac Gym. I have also delved into embedded development with C/C++, front-end technologies like React, JavaScript, HTML/CSS, and CAD design using Fusion360, SolidWorks, and AutoCAD.
            </p>
            <p className="text-base mt-4">
              Contact me at <a className="text-blue-500 font-bold" href="mailto:brendancmechatronics@gmail.com">brendancmechatronics@gmail.com</a>.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/experience">
                <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center">
                  My Experience
                  <HiArrowNarrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
