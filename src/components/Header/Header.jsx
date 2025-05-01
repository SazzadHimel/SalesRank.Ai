import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/Logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (sectionId) => {
        setIsMenuOpen(false);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'pricing', 'consulting', 'ai-coach'];
            const scrollY = window.scrollY;

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section && section.offsetTop <= scrollY + 120) {
                    setActiveSection(sectionId);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header container">
            <div className="header-left">
                <div className="logo-container">
                    <img src={logo} alt="SalesRank.Ai Logo" className="logo-img" />
                </div>

                <button className="mobile-menu-button" onClick={toggleMenu}>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a onClick={() => handleNavClick("home")} className={activeSection === "home" ? "active" : ""}>Home</a></li>
                        <li><a onClick={() => handleNavClick("about")} className={activeSection === "about" ? "active" : ""}>About</a></li>
                        <li><a onClick={() => handleNavClick("pricing")} className={activeSection === "pricing" ? "active" : ""}>Pricing</a></li>
                        <li><a onClick={() => handleNavClick("consulting")} className={activeSection === "consulting" ? "active" : ""}>Consulting</a></li>
                        <li><a onClick={() => handleNavClick("ai-coach")} className={activeSection === "ai-coach" ? "active" : ""}>AI Coach</a></li>
                    </ul>
                </nav>
            </div>
            <button className="get-started-btn">Get Started</button>
        </header>
    );
};

export default Header;
