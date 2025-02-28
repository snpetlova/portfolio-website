import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection.jsx";

function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
