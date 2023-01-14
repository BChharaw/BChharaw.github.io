import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import cardetectioncode from "../assets/toyotainnovation.mp4";
import conveyor from "../assets/conveyorsetup.jpg";
const CarDetection = () => {
  return (
    <div
      name="tracking cars in real time"
      className="w-full bg-[#011627] pt-[80px] text-[#fdfffc]"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl inline border-b-4 border-[#D45550] text-left">
              Real-Time Vehicle Tracking System
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="text-4xl font-bold sm:text-right">
            <p>Machine Vision In C++</p>
          </div>
          <div>
            <p className="pb-[5px]">
              As a part of the Toyota Innovation Challenge Hackathon, three
              friends and I developed a real time vehicle tracking system to
              track cars on a conveyor belt to address a real world problem the
              company was facing. <br></br>
              <br></br> Starting only a provided C++ base which opened a window
              allowing us to view the camera feed (and no documentation either),
              we used depth data and a processed binary representation of the
              live feed to isolate model cars on a conveyor belt as a proof of
              convept to our final solution. <br></br>
              <video className="w-full p-[5px] rounded-2xl" controls>
                <source src={cardetectioncode} type="video/mp4" />
              </video>
              
              <br></br> The final program could intelligently filter out
              irrelevant information in the frame (ie. someones hand waving
              around) and track the model cars bumper to a precision of +/- 1mm
              (the maximum resolution of our camera)! 🚗 
             
            </p>
              <a className="p-[15px]" href="https://github.com/BChharaw/CarTrackingMachineVisionAlgorithm">
              <button className="p-[10px] text-[#fdfffc] hover:bg-[#D45550] border-[1px] px-4 py-1 flex items-center rounded-full ">
              View the code on Github 
              <HiArrowNarrowRight />
            </button>
            </a>
              <br></br>
              <img
              className="w-full p-[5px] rounded-2xl"
              src={conveyor}
              alt="conveyor setup used"
            ></img>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetection;
