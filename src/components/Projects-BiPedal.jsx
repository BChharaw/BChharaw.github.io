import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import robot from "../assets/robot.png"
const ProjectsBipedal = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Say Hi To Robbie!
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            The soon to be natural walking bipedal
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Currently I'm on co-op at <a target="_blank" href="https://www.goodlabs.studio/" className="text-blue-500 font-bold">
                GoodLabs Studio
            </a> working on Robbie, a natural walking bipedal. I'm designing this robot alongside <a target="_blank" href="https://www.linkedin.com/in/lucas-reljic/" className="text-blue-500">
                Lucas Reljic
            </a> and <a target="_blank" href="https://www.linkedin.com/in/ethan-hemeon-119bb3269/" className="text-blue-500">
                Ethan Hemeon
            </a>. We are all responsible for the full mechanical and electrical design, along with the embedded AI software implentation (a true mechatronics project!). 
          </p><br></br><p className="text-base sm:text-lg max-w-md mx-auto mt-6">This is an in-progress project but here's a sneak peak at our prototype cad model (more to come soon)!</p>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={robot}
            alt="full body cad design of the robot"
          />
        
        </div>
      </div>
    </div>
  );
};

export default ProjectsBipedal;
