import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import LessonObservations from "./pages/LessonObservations";
import LessonPlanning from "./pages/LessonPlanning";
import Activities from "./pages/Activities";
import LearningCenter from "./pages/LearningCenter";
import Feedback from "./pages/Feedback";
import Gallery from "./pages/Gallery";
import Reflection from "./pages/Reflection";
import FinalView from "./pages/FinalView";

function App() {
  return (
    <BrowserRouter basename="/cs-teaching-portfolio">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lesson-observations" element={<LessonObservations />} />
          <Route path="/lesson-planning" element={<LessonPlanning />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/learning-center" element={<LearningCenter />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/final-view" element={<FinalView />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;