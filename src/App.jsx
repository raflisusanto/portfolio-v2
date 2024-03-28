import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ProjectsSection from "./components/section/ProjectsSection";
import AboutSection from "./components/section/AboutSection";
import HomeSection from "./components/section/HomeSection";
import FooterSection from "./components/section/FooterSection";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "./components/config/particles-config";
import Loading from "./components/ui/Loading";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    // Particles has loaded
    return (
      <>
        {/* Particles */}
        <Particles
          id="tsparticles"
          options={particlesConfig}
          className="absolute -z-[2]"
        />

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
  }

  // Add some loading before particles loaded
  return <Loading />;
};

export default App;
