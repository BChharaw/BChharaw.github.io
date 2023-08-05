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
          <h1 className="text-4xl sm:text-6xl font-bold mt-5">
            About Me
          </h1><br></br>
          <div className="max-w-md mx-auto mt-6">
            <p className="text-base">
            I'm Brendan, a Mechatronics Engineering student from the University of Waterloo. <br></br><br></br>My main expertise lies in machine learning and computer vision development (Python) using libraries such as TensorFlow, PyTorch, OpenCV, and Isaac Gym. <br></br><br></br>I have also delved into embedded development (C/C++), front-end (React, JS, HTML/CSS), and CAD design (Fusion360, SolidWorks, AutoCAD).
            
            <br/><br/>Contact me at <a className="text-blue-500 font-bold" href="mailto:brendancmechatronics@gmail.com">brendancmechatronics@gmail.com</a>. <br/><br/>
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
