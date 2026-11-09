import Particles, {
  ParticlesProvider,
  useParticlesProvider,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "../config/particles-config";

// Registers the tsParticles features the config uses, once.
const initParticles = async (engine) => {
  await loadSlim(engine);
};

const ParticlesCanvas = () => {
  const { loaded } = useParticlesProvider();
  if (!loaded) return null;

  return (
    <Particles
      id="tsparticles"
      options={particlesConfig}
      className="absolute z-[-2]"
    />
  );
};

/** Decorative background. Lazy-loaded so it never delays the page content. */
const ParticlesBackground = () => (
  <ParticlesProvider init={initParticles}>
    <ParticlesCanvas />
  </ParticlesProvider>
);

export default ParticlesBackground;
