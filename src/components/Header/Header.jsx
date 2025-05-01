import React from 'react';
import './Header.css';
import logo from '../../assets/Logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
                        <li><a href="#consulting" onClick={() => setIsMenuOpen(false)}>Consulting</a></li>
                        <li><a href="#ai-coach" onClick={() => setIsMenuOpen(false)}>Ai Coach</a></li>
                    </ul>
                </nav>
            </div>
            <button className="get-started-btn">Get Started</button>
        </header>
    );
};

export default Header;