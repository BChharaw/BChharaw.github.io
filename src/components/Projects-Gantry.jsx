import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import gantrymotion from "../assets/gantrymotion.mp4";
import gantry from "../assets/frontgantry.jpg";
const ProjectsGantry = () => {
    return (
        <div
          name="high precision gantry"
          className="w-full bg-[#011627] pt-[80px] text-[#fdfffc]"
        >
          <div className="flex flex-col justify-center items-center w-full">
            <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
              <div className="sm:text-right pb-8">
                <p className="text-4xl inline border-b-4 border-[#D45550] text-left">
                  Keyboard Typing Gantry
                </p>
              </div>
              <div></div>
            </div>
            <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
              <div className="text-4xl font-bold sm:text-right">
                <p>C using RobotC library</p>
              </div>
              <div>
                <p className="pb-[5px]">
                  For our final MTE 100 design course, three classmates and I designed a high precision 2-axis gantry designed to type on a keyboard.<br></br>
                  <br></br> Using an array of sensors to interact with the environment it could send SMS texts (by navigating the TextNow desktop interface) with a couple extra easter eggs thrown in too! 🐣🐰<br></br>
                  <br></br> The final prototype could accurately actuate any desired key on the keyboard with a precision of +/- 5mm once calibrated!<br></br>
                  <video className="w-full p-[5px] rounded-2xl" controls>
                    <source src={gantrymotion} type="video/mp4" />
                  </video>
                  <a className="p-[15px]"  target="_blank" href="https://github.com/BChharaw/HighPrecisionGantry">
              <button className="p-[10px] text-[#fdfffc] hover:bg-[#D45550] border-[1px] px-4 py-1 flex items-center rounded-full ">
              View the code on Github 
              <HiArrowNarrowRight />
            </button>
            </a><br></br>This is what the final version of our prototype looked liked, with the sensor array being shown to the left and right of the EV3 brick.

                  <img
              className="w-full p-[5px] rounded-2xl"
              src={gantry}
              alt="conveyor setup used"
            ></img>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ProjectsGantry