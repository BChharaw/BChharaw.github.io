import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import robot from "../assets/robot.png"
const ProjectsBipedal = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Say Hi To Robbie!
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            The soon to be natural walking bipedal
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Currently I'm on working at <a target="_blank" href="https://www.goodlabs.studio/" className="text-blue-500 font-bold">
                GoodLabs Studio
            </a> working on Robbie, a natural walking bipedal. I'm designing this robot alongside <a target="_blank" href="https://www.linkedin.com/in/lucas-reljic/" className="text-blue-500">
                Lucas Reljic
            </a> and <a target="_blank" href="https://www.linkedin.com/in/ethan-hemeon-119bb3269/" className="text-blue-500">
                Ethan Hemeon
            </a>. <br></br><br></br>As a Machine Learning and Robotics Developer aboard this team, I head the reinforcement learning that trains Robbie to move naturally; however, I've done emdedded software development and CAD design aboard the team as well. <br></br><br></br>
            
           Check out some of our progress below on our <a target="_blank" href="https://www.instagram.com/goodlabs_studio_robotics/" className="text-blue-500"> Instagram </a> or on <a target="_blank" href="https://www.linkedin.com/company/goodlabs-studio/mycompany/" className="text-blue-500">LinkedIn</a>
          </p>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={robot}
            alt="full body cad design of the robot"
          />
        
        </div>
      </div>
    </div>
  );
};

export default ProjectsBipedal;
