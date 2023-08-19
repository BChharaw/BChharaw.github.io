import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import cardetectioncode from '../assets/toyotainnovation.mp4';
import conveyor from '../assets/conveyorsetup.webp';

const CarDesigner = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-neutral-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Car Designer
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            Machine Vision In C++
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            As a part of the Toyota Innovation Challenge Hackathon, three friends and I developed a real-time vehicle tracking system to track cars on a conveyor belt, addressing a real-world problem faced by the company.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Starting with only a provided C++ base, which opened a window allowing us to view the camera feed (without any documentation), we used depth data and a processed binary representation of the live feed to isolate model cars on a conveyor belt as a proof of concept for our final solution.
          </p>
          <video className="max-w-full mx-auto mt-8 rounded-2xl z-[-1]" controls>
            <source src={cardetectioncode} type="video/mp4" />
          </video>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            The final program could intelligently filter out irrelevant information in the frame, such as someone's hand waving around, and track the model cars' bumper with a precision of +/- 1mm (the maximum resolution of our camera)! 🚗
          </p>
          <a href="https://github.com/BChharaw/CarTrackingMachineVisionAlgorithm" target="_blank" rel="noopener noreferrer">
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
              View the code on GitHub
              <HiArrowNarrowRight className="ml-2" />
            </button>
          </a>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={conveyor}
            alt="conveyor setup used"
          />
        </div>
      </div>
    </div>
  );
};

export default CarDesigner;
