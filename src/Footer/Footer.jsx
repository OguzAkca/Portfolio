import React, { useState } from 'react';
import { TrData } from '../Data/Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.css'

const { title, message, gmail } = TrData.footerSection;

function Footer() {
  const handleCopy = () => {
    navigator.clipboard.writeText(gmail)
      .then(() => {
        toast.success('📋 Mail adresi başarıyla kopyalandı!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => console.error("Kopyalama hatası:", err));
  };

  return (
    <section className="footer-section">
        <div className="footer">
      <h1 className="baslik">{title}</h1>
      <p className="metin">{message}</p>
      <p onClick={handleCopy} className="email-text" style={{ cursor: 'pointer', color: '[#4731D]' }}>
        {gmail}
      </p>
      </div>
      
      {/* Toast Container burada */}
      <ToastContainer />
    </section>
  );
}

export default Footer;


