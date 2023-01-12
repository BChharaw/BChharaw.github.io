import Navbar from "./components/Navbar";
import Content from "./components/Content";
import About from "./components/About";
import Projects from "./components/Projects";
import {Routes, Route} from 'react-router-dom';
import ProjectsGoal from "./components/Projects-Goal";
import ProjectsUVC from "./components/Projects-UVCclean";
import ProjectsCarDetection from "./components/Projects-CarDetection";
import ProjectsGantry from "./components/Projects-Gantry";
import ProjectsEstimator from "./components/Projects-Estimator";

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/goalfortheday" element={<ProjectsGoal />}></Route>
          <Route path="/projects/uvcclean" element={<ProjectsUVC />}></Route>
          <Route path="/projects/cardetection" element={<ProjectsCarDetection />}></Route>
          <Route path="/projects/2axisgantry" element={<ProjectsGantry />}></Route>
          <Route path="/projects/carvalueestimator" element={<ProjectsEstimator />}></Route>

        </Routes>
   
      </div>
  );
}

export default App;
