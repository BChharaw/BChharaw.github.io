import Navbar from "./components/Navbar";
import Content from "./components/Content";
import About from "./components/About";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import ProjectsGoal from "./components/Projects-Goal";
import ProjectsUVC from "./components/Projects-UVCclean";
import ProjectsCarDetection from "./components/Projects-CarDetection";
import ProjectsGantry from "./components/Projects-Gantry";
import ProjectsEstimator from "./components/Projects-Estimator";
import ProjectsTorqueOptimizer from "./components/Projects-Torque";
import ProjectsBipedal from "./components/Projects-BiPedal";
import BluetoothSpeakerProject from "./components/Projects-Speaker1";
import BluetoothSpeakerProject2 from "./components/Project-Speaker2";
import ProjectsBipedalRL from "./components/Projects-RLbipedal";
import CarDesigner from "./components/Projects-CarDesigner";
import Crane from "./components/Projects-Crane";
import Dataset from "./components/Projects-DatasetGenerator";
import AutoencoderDescription from "./components/Projects-Autoencoder";
import Explainer from "./components/Projects-Explain";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Projects />}></Route>
        <Route path="/projects" element={<Projects />}></Route>

        <Route
          path="/experience/goalfortheday"
          element={<ProjectsGoal />}
        ></Route>
        <Route path="/experience/uvcclean" element={<ProjectsUVC />}></Route>
        <Route
          path="/experience/cardetection"
          element={<ProjectsCarDetection />}
        ></Route>
        <Route
          path="/experience/2axisgantry"
          element={<ProjectsGantry />}
        ></Route>
        <Route
          path="/experience/carvalueestimator"
          element={<ProjectsEstimator />}
        ></Route>
        <Route
          path="/experience/AI_car_designer"
          element={<CarDesigner />}
        ></Route>
        <Route
          path="/experience/torqueoptimizer"
          element={<ProjectsTorqueOptimizer />}
        ></Route>
        <Route path="/experience/bipedal" element={<ProjectsBipedal />}></Route>
        <Route
          path="/experience/adversarial_humanoid_walking"
          element={<ProjectsBipedalRL />}
        ></Route>
        <Route
          path="/experience/bluetoothspeakerversion1"
          element={<BluetoothSpeakerProject />}
        ></Route>
        <Route
          path="/experience/bluetoothspeakerversion2"
          element={<BluetoothSpeakerProject2 />}
        ></Route>
        <Route path="/experience/crane" element={<Crane />}></Route>
        <Route
          path="/experience/dataset_generator"
          element={<Dataset />}
        ></Route>
        <Route
          path="/experience/latent_space_trajectory_embedding"
          element={<AutoencoderDescription />}
        ></Route>
        <Route
          path="/experience/gptcodeexplainer"
          element={<Explainer />}
        ></Route>
         <Route
          path="/projects/goalfortheday"
          element={<ProjectsGoal />}
        ></Route>
        <Route path="/projects/uvcclean" element={<ProjectsUVC />}></Route>
        <Route
          path="/projects/cardetection"
          element={<ProjectsCarDetection />}
        ></Route>
        <Route
          path="/projects/2axisgantry"
          element={<ProjectsGantry />}
        ></Route>
        <Route
          path="/projects/carvalueestimator"
          element={<ProjectsEstimator />}
        ></Route>
        <Route
          path="/projects/AI_car_designer"
          element={<CarDesigner />}
        ></Route>
        <Route
          path="/projects/torqueoptimizer"
          element={<ProjectsTorqueOptimizer />}
        ></Route>
        <Route path="/projects/bipedal" element={<ProjectsBipedal />}></Route>
        <Route
          path="/projects/adversarial_humanoid_walking"
          element={<ProjectsBipedalRL />}
        ></Route>
        <Route
          path="/projects/bluetoothspeakerversion1"
          element={<BluetoothSpeakerProject />}
        ></Route>
        <Route
          path="/projects/bluetoothspeakerversion2"
          element={<BluetoothSpeakerProject2 />}
        ></Route>
        <Route path="/projects/crane" element={<Crane />}></Route>
        <Route
          path="/projects/dataset_generator"
          element={<Dataset />}
        ></Route>
        <Route
          path="/projects/latent_space_trajectory_embedding"
          element={<AutoencoderDescription />}
        ></Route>
        <Route
          path="/projects/gptcodeexplainer"
          element={<Explainer />}        ></Route>

      </Routes>
    </div>
  );
}

export default App;
