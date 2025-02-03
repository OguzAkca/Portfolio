import React from 'react';
import { TrData } from '../Data/Data';

export default function HeroSection() {
  const { greeting, intro, profilImg, socials } = TrData.heroSection;

  return (
    <section>
      <h1>{greeting}</h1>
      <p>{intro}</p>
      <img src={profilImg} alt="Profil Resmi" width={150} />
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
    </section>
  );
}
