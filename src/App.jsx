import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="relative z-0 bg-[#050816] min-h-screen overflow-x-hidden md:overflow-x-visible cursor-default">
      <CustomCursor />
      <Navbar />
      <div className="relative z-0">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
