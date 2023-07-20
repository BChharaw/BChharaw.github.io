import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import gantrybackground from "../assets/gantrybackground.png";
const About = () => {
  return (
    <div
      className="bg-gray-900 text-white bg-cover bg-fixed bg-center h-screen"
      style={{ backgroundImage: "url('/static/media/gantrybackground.e08a45a1a3192102c97c.png')" }}
    >
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mt-4">
            About Me
          </h1><br></br>
          <h2 className="text-xl font-bold text-blue-500">If you believe in working towards a better tomorrow, I'd like to help make your ideas happen.</h2>
          <div className="max-w-md mx-auto mt-6">
            <p className="text-base">
            I'm Brendan, a Mechatronics Engineering student from the University of Waterloo. <br></br><br></br>My main expertise lies in C++ and Python, particularly in OpenCV and TensorFlow. Additionally, I have experience in front-end development (React, JS, HTML/CSS) and CAD design (Fusion360, SolidWorks, AutoCAD).
            
            <br/><br/>Contact me at <a className="text-blue-500 font-bold" href="mailto:brendancmechatronics@gmail.com">brendancmechatronics@gmail.com</a>. <br/><br/>
</p>          
<div className="mt-8 flex justify-center">
            <Link to="/projects">
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
