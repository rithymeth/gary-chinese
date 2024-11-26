import React from 'react';
import { content } from './languageContent';
import './Footer.css';

interface FooterProps {
  language: 'en' | 'zh';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer>
      <div className="footer-content">
        <a href="https://t.me/icggaming_gary" className="telegram-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i>
          {content[language].footerText}
        </a>
        <div className="qr-code">
          <img src="./images/icg-gary.png" alt="Telegram QR Code" loading="lazy" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
