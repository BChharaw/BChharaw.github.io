import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import gantrymotion from '../assets/gantrymotion.mp4';
import gantry from '../assets/frontgantry.jpg';

const ProjectsGantry = () => {
  return (
    <div className="bg-gray-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Keyboard Typing Gantry
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            C using RobotC library
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            For our final MTE 100 design course, three classmates and I designed a high precision 2-axis gantry designed to type on a keyboard.
            Using an array of sensors to interact with the environment, it could send SMS texts (by navigating the TextNow desktop interface) with a couple of extra easter eggs thrown in too! 🐣🐰
            The final prototype could accurately actuate any desired key on the keyboard with a precision of +/- 5mm once calibrated!
          </p>
          <div className="mt-8 mx-auto max-w-lg">
            <video className="w-full p-[5px] rounded-2xl" controls>
              <source src={gantrymotion} type="video/mp4" />
            </video>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="https://github.com/BChharaw/HighPrecisionGantry" target="_blank" rel="noopener noreferrer">
              <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center">
                View the code on GitHub
                <HiArrowNarrowRight className="ml-2" />
              </button>
            </a>
          </div>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            This is what the final version of our prototype looked like, with the sensor array being shown to the left and right of the EV3 brick.
          </p>
          <img className="max-w-full mx-auto mt-8 rounded-2xl" src={gantry} alt="conveyor setup used" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsGantry;
