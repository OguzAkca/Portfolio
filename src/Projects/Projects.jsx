import React from 'react'
import { TrData } from '../Data/Data';

export default function ProjectsSection() {


    const { projeBir, projeIki, footerSection } = TrData.projectSection;
  return (
    <section className="py-12 bg-green-200 text-center">
      <h2 className="text-3xl font-bold" >Projeler</h2>
      <div className="mt-6 space-y-6">
      {projeBir.map((proje, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
          <h3 className="text-2xl font-bold">{proje.baslik}</h3>
          <p className="mt-2">{proje.metin}</p>
          <div className="">
          <a href={proje.react} className="bg-black text-white px-4 py-2 rounded-lg">{proje.react}</a>
          
          <a href={proje.node} className="bg-blue-600 text-white px-4 py-2 rounded-lg">{proje.node}</a>
          
          </div>
          {proje.siteler.map((site, idx) => (
            <a key={idx} href={site.link} target="_blank" rel="noopener noreferrer">
              {site.alt_text}
            </a>
          ))}
        </div>
      ))}
      </div>
      <div className=""></div>
      {projeIki.map((proje, index) => (
        <div key={index}>
          <h3>{proje.baslik}</h3>
          <p>{proje.metin}</p>
          <p>{proje.react}</p>
          <p>{proje.redux}</p>
          <p>{proje.router}</p>
          <p>{proje.node}</p>
          {proje.siteler.map((site, idx) => (
            <a key={idx} href={site.link} target="_blank" rel="noopener noreferrer">
              {site.alt_text}
            </a>
          ))}
        </div>
      ))}
      
    </section>
  );
};



