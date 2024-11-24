import React, { useEffect } from 'react';
import { loadSlim } from "tsparticles-slim";
import { tsParticles } from "tsparticles-engine";
import { particlesConfig } from './particlesConfig';
import './Content.css';

const Content: React.FC = () => {
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

  return (
    <div className="content">
      <div id="tsparticles" className="particles-background" />
      <div className="content-container">
        <div className="content-left">
          <h2 className="animated-title">欢迎来到ICG GAMING</h2>
          <p>ICG GAMING顶级包网方案，拥有15年该领域经验，我们为您提供专业的一站式解决方案。让您的线上博彩业务快速上线、高效运作、灵活定制，助力您在市场中脱颖而出！</p>
          <a href="https://t.me/icggaming_gary" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">立即开始</button>
          </a>
        </div>
        <div className="content-right">
          <div className="image-container">
            <img src="./images/Gary-chinese.png" alt="ICG Gaming Platform Preview" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
