import React from 'react';
import { TrData } from '../Data/Data';
import './Projects.css';  

export default function ProjectsSection() {
  const { projeBir, projeIki, footerSection, proje1Img,proje2Img } = TrData.projectSection;

  return (
    <section className="projects-section">
      <h2 className="section-title">Projeler</h2>
      <div className="projects-container">
        {projeBir.map((proje, index) => (
          <div key={index} className="project-card">
            <img src={proje1Img} alt="" className="project-image" />
            <div className="p1-yazilar">
            <h3 className="project-title">{proje.baslik}</h3>
            <p className="project-description">{proje.metin}</p>
            <div className="project-links">
              <a href={proje.react} className="project-link project-link-react">{proje.react}</a>
              <a href={proje.node} className="project-link project-link-node">{proje.node}</a>
              <a href={proje.vercel} className="project-link project-link-node">{proje.vercel}</a>
            </div>
            <div className="links">
            {proje.siteler.map((site, idx) => (
              <a key={idx} href={site.link} target="_blank" rel="noopener noreferrer" className="project-site-link">
                {site.alt_text}
              </a>
            ))}
            </div>
            </div>
          </div>
        ))}
        
      </div>
      

      <div className="projects-container">
        {projeIki.map((proje, index) => (
          <div key={index} className="project-card">
            <img src={proje2Img} alt="" className="project2-image" />
            <div className="p1-yazilar">
            <h3 className="project-title">{proje.baslik}</h3>
            
            <p className="project-description">{proje.metin}</p>
            <div className="project-links">
              <a href={proje.react} className="project-link project-link-react">{proje.react}</a>
              <a href={proje.redux} className="project-link project-link-node">{proje.redux}</a>
              <a href={proje.router} className="project-link project-link-node">{proje.router}</a>
            </div>
            <div className="links">
            {proje.siteler.map((site, idx) => (
              <a key={idx} href={site.link} target="_blank" rel="noopener noreferrer" className="project-site-link">
                {site.alt_text}
              </a>
            ))}
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}

