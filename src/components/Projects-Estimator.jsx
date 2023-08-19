import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import estimator from '../assets/CarEstimatorModel.webp';
import specs from '../assets/Spec-car-data.webp';

const ProjectsEstimator = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-neutral-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Car Value Estimator
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            A linear regression model in TensorFlow
          </p>
          
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={estimator}
            alt="image of my today my goal is website"
          />
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            This is a linear regression model that uses data regarding mileage, engine power, transmission, and other technical details to estimate the value of a car. The model was trained using the{' '}
            <a
              className="font-bold underline"
              href="https://www.kaggle.com/datasets/nehalbirla/vehicle-dataset-from-cardekho"
              target="_blank"
              rel="noopener noreferrer"
            >
              CarDehko vehicle dataset
            </a>.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Data for this model was cleaned using Google Sheets, and overall, this project was fun to work on. Although the accuracy wasn't as high as I would have liked, it was challenging due to extreme outliers in the dataset. For example, two cars of very similar make and model could sell for $300 or $8000, respectively, due to one being essentially scrap metal and undrivable while the other was in excellent condition.
          </p>
          <a href="https://github.com/BChharaw/CarValueEstimator" target="_blank" rel="noopener noreferrer">
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
              View the code on GitHub
              <HiArrowNarrowRight className="ml-2" />
            </button>
          </a>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={specs}
            alt="image of my today my goal is website"
          />
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            In the future, I may use some Google Sheets wizardry to clean up the outliers. For now, I'm focusing on other more complex machine learning projects. (Coming soon!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsEstimator;
