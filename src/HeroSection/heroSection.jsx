import React from 'react';

import { TrData, EnData } from '../Data/Data'; // Türkçe ve İngilizce verileri içeri aktar
import './heroSection.css';
import DarkModeToggle from '../Theme/theme';
import { useLanguage } from '../context/languageContext';


export default function HeroSection() {
  const { language } = useLanguage(); // dil bilgisini al
  const data = language === 'tr' ? TrData : EnData; // dil seçimine göre veri seç

  const { greeting, intro, altText, profilImg, socials } = data.heroSection;
  

  return (
    <section className="bg-[linear-gradient(to_right,#4731D3_70%,#CBF281_30%)] relative top-0 left-0 w-full h-120 text-white py-12 px-6 md:px-20 flex flex-col md:flex-row  items-center">
      <div className="absolute left-[76%] -translate-x-1/2 top-3">
        <DarkModeToggle />
      </div>
      <div className="yazilar">
        <div className="text-center w-70/100 ml-[30%] text-left md:text-left top-3">
          <div className="basliklar">
            <h2 className="h-greeting">{greeting}</h2>
            <h2 className="h-intro">{intro}</h2>
          </div>
          <div className="intronun">
            <p className="mt-4 text-lg text-white">{altText}</p>
          </div>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btns">
                  <div className="social-item">
                    <img src={social.logo} alt={social.alt_text} width={46} />
                    <span>{social.alt_text}</span>
                  </div>
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
      <img src={profilImg} alt="Profil Resmi" className="profil-img" />
    </section>
  );
}
