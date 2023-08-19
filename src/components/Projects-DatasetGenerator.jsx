import React from 'react';
import dataset from "../assets/dataset.webp"
import rotation from "../assets/rotationpose.gif"

const Dataset = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-neutral-900 text-white bg-cover bg-fixed bg-center pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl sm:text-6xl font-bold mt-4">
            Library for Generating and Human Pose Datasets from Videos
          </p>
          <p className="text-lg sm:text-2xl font-bold text-blue-500 mt-4">
            A library that can convert videos to 3D pose datasets with all the data processing built in!
          </p>
          <img className="max-w-full mx-auto mt-8 rounded-2xl" src={dataset} alt="Robot Pose Estimation" />
          <p className="text-base sm:text-lg max-w-md mx-auto mt-6">
            Aboard <a href="https://www.goodlabs.studio/" className="text-blue-500" target="_blank" rel="noopener noreferrer">Goodlabs Studio's</a> Team Robbie, <a target="_blank" href="https://www.linkedin.com/in/ethan-hemeon-119bb3269/" className="text-blue-500">
              Ethan Hemeon
            </a> and I developed a dataset creation tool for human gait poses. Leveraging the MeTRAbs Absolute 3D Human Pose neural network, we developed a library which was capable of taking an input video and spiting out a dataset with all of the 3D poses within each frame. <br></br><br></br>In other words, this library efficiently converts videos into expansive datasets of human poses.
            <br></br>    <img className="max-w-2/3 mx-auto mt-8 rounded-2xl" src={rotation} alt="Robot Pose Estimation" />
<br></br>It encompasses a spectrum of functionalities, including specific pose visualization, vectorization, devectorization, normalization, anomaly detection, and optimized data storage and modification techniques. This framework was designed to streamline the development for the machine learning system aboard Robbie the humanoid, all within a concise and robust codebase.<br></br>
            <br></br> This library which consists of two classses allows us to take videos of specific actions we want Robbie our humanoid to learn, and it will develop a dataset which is ready for training aboard the <a target="_blank" href="https://bchharaw.github.io/#/experience/adversarial_humanoid_walking" className="text-blue-500">machine learning pipeline </a>the architecture of which I designed.
          </p>

          <div className="flex justify-center"> 
  <div className="flex flex-wrap justify-center mt-2 gap-6 md:gap-8 lg:gap-12">
    <div className="w-full">
      <div className="bg-neutral-200 text-neutral-900 p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Features of PoseEstimation Class</h2>
        <ul className="list-disc list-inside pl-4 md:pl-6">
          <li>Loads a pre-trained model based on image complexity from the MeTRAbs Absolute 3D Human Pose API.</li>
          <li>Efficiently downloads and extracts the pre-trained model if not available locally.</li>
          <li>Loads and decodes images or videos from file paths.</li>
          <li>Visualizes and detects poses in images, highlighting joints and skeletons.</li>
          <li>Offers options to visualize and save the processed images with detected poses.</li>
          <li>Provides methods to process images and return 3D pose information.</li>
        </ul>
      </div>
    </div>
    <div className="w-full">
      <div className="bg-neutral-200 text-neutral-900 p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Features of DataPipeline Class</h2>
        <ul className="list-disc list-inside pl-4 md:pl-6">
          <li>Manages data processing and manipulation for 3D pose estimation.</li>
          <li>Loads and processes data from files in various formats.</li>
          <li>Saves 3D pose data to files in NumPy format.</li>
          <li>Provides visualization capabilities for 3D poses in images.</li>
          <li>Offers methods for visualizing and saving 3D poses as JPG images.</li>
          <li>Facilitates data integrity checks and manipulation.</li>
          <li>Processes and converts data using various transformations (centering, rotation, vector reshaping).</li>
          <li>Handles data conversion, flattening, and restructuring.</li>
        </ul>
      </div>
    </div>

  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Dataset;
