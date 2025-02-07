
import './App.css';
import DarkModeToggle from './Theme/theme';
import { TrData } from './Data/Data';
import HeroSection from './HeroSection/heroSection';
import { ThemeProvider } from './context/themeContext';
import "tailwindcss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import Skills from './Skills/Skills';
import ProfileSection from './Profil/Profil';
import ProjectsSection from './Projects/Projects';
import Footer from './Footer/Footer';

function App() {
  
  const { socials } = TrData.heroSection;
  useEffect(() => {
    
    toast.success("Hoş Geldiniz! 🎉", {
      position: "top-right",
      autoClose: 3000, // 3 saniye sonra kaybolur
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }, []);

  return (
    <> 
     <ThemeProvider>

      
        <div>
          
          <HeroSection/>
          <Skills/>
          <ProfileSection/>
          <ProjectsSection/>
          <Footer/>
          
          
          
          <ToastContainer />
          
        </div>
    </ThemeProvider>
      
    </>
  );
}

export default App;
