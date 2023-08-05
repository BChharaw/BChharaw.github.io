import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import craneImage from '../assets/crane.jpeg';
import craneMoving from "../assets/cranemoving.MOV"
const CraneProject = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            RC Crane Project
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            <div className="h-16">
              <Typewriter
                options={{
                  strings: ['Remote-Controlled Crane for Tron Day'],
                  autoStart: true,
                  loop: true,
                  cursor: '',
                }}
              />
            </div>
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            During our 1A at the University of Waterloo, my classmates Michelle, Melissa, Connor, and I participated in the Tron Day project. We designed and built a remote-controlled crane capable of precise movements with lifting hard-to-carry objects (such as those with smooth surfaces, odd contours, small surface areas). The crane's control system design allowed it a high degree of manuvreability, placing our group in the top 15% of the competition. 
          </p>
          <div className="mt-8 mx-auto max-w-lg">
            <video className="w-full p-[5px] rounded-2xl" controls>
              <source src={craneMoving} type="video/mp4" />
            </video>
          </div>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Above is a video of our robot handing over a screwdriver to another robot. (I know this isn't the best video of our project but its the only in focus one we could find easily)
          </p>
          <img className="max-w-full mx-auto mt-8 rounded-2xl" src={craneImage} alt="RC Crane Project" />
        </div>
      </div>
    </div>
  );
};

export default CraneProject;
