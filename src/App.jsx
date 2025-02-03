import { useState } from 'react';
import './App.css';
import DarkModeToggle from './Theme/theme';
import { TrData } from './Data/Data';
import HeroSection from './HeroSection/heroSection';

function App() {
  const { socials } = TrData.heroSection;

  return (
    <>
      <HeroSection />
      <DarkModeToggle />
    </>
  );
}

export default App;
