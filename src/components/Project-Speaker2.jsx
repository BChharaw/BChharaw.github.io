import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import speaker2image1 from '../assets/speaker2image1.jpg';

const BluetoothSpeakerProject = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            DIY Bluetooth Speaker (Version 2)
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            (A second model with better sound quality and battery life)
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            After having fun making my first bluetooth speaker I set out to make another with improvements over the first. Instead of jerry rigging an amplification circuit, I used a sound amplifying PCB, I used a better bluetooth module, a bigger battery, and most importantly a better speaker module. 
          </p>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={speaker2image1}
            alt="picture of built speaker, it has dual speakers for stereo"
          />
          <a href="www.example.com" target="_blank" rel="noopener noreferrer">
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
              (Link to come soon)
              <HiArrowNarrowRight className="ml-2" />
            </button>
          </a>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
The speaker module I tore out of a SONY soundbar that I found at a thrift store for very cheap and the casing was 3D printed from PETG and designed in Fusion360. This time I made tactile buttons in the casing instead of buttons that were embedded within it given that the idea didn't work so well the first time I tried it.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            I did this project just for fun and was very pleased with the result. The sound quality held a significant improvement over my first version along with being much louder and longer range. It has 4h of battery life at max volume and houses a 7.4V lithium ion battery.
          </p>
          <a href="/#/experience/bluetoothspeakerversion1" target="_blank" rel="noopener noreferrer">
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
              Check out my previous bluetooth speaker version
              <HiArrowNarrowRight className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BluetoothSpeakerProject;
