import React from 'react';
import { EnData, TrData } from '../Data/Data';
import './Profil.css';  // CSS dosyasını import ettik
import { useLanguage } from '../context/languageContext';

export default function ProfileSection() {
  const { language } = useLanguage(); 
    const data = language === 'tr' ? TrData : EnData; 
  const { title, basicInfo, hakkimda, ortaResim, p1, p2, p3, p4 } = data.profileSection;

  return (
    <section className="profile-section">
      {/* Sol Kısım: Profil Bilgileri */}
      <div className="profile-info">
        <h2 className="profile-title">{title}</h2>
        {basicInfo.map((info, index) => (
          <div className="info-container" key={index}>
            <h3 className="info-title">{info.baslik}</h3>
            <ul className="info-list">
  <li>
    <p className="details"><strong>{p1}</strong></p> 
    <span className="detail-value">{info.dogumTarihi}</span>
  </li>
  <li>
    <p className="details"><strong>{p2}</strong></p>  
    <span className="detail-value">{info.ikamet}</span>
  </li>
  <li>
    <p className="details"><strong>{p3}</strong></p>  
    <span className="detail-value">{info.egitim}</span>
  </li>
  <li>
    <p className="details"><strong>{p4}</strong></p>  
    <span className="detail-value">{info.rol}</span>
  </li>
</ul>

          </div>
        ))}
      </div>

      {/* Orta Kısım: Fotoğraf */}
      <div className="profile-image-container">
        <img src={ortaResim} alt="Profile" className="profile-image" />
      </div>

      {/* Sağ Kısım: Hakkımda */}
      <div className="profile-about">
        {hakkimda.map((hakkimdaItem, index) => (
          <div key={index}>
            <h3 className="about-title">{hakkimdaItem.baslik}</h3>
            <p className="about-text">{hakkimdaItem.metinBir}</p>
            <p className="about-text">{hakkimdaItem.metinIki}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


