import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import torque from "../assets/torqueoptimizer.webp"
const ProjectsTorque = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-neutral-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Torque Optimizer
          </p>
          
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={torque}
            alt="image of final member lengths as suggested by the optimizer"
          />
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            Optimizes torque based on set criteria
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Locates minimal torque design using brute force optimization for any 3 axis robotic arm based on set criteria of where it needs to reach and the specified load. Developed alongside Samantha Chong.
          </p>
          
          <a href="https://github.com/BChharaw/TorqueOptimizer" target="_blank" rel="noopener noreferrer">
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
              View the code on GitHub
              <HiArrowNarrowRight className="ml-2" />
            </button>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default ProjectsTorque;
