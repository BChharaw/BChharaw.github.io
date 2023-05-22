import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import MYGOAL from "../assets/goals-as-list.png";

const ProjectsGoal = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Today My Goal Is...
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            <div className="h-16">
              <Typewriter
                options={{
                  strings: [
                    "A simplistic way to track your goals",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </div>
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            When I was first learning JavaScript, HTML, and CSS, I created this simplistic website to track goals using cookies in the browser.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-2">
            I designed it for personal use to hold myself more accountable for the goals I set. It served as my default browser homepage during high school and greatly improved my productivity.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-2">
            Every day, it allows you to set exactly one goal and displays a list of previous goals. You can edit the goal of the day by typing something new.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-2">
            It's a simple and straightforward tool for goal tracking. 😎
          </p>
          <div className="mt-8 flex justify-center">
            <a href="https://mygoalfortoday.brenc.repl.co/" target="_blank" rel="noopener noreferrer">
              <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center">
                Give it a demo!
                <HiArrowNarrowRight className="ml-2" />
              </button>
            </a>
          </div>
          <div className="mt-4 flex justify-center">
            <a href="https://github.com/BChharaw/GoalTracker" target="_blank" rel="noopener noreferrer">
              <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center">
                View the code on GitHub
                <HiArrowNarrowRight className="ml-2" />
              </button>
            </a>
          </div>
          <img className="max-w-full mx-auto mt-8 rounded-2xl" src={MYGOAL} alt="image of my today my goal is website" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsGoal;
