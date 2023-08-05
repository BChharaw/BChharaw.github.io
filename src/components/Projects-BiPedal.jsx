import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import robot from "../assets/robot.png"
import sitting from "../assets/robbiesitting.jpg"
import grid from "../assets/grid.jpg"
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
            The humanoid robot from GoodLabs Studio
          </p>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={robot}
            alt="fully constructed robot"
          />
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Currently I'm working at <a target="_blank" href="https://www.goodlabs.studio/" className="text-blue-500 font-bold">
                GoodLabs Studio
            </a> working as a Machine Learning and Robotics developer aboard Team Robbie (humanoid robotics division). I designed Robbie the humanoid alongside <a target="_blank" href="https://www.linkedin.com/in/lucas-reljic/" className="text-blue-500">
                Lucas Reljic
            </a> and <a target="_blank" href="https://www.linkedin.com/in/ethan-hemeon-119bb3269/" className="text-blue-500">
                Ethan Hemeon
            </a>. 
            <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={sitting}
            alt="fully constructed robot"
          /><br></br><br></br>Robbie is a cutting-edge humanoid robot designed to achieve natural walking and eventually aid in patient care for the elderly. Over the past couple of months, we have designed and built a 3-foot-tall humanoid, developed embedded software to make Robbie run, and we’re currently developing the reinforcement learning algorithm that will train Robbie to walk. <br></br>
          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={grid}
            alt="fully constructed robot"
          /><br></br>As mentioned, right now I'm primarily focusing on the reinforcement learning algorithm which is training Robbie to walk and frankly <a target="_blank" href="#/experience/adversarial_humanoid_walking" className="text-blue-500 font-bold">deserves a page of its own</a>. <br></br><br></br>It won't be long until we can get some videos of Robbie up and walking! In the meantime you can check out some of our progress on LinkedIn:
             <ul>
             <li><a target="_blank" href="https://www.linkedin.com/posts/thomas-lo-a8931a18_gazillion-of-goodlabs-studio-robbie-in-isaac-activity-7090786758405066752-i9DY?utm_source=share&utm_medium=member_desktop" className="text-blue-500">Robbie in Isaac Gym (gone hectic!)</a></li>
             <li><a target="_blank" href="https://www.linkedin.com/posts/thomas-lo-a8931a18_so-awesome-to-meet-up-with-the-goodlabs-studio-activity-7090786055825616896-dAWm?utm_source=share&utm_medium=member_desktop" className="text-blue-500">The two versions of Robbie unite!</a></li>
             <li><a target="_blank" href="https://www.linkedin.com/posts/thomas-lo-a8931a18_backseat-driver-goodlabs-studio-s-robbie-activity-7090355861251874818-qRDa?utm_source=share&utm_medium=member_desktop" className="text-blue-500">Robbie in the backseat</a></li>
             <li><a target="_blank" href="https://www.linkedin.com/posts/thomas-lo-a8931a18_eldercare-roboticsai-extremeai-activity-7084478061382938624-zxIX?utm_source=share&utm_medium=member_desktop" className="text-blue-500">Robbie full body assembled!</a></li>
             <li><a target="_blank" href="https://www.linkedin.com/posts/thomas-lo-a8931a18_team-robbie-has-been-pushing-hard-to-take-activity-7075498703309975553-l-Od?utm_source=share&utm_medium=member_desktop" className="text-blue-500">Simple Blind Balancing Algorithm</a></li>
             <li><a target="_blank" href="https://www.linkedin.com/posts/goodlabs-studio_at-goodlabs-studio-studio-we-are-fortunate-activity-7062785703176257536-UFb5?utm_source=share&utm_medium=member_desktop" className="text-blue-500">Introducing... Robbie!</a></li>

            </ul>
          </p>
          
        
        </div>
      </div>
    </div>
  );
};

export default ProjectsBipedal;
