import React from "react";
import { Link } from "react-router-dom";
import MyGoal from "../assets/mygoalisimg.webp";
import UVCC from "../assets/outer-prototype.webp";
import Car from "../assets/car-tracking.gif";
import Gantry from "../assets/keyboard-typer.gif";
import TFLRestimator from "../assets/CarEstimatorModel.webp";
import torqueoptimizer from "../assets/torqueoptimizer.webp";
import robot from "../assets/robbie.webp"
import speaker1image1 from "../assets/speaker1image1.webp"
import speaker2image2 from "../assets/speaker2image2.webp"
import crane from "../assets/crane.webp"
import RL from "../assets/RL.webp"
import dataset from "../assets/dataset.webp"
import latentspace from "../assets/latentspace2.gif"
import explain from "../assets/codeexplain2.webp"
const tailwindStyles = {
  projectCard:
  "relative overflow-hidden group transform-gpu duration-500 ease-in-out rounded-lg shadow-md",
  image: "w-full h-72 bg-center bg-cover rounded-lg ",
  title: "text-xl font-semibold text-white mb-2",
  technologies: "mb-4 font-bold ",
  overlayBox: "absolute inset-0 rounded-lg ",
  textContainer: "absolute inset-0 p-4 flex flex-col justify-end",
  container: "bg-neutral-900 min-h-screen py-20 bg-cover bg-fixed bg-center",
  grid:
    "container  mx-auto max-w-7xl px-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    infoBox: "absolute bottom-2 left-2 p-2 bg-black bg-opacity-90 text-white rounded-md",
    hoverOverlay: "absolute inset-0 rounded-lg bg-black bg-opacity-0 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-50",

  };
  
  const projectCard = (image, title, technologies) => (
    <div className={`${tailwindStyles.projectCard} relative rounded-lg shadow-md overflow-hidden group transform-gpu duration-500 ease-in-out hover:shadow-lg`}>
  
      <div className={`${tailwindStyles.image} w-full h-72 bg-center bg-cover relative`} style={{ backgroundImage: `url(${image})` }}>
        <div className={tailwindStyles.hoverOverlay}></div> {/* New hover overlay */}
        <div className={`${tailwindStyles.infoBox} w-2/3`}>
          <h2 className="text-lg md:text-base lg:text-sm font-semibold">{title}</h2>
          <p className="text-base md:text-sm lg:text-xs text-blue-400 mt-1">{technologies}</p>
        </div>
      </div>
    </div>
  );
  
const Projects = () => {
  window.scrollTo(0, 0);
  return (
    <div className={tailwindStyles.container}>
      <div className={tailwindStyles.grid}>
        <Link to="/experience/latent_space_trajectory_embedding">
          {projectCard(
            latentspace,
            "Autoencoder Network for Dimentionality Reduction of Human Poses",
            "(Python, TensorFlow, MatPlotLib, Numpy)"
          )}
        </Link>
        <Link to="/experience/dataset_generator">
          {projectCard(
            dataset,
            "Library for Generating and Human Pose Datasets from Videos",
            "(Python, OpenCV, MatPlotLib, Numpy)"
          )}
        </Link>
        <Link to="/experience/adversarial_humanoid_walking">
          {projectCard(
            RL,
            "Adversarial Reinforcement Learning Algorithm for Humanoids",
            "(Python, TensorFlow, and PyTorch)"
          )}
        </Link>
        <Link to="/experience/bipedal">
          {projectCard(
            robot,
            "Bipedal Walking Robot",
            "(C++, Python, and Fusion360)"
          )}
        </Link>

        <Link to="/experience/carvalueestimator">
          {projectCard(
            TFLRestimator,
            "Regression Car Value Estimator",
            "(TensorFlow in Python)"
          )}
        </Link>
        <Link to="/experience/torqueoptimizer">
          {projectCard(torqueoptimizer, "Robotic Joint Optimizer", "(C++)")}
        </Link>
        <Link to="/experience/2axisgantry">
          {projectCard(
            Gantry,
            "High Precision Gantry",
            "(C with RobotC library)"
          )}
        </Link>
        <Link to="/experience/cardetection">
          {projectCard(
            Car,
            "Car Detection Algorithm",
            "(Machine Vision in C++)"
          )}
        </Link>
        <Link to="/experience/uvcclean">
          {projectCard(
            UVCC,
            "Water Disinfection System",
            "(JS, HTML/CSS, and C++)"
          )}
        </Link>
        <Link to="/experience/bluetoothspeakerversion2">
          {projectCard(
            speaker2image2,
            "Bluetooth Speaker (V.2)",
            "(Circuits, Fusion360, 3D Printing)"
          )}
        </Link>
        <Link to="/experience/crane">
          {projectCard(crane, "RC Robotic Crane", "(Tron Day Project)")}
        </Link>
        <Link to="/experience/goalfortheday">
          {projectCard(MyGoal, "Goal Tracker", "(JavaScript and HTML/CSS)")}
        </Link>
        <Link to="/experience/bluetoothspeakerversion1">
          {projectCard(
            speaker1image1,
            "Bluetooth Speaker (V.1)",
            "(Circuits, SolidWorks, 3D printing)"
          )}
        </Link>
        <Link to="/experience/gptcodeexplainer">
          {projectCard(
            explain,
            "GPT Code Explainer (in progress!)",
            "(OpenAI Rest API, Prompt Engineering, React)"
          )}
        </Link>
      </div>
    </div>
  );
}

export default Projects;
