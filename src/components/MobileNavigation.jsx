import { useState } from 'react';
import './MobileNavigation.css';
import logoImg from '../assets/images/logo.svg';
import { FiChevronRight } from 'react-icons/fi'; // Importing the ChevronRight icon from react-icons/fi

const NavMobile = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <div>
      {/* Hamburger menu icon */}
      <div className={`nav-mobile-toggle ${showNav ? 'close' : ''}`} onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Navigation menu */}
      <div className={`nav-mobile ${showNav ? 'active' : ''}`}>
        {/* Close button (X) */}
        <div className="nav-close" onClick={closeNav}>
          <div className="x-line"></div>
          <div className="x-line"></div>
        </div>
        {/* Overlay for closing menu */}
        <div className="nav-mobile-overlay" onClick={toggleNav}></div>
        {/* Navigation links */}
        <div className="nav-container">
        <a href="./index.html" className="logo-link">  
          <img src={logoImg} alt="Logo" className={`nav-logo ${showNav ? 'active' : ''}`} /> </a>
          <ul className={`mobile-nav-list ${showNav ? 'active' : ''}`}>
            <li className="mobile-nav-item"><a href="#living" onClick={toggleNav}>LIVING <FiChevronRight /></a></li>
            <li className="mobile-nav-item"><a href="#dining" onClick={toggleNav}>DINING <FiChevronRight /></a></li>
            <li className="mobile-nav-item"><a href="#bedroom" onClick={toggleNav}>BEDROOM <FiChevronRight /></a></li>
            <li className="mobile-nav-item"><a href="#outdoor" onClick={toggleNav}>OUTDOOR <FiChevronRight /></a></li>
            <li className="mobile-nav-item"><a href="#lighting" onClick={toggleNav}>LIGHTING <FiChevronRight /></a></li>
            <li className="mobile-nav-item"><a href="#decor" onClick={toggleNav}>DECOR <FiChevronRight /></a></li>
            <li className="mobile-nav-item"><a href="#rugs" onClick={toggleNav}>RUGS <FiChevronRight /></a></li>
            <li className="mobile-nav-item"><a href="#office" onClick={toggleNav}>OFFICE <FiChevronRight /></a></li>
            <li className="mobile-nav-item"><a href="#sale" onClick={toggleNav}>SALE <FiChevronRight /></a></li>
            <li className="mobile-nav-item"><a href="#design" onClick={toggleNav}>DESIGN <FiChevronRight /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
