import React from 'react';
import './Hero.css';
import robotIcon from '../../assets/robot-icon.png';
import protectionIcon from '../../assets/icon1.svg';
import tailoredIcon from '../../assets/icon2.svg';
import heroImage from '../../assets/heroImage.png';

const Hero = () => {
  return (
    <section className="hero-container container">
      <div className="hero-left">
        <h1>Your AI-<br className="desktop-only"/>Powered<br className="desktop-only"/>Sales Coach</h1>
        
        <div className="robot-section">
          <img src={robotIcon} alt="AI Robot" className="robot-icon" />
          <p className="robot-text">Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</p>
        </div>
        
        <div className="stats-section">
          <div className="stat-card">
            <div className="icon-container">
              <img src={protectionIcon} alt="Protection" className="stat-icon" />
            </div>
            <div>
              <span className="stat-number">2000+</span>
              <span className="stat-text">Your protection</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="icon-container">
              <img src={tailoredIcon} alt="Tailored" className="stat-icon" />
            </div>
            <div>
              <span className="stat-number">7001+</span>
              <span className="stat-text">Provide tailored</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-right">
        <img src={heroImage} alt="AI Sales Coach" className="hero-main-image" />
        <div className="overlap-box">
          <div className="numbers-container">
            <span className="stat-number left-number color">721+</span>
            <span className="stat-number right-number color">1000+</span>
          </div>
          <span className="growth-text">Growth is our priority.</span>
          <p className="agency-description">As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;