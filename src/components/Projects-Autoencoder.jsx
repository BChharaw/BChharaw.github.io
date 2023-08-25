import React from 'react';
import latentspacegood from "../assets/latentspace.gif";
import L1 from "../assets/L1.gif";
import L2 from "../assets/L2.gif";
import L3 from "../assets/L3.gif";
import L4 from "../assets/L4.gif";

const AutoencoderDescription = () => {
  return (
    <div className="bg-neutral-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Autoencoder Network for Dimentionality Reduction of Human Poses
          </p>
          <img className="max-w-full mx-auto rounded-2xl pt-2" src={latentspacegood} alt="latent space visualization" />

          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            I'm a Machine Learning and Robotics developer on Team Robbie at <a  className="text-blue-500" href="https://www.goodlabs.studio/" target="_blank">GoodLabs Studio</a> developing the machine learning framework that aim's to allow the bipedal robot we designed to walk. You can check out earlier work I've done with
            <a  className="text-blue-500" href="https://bchharaw.github.io/#/experience/bipedal" target="_blank"> Part 1</a>,
            <a  className="text-blue-500" href="https://bchharaw.github.io/#/experience/adversarial_humanoid_walking" target="_blank"> Part 2</a>,
            <a  className="text-blue-500" href="https://bchharaw.github.io/#/experience/dataset_generator" target="_blank"> and Part 3</a>.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            I developed an autoencoder network to perform dimensionality reduction of ~45000 3D human poses from a dataset we developed. This part was essential for our pipeline, as our trajectory state model needed a well mapped latent space. After experimenting with variational autoencoders, convolutional variational autoencoders, and regular autoencoders, I found that the best performance came from a regular autoencoder using dropout, adaptive learning rate using ADAM, tanh activation, and a vectorized data input.
            <br></br><br></br>
            Training the autoencoder on ~45000 poses from our dataset produced the latent space shown in the above gif at the top of the page. This result surpassed all previous attemps drastically, showing complex, symmetric shapes that indicate the model recognized similarities in walking and plotted them accurately in the latent space. 
            <br></br><br></br>
            You can learn more about what our dataset looked like <a  className="text-blue-500" href="https://bchharaw.github.io/#/experience/adversarial_humanoid_walking" target="_blank">here</a>. Here are some of the failed latent spaces (from worst to best) I developed which emphasize the difficultly of the task at hand:
            <img className="max-w-full mx-auto rounded-2xl pt-2" src={L4} alt="latent space visualization" />
            <img className="max-w-full mx-auto rounded-2xl pt-2" src={L3} alt="latent space visualization" />
            <img className="max-w-full mx-auto rounded-2xl pt-2" src={L2} alt="latent space visualization" />
            <img className="max-w-full mx-auto rounded-2xl pt-2" src={L1} alt="latent space visualization" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoencoderDescription;
