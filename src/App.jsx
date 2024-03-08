import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import ProjectsSection from "./components/section/ProjectsSection";
import AboutSection from "./components/section/AboutSection";
import HomeSection from "./components/section/HomeSection";
import FooterSection from "./components/section/FooterSection";

const App = () => {
  return (
    <>
      {/* Particles */}
      <ParticlesBackground />

      {/* Navigations */}
      <Sidebar />
      <Navbar />

      {/* Main Sections */}
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
};

export default App;
