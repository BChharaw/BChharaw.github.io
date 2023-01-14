import React from "react";
import MyGoal from "../assets/mygoalisimg.png";
import UVCC from "../assets/outer-prototype.jpg";
import Car from "../assets/car-tracking.gif";
import Gantry from "../assets/keyboard-typer.gif";
import TFLRestimator from "../assets/CarEstimatorModel.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="bg-[#011627] w-full h-full">
      <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 p-[30px] pt-[70px]">
        <Link to="/projects/carvalueestimator"><div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#D45550] hover:underline ">
          <h1 className="font-bold  text-xl">
            Car Value Estimator{" "}
          </h1>
          <p className="pb-[5px]">(TensorFlow in Python)</p>
          <img
            className="w-screen rounded-lg pt-5px"
            src={TFLRestimator}
            alt="demontration of model working"
          />
        </div>
        </Link>
        <Link to="/projects/2axisgantry"><div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#D45550] hover:underline ">
          <h1 className="font-bold text-xl">
            High Precision 2-Axis Gantry{" "}
          </h1>
          <p className="pb-[5px]">(C with RobotC library)</p>
          <img
            className="w-screen rounded-lg pt-5px"
            src={Gantry}
            alt="Final term design project UW MTE100"
          />
        </div>
        </Link>
        <Link to="/projects/cardetection">
          <div className="p-4 rounded-lg text-[#fdfffc] hover:underline hover:text-[#D45550] ">
            <h1 className="font-bold text-xl">
              Car Detection Algorithm{" "}
            </h1>
            <p className="pb-[5px]">(Machine Vision in C++)</p>
            <img
              className="w-screen rounded-lg pt-5px"
              src={Car}
              alt="our project for the University of Waterloo Toyota Innovation Hackathon"
            />
          </div>
        </Link>

        <Link to="/projects/uvcclean">
          <div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#D45550] hover:underline ">
            <h1 className="font-bold  text-xl">
              Autnomous Water Disinfection System{" "}
            </h1>
            <p className="pb-[5px]">
              (JavaScript, HTML/CSS, BootStrap, and C++)
            </p>
            <img
              className="w-screen rounded-lg pt-5px"
              src={UVCC}
              alt="photo of the outer completed prototype"
            />
          </div>
        </Link>
        <Link to="/projects/goalfortheday">
          <div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#D45550] hover:underline ">
            <h1 className="font-bold  text-xl">
              Goal Tracker{" "}
            </h1>
            <p className="pb-[5px]">(JavaScript, and HTML/CSS)</p>
            <img
              className="w-screen rounded-lg pt-5px "
              src={MyGoal}
              alt="cover photo for 'today my goal is project"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
