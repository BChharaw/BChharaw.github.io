import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[url('https://cc246282-1098-4f57-bdc7-4b8c66f018e5.id.repl.co/back2.png')] bg-fixed bg-center bg-cover pt-[80px] text-[#fdfffc]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl inline border-b-4 border-[#D45550] text-left">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi I'm Brendan nice to meet you!</p>
          </div>
          <div>
            <p>
              I'm a student at the University of Waterloo looking for a summer
              2023 co-op position. I enjoy playing around with neural networks
              and computer vision, and building autonomous systems! <br></br>{" "}
              <br></br>I may work with robots every day (check out my projects!)
              but I promise I am human. Feel free to send me an email at{" "}
              <a className="font-bold" href="brendancmechatronics@gmail.com
">brendancmechatronics@gmail.com
              </a>
              ! <br></br><br></br>To take a look at my resume, please email me as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
