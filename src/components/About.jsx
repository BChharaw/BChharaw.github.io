import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import gantrybackground from "../assets/gantrybackground.png";
const About = () => {
  return (
    <div
      className="bg-gray-900 text-white bg-cover bg-fixed bg-center h-screen"
      style={{ backgroundImage: "url('/static/media/gantrybackground.e08a45a1a3192102c97c.png')" }}
    >
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mt-4">
            About Me
          </h1>
          <div className="max-w-md mx-auto mt-6">
            <p className="text-lg">
              Hi, I'm Brendan. Nice to meet you!
            </p>
            <p className="text-base mt-4">
              I'm a student at the University of Waterloo studying Mechatronics Engineering. I'm passionate about neural networks, computer vision, and building autonomous systems. At the moment, I'm particularly interested in applying my skills in bipedal robotics. <br/><br/>Despite working with robots all day, I promise I haven't become one (yet)! If you have any questions, or would like to connect, feel free to reach out to me at <a className="text-blue-500 font-bold" href="mailto:brendancmechatronics@gmail.com">brendancmechatronics@gmail.com</a>. <br/><br/>
</p>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
