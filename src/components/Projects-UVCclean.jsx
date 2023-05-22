import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import uvcc from '../assets/in-tank.jpg';
import withwater from '../assets/flowing-water.jpg';
import uvlight from '../assets/uv-light-on.jpg';

const ProjectsUVCclean = () => {
  window.scrollTo(0, 0);
  return (
    
    <div className="bg-gray-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            The Ultraviolet Conduit Cell (UVCC)
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            <div className="h-16">
              <Typewriter
                options={{
                  strings: ['Autonomous Water Disinfection'],
                  autoStart: true,
                  loop: true,
                  cursor: '',
                }}
              />
            </div>
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            As part of a four-month design challenge presented by Professional Engineers Ontario, I worked with four friends to develop an autonomous water disinfection system 💧. I designed a fully responsive website using Bootstrap, HTML, CSS, and JavaScript to describe my role in this project. Check it out at the link below!
          </p>
          <div className="mt-8 flex justify-center">
            <a href="https://theuvcc.brenc.repl.co/" target="_blank" rel="noopener noreferrer">
              <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center">
                Take a peek!
                <HiArrowNarrowRight className="ml-2" />
              </button>
            </a>
          </div>
          <div className="mt-4 flex justify-center">
            <a href="https://github.com/BChharaw/AutonomousWaterDisinfection" target="_blank" rel="noopener noreferrer">
              <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center">
                View the code on GitHub
                <HiArrowNarrowRight className="ml-2" />
              </button>
            </a>
          </div>
          <img className="max-w-full mx-auto mt-8 rounded-2xl" src={uvcc} alt="image of the UVCC system in a tank" />
          <img className="max-w-full mx-auto mt-8 rounded-2xl" src={withwater} alt="image of water flowing" />
          <img className="max-w-full mx-auto mt-8 rounded-2xl" src={uvlight} alt="image of UV light in operation" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsUVCclean;
