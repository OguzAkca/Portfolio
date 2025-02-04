import React from 'react';
import { TrData } from '../Data/Data';

import './heroSection.css'
export default function HeroSection() {
  const { greeting, intro, profilImg, socials } = TrData.heroSection;

  return (
    <section className='hero'>
      
      <div className="part">
      <h1 className='baslik'>{greeting} 👋</h1>
      <p className='intro'>{intro}</p>
      <img className='foto' src={profilImg} alt="Profil Resmi" width={150} />
      <div>
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
    </section>
  );
}


