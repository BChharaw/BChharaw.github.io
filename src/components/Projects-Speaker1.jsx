import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import speaker1image2 from '../assets/speaker1image2.webp';

const BluetoothSpeakerProject = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-neutral-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            DIY Bluetooth Speaker (Version 1)
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            (Because I was bored)
          </p>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={speaker1image2}
            alt="picture of built speaker, it has dual speakers for stereo"
          />
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            This is a DIY bluetooth speaker I built from random parts lying around. Using a bluetooth recieiver, a simple signal amplification circuit with an op amp, a shield circuit for a lithium ion battery 3.7V (for safe charging and discharging), and speaker modules I tore out of an broken laptop from 2007 I designed a bluetooth speaker. 
          </p>

          <a href="https://drive.google.com/file/d/1UJn1_mlDJh7KRgchUkCvpnsx2lXTTpMn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
              Link to video of it working
              <HiArrowNarrowRight className="ml-2" />
            </button>
          </a>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
        The casing was designed in SolidWorks and printed in PLA. The lid for the speaker was designed to be very thin with the hope that if I could has no buttons visible and the buttons were activated by pushing hard on certain parts of the lid. This didn't work as well as I expected it to and I ended up having to take off the lid every time I wanted to turn it on or off. Honestly speaking, the speaker probably holds the record for the worst sound quality you will every hear (probably becuase of my very jerry rigged amplification circuit) but it still felt amazing to hear it work. It charges via USB and holds a charge for about 2-3h depending on the volume.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            I learnt a decent amount about signaling circuits in the process of doing this project and having something that worked as a final product (especially considering I made it on a rainy Tuesday for fun) felt amazing.
          </p>
          <a href="/#/experience/bluetoothspeakerversion2" target="_blank" rel="noopener noreferrer">
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
              I also made a second speaker, check it out here
              <HiArrowNarrowRight className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BluetoothSpeakerProject;
