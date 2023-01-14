import React from 'react'
import uvcc from "../assets/in-tank.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import withwater from "../assets/flowing-water.jpg";
import uvlight from '../assets/uv-light-on.jpg';
const ProjectsUVCclean = () => {
  return (
    <div
    name="autonomous water disinfection"
    className="w-full bg-[#011627] pt-[80px] text-[#fdfffc]"
  >
    <div className="flex flex-col justify-center items-center w-full">
      <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8">
          <p className="text-4xl inline border-b-4 border-[#D45550] text-left">
            The Ultraviolet Conduit Cell (UVCC)
          </p>
        </div>
        <div></div>
      </div>
      <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
        <div className="text-4xl font-bold sm:text-right">
          <p>Autonomous Water Disinfection</p>
          

        </div>
        <div>
          <p className="pb-[5px]">
          As a part of a four month design challenge by presented by Professional Engineers Ontario, four friends and I developed an autonomous water disinfection system 💧. I designed a fully responsive website using Bootstrap, HTML, CSS and JavaScript to describe my role in this project check it out at the link below!.
{" "}
          </p>
          <div className="p-[10px]">
      <a href="https://theuvcc.brenc.repl.co/" target="_blank"><button className="p-[10px] text-[#fdfffc] hover:bg-[#D45550] border-[1px] px-4 py-1 flex items-center rounded-full ">
            Take a peek! 
            <HiArrowNarrowRight />
          </button></a>
          <a className="p-[15px]" href="https://github.com/BChharaw/AutonomousWaterDisinfection">
              <button className="p-[10px] text-[#fdfffc] hover:bg-[#D45550] border-[1px] px-4 py-1 flex items-center rounded-full ">
              View the code on Github 
              <HiArrowNarrowRight />
            </button>
            </a>
          </div>
          <img className = "w-full p-[5px] rounded-2xl" src={uvcc} alt="image of my today my goal is website"></img>
          <img className = "w-full p-[5px] rounded-2xl" src={withwater} alt="image of my today my goal is website"></img>
          <img className = "w-full p-[5px] rounded-2xl" src={uvlight} alt="image of my today my goal is website"></img>

        </div>
      </div>
      
      
    </div>
  </div>
      
  )
}

export default ProjectsUVCclean