import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import estimator from "../assets/CarEstimatorModel.png";
import specs from "../assets/Spec-car-data.png";
const ProjectsEstimator = () => {
  return (
    <div
      name="estimating the value of a car with AI"
      className="w-full bg-[#011627] pt-[80px] text-[#fdfffc]"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl inline border-b-4 border-[#D45550] text-left">
              Car Value Estimator
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="text-4xl font-bold sm:text-right">
            <p>A linear regression model in TensorFlow</p>
          </div>
          <div>
            <p className="pb-[5px]">
              This is a linear regression model which uses data regarding
              mileage, engine power, transmission and other technical details to
              estimate the value of an car. This was done using the{" "}
              <a
                className="font-bold underline"
                href="https://www.kaggle.com/datasets/nehalbirla/vehicle-dataset-from-cardekho"
              >
                CarDehko vehicle dataset
              </a>
              .<br></br>
              <img
              className="w-full p-[5px] rounded-2xl"
              src={estimator}
              alt="image of my today my goal is website"
            ></img>
              <br></br> Data for this model was cleaned using Google Sheets and
              overall this project was fun in the making even though the
              accuracy was horrible and when I tried to optimize for loss it got
              worse. This is mainly due to there being extreme outliers in the
              dataset (ie. two cars of very similar make a model could sell for
              $300 or $8000 respectively due to one being esentially scrap metal
              and undrivable where as the other was in excellent condition).
              <br></br>
              <img
              className="w-full p-[5px] rounded-2xl"
              src={specs}
              alt="image of my today my goal is website"
            ></img>
              <br></br> In the future I may use some Google Sheets wizardry to
              clean up the outliers, but for now I'm focussing on other more
              complex machine learning projects such as a convolutional neural
              network that extrapolates edges to an landscape image which don't
              exist the original image. (Coming soon!) 🌆{" "}
            </p>
            <div className="p-[10px]">
   
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsEstimator;
