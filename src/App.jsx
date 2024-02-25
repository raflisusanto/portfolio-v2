import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Background from "./components/background/Background";
import BackgroundFlipped from "./components/background/BackgroundFlipped";
// import ParticlesBackground from "./components/particles/ParticlesBackground";

const App = () => {
  return (
    <>
      {/* <ParticlesBackground /> */}
      <Sidebar />
      <Navbar />
      <section id="Home" className="h-screen">
        <Background />
        <Hero />
      </section>
      <section id="About" className="h-screen">
        <h1>About</h1>
      </section>
      <section id="Projects" className="h-screen">
        <h1>Projects</h1>
      </section>
      <section id="Contact" className="h-screen">
        <h1>Contact</h1>
      </section>
      {/* <footer>
        <h1>Footer</h1>
      </footer> */}
    </>
  );
};

export default App;
