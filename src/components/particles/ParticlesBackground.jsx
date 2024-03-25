import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particles-config";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesConfig}
        className="absolute -z-[2]"
      />
    )
  );
};

export default ParticlesBackground;
