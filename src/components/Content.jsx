import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { FadeIn } from 'react-fade-in';
import conveyor from "../assets/conveyorsetup.jpg";
import robotbackground from "../assets/robotbackground.png";
const Content = () => {
  return (
    <div
      className="bg-gray-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20 h-screen"
      style={{ backgroundImage: "url('/static/media/robotbackground.6bb98326a4bcc0eb24a1.png')" }}
    >
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base">Hi, I'm</p>
          <h1 className="text-4xl sm:text-6xl font-bold mt-4">
            Brendan!
          </h1>
          <h2 className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            <div className="h-16">
              <Typewriter
                options={{
                  strings: [
                    "I'm a UWaterloo robotics engineering student",
                    "I'm designing a bipedal robot at GoodLabs Studio",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </div>
          </h2>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Currently, I'm on co-op at GoodLabs Studio designing Robbie, a natural walking bipedal... check it out!
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/projects">
              <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center">
                My experience
                <HiArrowNarrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
