import React from 'react';
import { TrData } from '../Data/Data';

import './heroSection.css';

export default function HeroSection() {
  const { greeting, intro, profilImg, socials } = TrData.heroSection;

  return (
    <section className='hero'>
      {/* Başlık en üstte */}
      <header className='header'>
        <h1 className='baslik'>{greeting} 👋</h1>
      </header>

      {/* İçerik (Yazı ve Resim) */}
      <div className="part">
        {/* Sol taraftaki yazı */}
        <div>
          <p className='intro'>{intro}</p>
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

        {/* Sağ taraftaki resim */}
        <div className="foto-div">
          <img className='foto'src={profilImg} alt="Profil Resmi" />
        </div>
      </div>
    </section>
  );
}
