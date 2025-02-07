import React from 'react';
import { TrData } from '../Data/Data';


export default function ProfileSection () {
    const { title, basicInfo, hakkimda } = TrData.profileSection;
  
    return (
      <section className="bg-[#4731D3] text-white py-12 px-6 md:px-20 relative top- left-0 w-full  h-120 flex flex-col md:flex-row justify-between items-center">
        
        <div>
        <h2 className="text-3xl font-bold">{title}</h2>
          {basicInfo.map((info, index) => (
            <div className='infos' key={index}>
              <h3 className="info-baslik mt-4">{info.baslik}</h3>
              <ul className="mt-2 space-y-2">
                 <li>📅 Date of Birth: {info.dogumTarihi}</li>
                 <li>📍 Location: {info.ikamet}</li>
                 <li>🎓 Education: {info.egitim}</li>
                 <li>🖥 {info.rol}</li>
             </ul>
             
            </div>
          ))}
          {hakkimda.map((hakkimdaItem, index) => (
            <div key={index}>
              <h3>{hakkimdaItem.baslik}</h3>
              <p>{hakkimdaItem.metinBir}</p>
              <p>{hakkimdaItem.metinIki}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

