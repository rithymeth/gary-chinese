import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="https://t.me/c/2126586273/88" className="telegram-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i>
          Join us on Telegram
        </a>
        <div className="qr-code">
          <img src="./images/icg-gary.png" alt="Telegram QR Code" loading="lazy" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
