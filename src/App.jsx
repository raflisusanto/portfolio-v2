import { lazy, Suspense } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import FeaturedWork from "./components/section/FeaturedWork";
import ShippedApps from "./components/section/ShippedApps";
import ExperienceSection from "./components/section/ExperienceSection";
import SkillsSection from "./components/section/SkillsSection";
import CredentialsSection from "./components/section/CredentialsSection";
import ProjectsSection from "./components/section/ProjectsSection";
import FooterSection from "./components/section/FooterSection";
import BackToTop from "./components/ui/BackToTop";

// Loaded as a separate chunk after the page renders.
const ParticlesBackground = lazy(
  () => import("./components/background/ParticlesBackground")
);

const App = () => (
  <>
    <Suspense fallback={null}>
      <ParticlesBackground />
    </Suspense>

    <Sidebar />
    <Navbar />

    <main>
      <Hero />
      <FeaturedWork />
      <ShippedApps />
      <ExperienceSection />
      <SkillsSection />
      <CredentialsSection />
      <ProjectsSection />
    </main>
    <FooterSection />
    <BackToTop />
  </>
);

export default App;
