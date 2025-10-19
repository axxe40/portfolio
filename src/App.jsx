import Navbar from "./components/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillSection from "./components/sections/SkillSection";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillSection/>
        <ProjectsSection/>
        <AboutSection />
        <ContactSection />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}
export default App;
