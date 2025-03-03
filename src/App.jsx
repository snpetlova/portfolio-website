import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import ProjectDetails from "./pages/projectDetails/projectDetails.jsx";


function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:projectId" element={<ProjectDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
