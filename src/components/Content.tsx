import React, { useEffect, useState } from 'react';
import { loadSlim } from "tsparticles-slim";
import { tsParticles } from "tsparticles-engine";
import { particlesConfig } from './particlesConfig';
import { content } from './languageContent';
import Footer from './Footer';
import './Content.css';

const Content: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');

  useEffect(() => {
    const loadParticles = async () => {
      try {
        await loadSlim(tsParticles);
        await tsParticles.load("tsparticles", particlesConfig);
      } catch (error) {
        console.error("Error loading particles:", error);
      }
    };
    loadParticles();
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <>
      <div className="content">
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'en' ? '中文' : 'English'}
        </button>
        <div id="tsparticles" className="particles-background" />
        <div className="content-container">
          <div className="content-left">
            <h2 
              className="animated-title"
              data-content={content[language].title}
            >
              {content[language].title}
            </h2>
            <p>{content[language].description}</p>
            <a href="https://t.me/icggaming_gary" target="_blank" rel="noopener noreferrer">
              <button className="cta-button">{content[language].buttonText}</button>
            </a>
          </div>
          <div className="content-right">
            <div className="image-container">
              <img 
                src={language === 'en' ? "./images/Banner.png" : "./images/Banner.png"} 
                alt="ICG Gaming Platform Preview" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </div>
      <Footer language={language} />
    </>
  );
};

export default Content;
