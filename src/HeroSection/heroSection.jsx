import React from 'react';
import { TrData } from '../Data/Data';
import './heroSection.css'
import DarkModeToggle from '../Theme/theme';



export default function HeroSection() {
  const { greeting, intro, profilImg, socials } = TrData.heroSection;

  return (
    
    <section className="bg-[linear-gradient(to_right,#4731D3_70%,#CBF281_30%)] fixed top-0 left-0 w-full h-120 text-white py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      
      <div className="absolute left-[76%] -translate-x-1/2 top-3 ">
        <DarkModeToggle />
      </div>
      
      <div className="text-center w-3/5 ml-[30%] text-left md:text-left top-3">
      <h2 className="text-4xl font-bold fixed top-15 left-10">{greeting} </h2>
      <p className="mt-4 text-lg">{intro}</p>
      <div className="mt-6 flex justify-center md:justify-start space-x-4">
      {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                <img src={social.logo} alt={social.alt_text} width={46} />
                </button>
              </a>
            ))}
      </div>
      </div>
      <img src={profilImg} alt="Profil Resmi" className="w-36 h-36 rounded-full border-4 border-white mt-6 md:mt-0" />
    </section>
  );
}


/*<section className="bg-purple-700 text-white py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
      <h1 className="text-4xl font-bold">{greeting} 👋</h1>
      <p className="mt-4 text-lg">{intro}</p>
      <div className="mt-6 flex justify-center md:justify-start space-x-4">
      {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.logo} alt={social.alt_text} width={30} />
              </a>
            ))}
      </div>
      </div>
      <img src={profilImg} alt="Profil Resmi" className="w-36 h-36 rounded-full border-4 border-white mt-6 md:mt-0" />
    </section> */

    