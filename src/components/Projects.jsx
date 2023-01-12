import React from "react";
import MyGoal from "../assets/today-my-goal.png";
import UVCC from "../assets/outer-prototype.jpg";
import Car from "../assets/car-tracking.gif";
import Gantry from "../assets/keyboard-typer.gif";
import TFLRestimator from "../assets/CarEstimatorModel.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="bg-[#011627] w-full">
      <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 p-[30px] pt-[70px]">
        <Link to="/projects/carvalueestimator"><div className="bg-opacity-90 bg-[#e71d36] p-4 rounded-lg">
          <h1 className="font-bold text-[#fdfffc] text-xl">
            Car Value Estimator{" "}
          </h1>
          <p className="text-[#011627]">(TensorFlow in Python)</p>
          <img
            className="w-screen rounded-lg pt-5px"
            src={TFLRestimator}
            alt="demontration of model working"
          />
        </div>
        </Link>
        <Link to="/projects/2axisgantry"><div className="bg-opacity-90 bg-[#2ec3b6] p-4 rounded-lg">
          <h1 className="font-bold text-[#fdfffc] text-xl">
            High Precision 2-Axis Gantry{" "}
          </h1>
          <p className="text-[#011627]">(C with RobotC library)</p>
          <img
            className="w-screen rounded-lg pt-5px"
            src={Gantry}
            alt="Final term design project UW MTE100"
          />
        </div>
        </Link>
        <Link to="/projects/cardetection">
          <div className="bg-opacity-90 bg-[#e71d36] p-4 rounded-lg">
            <h1 className="font-bold text-[#fdfffc] text-xl">
              Car Detection Algorithm{" "}
            </h1>
            <p className="text-[#011627]">(Machine Vision in C++)</p>
            <img
              className="w-screen rounded-lg pt-5px"
              src={Car}
              alt="our project for the University of Waterloo Toyota Innovation Hackathon"
            />
          </div>
        </Link>

        <Link to="/projects/uvcclean">
          <div className="bg-opacity-90 bg-[#2ec3b6] p-4 rounded-lg">
            <h1 className="font-bold text-[#fdfffc] text-xl">
              Autnomous Water Disinfection System{" "}
            </h1>
            <p className="text-[#011627]">
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
          <div className="bg-opacity- bg-[#e71d36] p-4 rounded-lg">
            <h1 className="font-bold text-[#fdfffc] text-xl">
              Goal for the Day{" "}
            </h1>
            <p className="text-[#011627]">(JavaScript, and HTML/CSS)</p>
            <img
              className="w-screen rounded-lg pt-5px"
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
