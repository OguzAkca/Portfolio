
import './App.css';
import DarkModeToggle from './Theme/theme';
import { TrData } from './Data/Data';
import HeroSection from './HeroSection/heroSection';
import Skills from './Skills/Skills';

function App() {
  const { socials } = TrData.heroSection;

  return (
    <>
      <HeroSection />
      <Skills/>
      <DarkModeToggle />
    </>
  );
}

export default App;
