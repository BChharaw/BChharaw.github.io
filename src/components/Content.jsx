import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { FadeIn } from 'react-fade-in';
const Content = () => {
  return (
    <div
      name="main"
      className="bg-[url('https://cc246282-1098-4f57-bdc7-4b8c66f018e5.id.repl.co/back1.png')] bg-cover bg-fixed bg-center pt-[80px] w-full h-screen"
    >
      <div className="pl-[20px] max-w-[1080] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-xl sm:text-3xl text-[#fdfffc]">Hi I'm</p>
        <h1 className="text-3xl sm:text-7xl font-bold text-[#fdfffc]">
          Brendan
        </h1>
        <h2 className="text-xl sm:text-3xl font-bold text-[#D45550]">
          <div className="h-20 z-10">
            <Typewriter
              options={{
                strings: [
                  "I'm a UWaterloo robotics engineering student",
                  "I research bipedal robotics at GoodLabs Studio",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </div>
        </h2>
        <p className="text-[#fdfffc] text-sm sm:text-lg max-w-[750px]">
          Currently I'm on coop at GoodLabs Studio designing Robbie, a natural walking bipedal... check it out!
        </p>
        <div className="py-4">
          <Link to="/projects">
            <button className="p-[10px] text-[#fdfffc] hover:bg-[#D45550] border-[1px] px-4 py-1 flex items-center rounded-full ">
              My experience 
              <HiArrowNarrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
