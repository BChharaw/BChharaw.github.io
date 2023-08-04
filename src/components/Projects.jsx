import React from "react";
import MyGoal from "../assets/mygoalisimg.png";
import UVCC from "../assets/outer-prototype.jpg";
import Car from "../assets/car-tracking.gif";
import Gantry from "../assets/keyboard-typer.gif";
import TFLRestimator from "../assets/CarEstimatorModel.png";
import { Link } from "react-router-dom";
import comingsoon from "../assets/comingsoon.jpg";
import torqueoptimizer from "../assets/torqueoptimizer.png";
import robot from "../assets/robot.png"
import speaker1image1 from "../assets/speaker1image1.jpg"
import speaker2image2 from "../assets/speaker2image2.jpg"
const Projects = () => {
  window.scrollTo(0, 0);
  return (
    
    <div className="bg-gray-900 min-h-screen py-20  bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('/static/media/mte100background.f28e2f8c5901c4760f85.png')" }}>
      
      <div className="container mx-auto max-w-7xl px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Link to="/experience/bipedal">
          <div className="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${robot})` }}
              alt="underconstruction"
            ></div>
            <div className="p-4">
              <h1 className="text-xl font-semibold text-white mb-2">Bipedal Walking Robot</h1>
              <p className="text-gray-400 mb-4">(C++, Python, and Fusion360)</p>
              
            </div>
          </div>
        </Link>
      <Link to="/experience/torqueoptimizer">
          <div className="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${torqueoptimizer})` }}
              alt="underconstruction"
            ></div>
            <div className="p-4">
              <h1 className="text-xl font-semibold text-white mb-2">Robotic Joint Optimizer</h1>
              <p className="text-gray-400 mb-4">(C++)</p>
              
            </div>
          </div>
        </Link>
       
        <Link to="/experience/carvalueestimator">
          <div className="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${TFLRestimator})` }}
              alt="demonstration of model working"
            ></div>
            <div className="p-4">
              <h1 className="text-xl font-semibold text-white mb-2">Car Value Estimator</h1>
              <p className="text-gray-400 mb-4">(TensorFlow in Python)</p>
              
            </div>
          </div>
        </Link>
        <Link to="/experience/2axisgantry">
          <div className="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${Gantry})` }}
              alt="Final term design project UW MTE100"
            ></div>
            <div className="p-4">
              <h1 className="text-xl font-semibold text-white mb-2">High Precision Gantry</h1>
              <p className="text-gray-400 mb-4">(C with RobotC library)</p>
           
            </div>
          </div>
        </Link>
        <Link to="/experience/cardetection">
          <div className="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${Car})` }}
              alt="our project for the University of Waterloo Toyota Innovation Hackathon"
            ></div>
            <div className="p-4">
              <h1 className="text-xl font-semibold text-white mb-2">Car Detection Algorithm</h1>
              <p className="text-gray-400 mb-4">(Machine Vision in C++)</p>
           
            </div>
          </div>
        </Link>
        <Link to="/experience/uvcclean">
          <div className="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${UVCC})` }}
              alt="photo of the outer completed prototype"
            ></div>
            <div className="p-4">
              <h1 className="text-xl font-semibold text-white mb-2">Water Disinfection System</h1>
              <p className="text-gray-400 mb-4">(JS, HTML/CSS, and C++)</p>
          
            </div>
          </div>
        </Link>
        <Link to="/experience/bluetoothspeakerversion2">
          <div className="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${speaker2image2})` }}
              alt="cover photo for 'today my goal is project"
            ></div>
            <div className="p-4">
              <h1 className="text-xl font-semibold text-white mb-2">Bluetooth Speaker (V.2)</h1>
              <p className="text-gray-400 mb-4">(Circuits, Fusion360, 3D Printing)</p>
            </div>
          </div>
        </Link>
        <Link to="/experience/goalfortheday">
          <div className="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${MyGoal})` }}
              alt="cover photo for 'today my goal is project"
            ></div>
            <div className="p-4">
              <h1 className="text-xl font-semibold text-white mb-2">Goal Tracker</h1>
              <p className="text-gray-400 mb-4">(JavaScript and HTML/CSS)</p>
        
            </div>
          </div>
        </Link>
        <Link to="/experience/bluetoothspeakerversion1">
          <div className="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{ backgroundImage: `url(${speaker1image1})` }}
              alt="cover photo for 'today my goal is project"
            ></div>
            <div className="p-4">
              <h1 className="text-xl font-semibold text-white mb-2">Bluetooth Speaker (V.1)</h1>
              <p className="text-gray-400 mb-4">(Circuits, SolidWorks, 3D printing)</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
