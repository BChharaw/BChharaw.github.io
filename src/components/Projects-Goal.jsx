import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import MYGOAL from "../assets/mygoalisimg.png";
const ProjectsGoal = () => {
  return (
    <div
    name="Project about a simple website with cookies"
    className="w-full sm:h-screen bg-[#011627] pt-[80px] text-[#fdfffc]"
  >
    <div className="flex flex-col justify-center items-center w-full">
      <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8">
          <p className="text-4xl inline border-b-4 border-[#7697A3] text-left">
            Today My Goal Is...
          </p>
        </div>
        <div></div>
      </div>
      <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
        <div className="text-4xl font-bold sm:text-right">
          <p>A simplistic way to track your goals</p>
          

        </div>
        <div>
          <p className="pb-[5px]">
            When I was first learning JavaScript, HTML, and CSS I made this
            simplistic website that tracks your goals using cookies in the
            browser. <br></br>
            <br></br> I made it for personal use to hold myself more
            accountable for the goals I set as I set it as my default browser
            homepage (worked wonders with
            my productivity in high school). <br></br>
            <br></br> Everyday it allows you to set exactly one goal for that
            day and will display previous goals which you made in the past as
            a list. You can edit the day's goal by typing something new. <br></br><br></br>Nothing more, nothing less, simplistic as it should be! 😎{" "}
          </p>
          <div className="p-[10px]">
      <a href="https://mygoalfortoday.brenc.repl.co/" target="_blank"><button className="text-[#fdfffc] hover:bg-[#7697A3] border-[1px] px-4 py-1 flex items-center rounded-full ">
            Give it a demo! 
            <HiArrowNarrowRight />
          </button></a></div>
          <img className = "w-full p-[5px] rounded-2xl" src={MYGOAL} alt="image of my today my goal is website"></img>

        </div>
      </div>
      
      
    </div>
  </div>
  );
};

export default ProjectsGoal;
