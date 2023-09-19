import React from "react";
import { FaArrowRight } from "react-icons/fa"; // You can replace this with your preferred arrow icon
import docUrCodeScreenshot from "../assets/codeexplain2.webp"; // Replace with your screenshot image
import architectureDiagram from "../assets/frontgantry.webp"; // Replace with an architecture diagram image

const DocUrCodeExplainer = () => {
  return (
    <div className="bg-neutral-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">DocUrCODE</p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            Annotated Code Explanation Tool
          </p>
          <p className="text-lg sm:text-2xl font-bold text-white-500 mt-4">
            Built @ HackTheNorth 2023
          </p>

          <img
            className="max-w-full mx-auto mt-8 rounded-2xl"
            src={docUrCodeScreenshot}
            alt="Screenshot of DocUrCODE"
          />
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6 text-red-500">
            <br></br>{" "}
            <a
              href="https://docurcode.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
                Try DocUrCODE
                <FaArrowRight className="ml-2" />
              </button>
            </a>
            <br></br>This is an inprogress project, so there are some bugs left
            to iron out (namely lack of mobile responsiveness and non-python
            highlighting), but as I'm busy with class in the meantime enjoy the
            sneak peak.
          </p>
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            DocUrCODE allows you to paste any type of code into a chat box and
            then interactively navigate an annotated version of that code. Built
            alongside Johnathon Xie, Varun Parikh, and Zain Salman, the
            interactive exploration page presents two columns that you can
            independently scroll through: the right column displays the original
            code, while the left column presents a list of annotations that
            explain the code. Each annotation specifies the lines of code that
            it explains (e.g., 12-15), and clicking on an annotation will
            highlight its corresponding sections of code. There are three levels
            of detail that the code can be annotated in: detailed, normal, or
            overview. DocUrCODE can process up to 60,000 characters of code
            input, across any programming language.
          </p>

          <a
            href="https://devpost.com/software/doc_ur_code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
              Devpost
              <FaArrowRight className="ml-2" />
            </button>
          </a>

          <a
            href="https://youtu.be/WVcPCwQh6ig"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-bold px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-700 hover:text-white duration-300 ease-in-out flex items-center mt-8 mx-auto">
              Video Demo
              <FaArrowRight className="ml-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocUrCodeExplainer;
