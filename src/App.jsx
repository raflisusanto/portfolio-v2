import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ProjectsSection from "./components/section/ProjectsSection";
import AboutSection from "./components/section/AboutSection";
import HomeSection from "./components/section/HomeSection";
import FooterSection from "./components/section/FooterSection";
import Particles, {
  ParticlesProvider,
  useParticlesProvider,
} from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "./components/config/particles-config";
import Loading from "./components/ui/Loading";

// Registers all tsParticles plugins once, before any <Particles> renders.
const initParticles = async (engine) => {
  await loadFull(engine);
};

const Content = () => {
  const { loaded } = useParticlesProvider();

  // Add some loading before particles loaded
  if (!loaded) return <Loading />;

  return (
    <>
      {/* Particles */}
      <Particles
        id="tsparticles"
        options={particlesConfig}
        className="absolute z-[-2]"
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
};

const App = () => (
  <ParticlesProvider init={initParticles}>
    <Content />
  </ParticlesProvider>
);

export default App;
