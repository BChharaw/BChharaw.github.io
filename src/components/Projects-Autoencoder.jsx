import React from 'react';
import RL from "../assets/RL.png";
import posepic from "../assets/3dpose.png";

import { Link } from 'react-router-dom';

const AdversarialAlgorithm = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-neutral-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Adversarial Reinforcement Learning Algorithm for Humanoids
          </p>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={RL}
            alt="Robbie Learning to Walk"
          />
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            This algorithm is a versatile and robust pipeline for training bipedal robots, which I'm currently working on. This project is my second major undertaking at <a target="_blank" href="https://www.goodlabs.studio/" className="text-blue-500 font-bold">
                 GoodLabs Studio
            </a>, where I'm working as a Machine Learning and Robotics developer. 
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            As a part of our development aboard Team Robbie, <Link to="/experience/bipedal" className="text-blue-500 font-bold"> (check out part 1 here)</Link>, the cutting-edge humanoid robot required a walking algorithm. As a result, I designed an algorithm to accomplish this effectively, which will be the focus of a paper published in the coming year. In the meantime, here are some of the details:
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Leveraging a human pose dataset, I convert 3D stick figures to a latent space with a VAE, enabling Robbie to learn human-like movements.
          </p>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={posepic}
            alt="Robbie Learning to Walk"
          />
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Robbie's high-level policy then predicts movements based on latent space trajectories from 3D motion clips, while a low-level reinforcement learning policy takes in this information and is trained in Isaac Gym via rewards dictated by two discriminators.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Of these two discriminators, one identifies "fake poses," while the other enforces adherence to natural movement patterns.
            <br /><br /> Expect more updates in the coming future as the algorithm is refined and further developed! In the meantime, perhaps check out <Link to="/experience/bipedal" className="text-blue-500 font-bold">part 1 here!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdversarialAlgorithm;
