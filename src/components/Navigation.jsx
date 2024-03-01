// Navigation.jsx
import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [subMenuVisibility, setSubMenuVisibility] = useState({
    living: false,
    dining: false,
    bedroom: false,
    outdoor: false,
    lighting: false,
    decor: false,
    rugs: false,
    office: false,
    sale: false,
    design: false,
  });

  const toggleSubMenu = (itemName) => {
    setSubMenuVisibility((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('living')} onMouseLeave={() => toggleSubMenu('living')}>
          <a href="#living">LIVING</a>
          {subMenuVisibility.living && (
            <ul className="sub-menu">
              <li><a href="#living-furniture">Furniture</a></li>
              <li><a href="#living-decor">Decor</a></li>
              {/* Add more submenu items for Living as needed */}
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('dining')} onMouseLeave={() => toggleSubMenu('dining')}>
          <a href="#dining">DINING</a>
          {subMenuVisibility.dining && (
            <ul className="sub-menu">
              <li><a href="#dining-tables">Tables</a></li>
              <li><a href="#dining-chairs">Chairs</a></li>
              {/* Add more submenu items for Dining as needed */}
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('bedroom')} onMouseLeave={() => toggleSubMenu('bedroom')}>
          <a href="#bedroom">BEDROOM</a>
          {subMenuVisibility.bedroom && (
            <ul className="sub-menu">
              <li><a href="#beds">Beds</a></li>
              <li><a href="#dressers">Dressers</a></li>
              {/* Add more submenu items for Bedroom as needed */}
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('outdoor')} onMouseLeave={() => toggleSubMenu('outdoor')}>
          <a href="#outdoor">OUTDOOR</a>
          {subMenuVisibility.outdoor && (
            <ul className="sub-menu">
              {/* Add submenu items for Outdoor */}
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('lighting')} onMouseLeave={() => toggleSubMenu('lighting')}>
          <a href="#lighting">LIGHTING</a>
          {subMenuVisibility.lighting && (
            <ul className="sub-menu">
              {/* Add submenu items for Lighting */}
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('decor')} onMouseLeave={() => toggleSubMenu('decor')}>
          <a href="#decor">DECOR</a>
          {subMenuVisibility.decor && (
            <ul className="sub-menu">
              {/* Add submenu items for Decor */}
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('rugs')} onMouseLeave={() => toggleSubMenu('rugs')}>
          <a href="#rugs">RUGS</a>
          {subMenuVisibility.rugs && (
            <ul className="sub-menu">
              {/* Add submenu items for Rugs */}
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('office')} onMouseLeave={() => toggleSubMenu('office')}>
          <a href="#office">OFFICE</a>
          {subMenuVisibility.office && (
            <ul className="sub-menu">
              {/* Add submenu items for Office */}
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('sale')} onMouseLeave={() => toggleSubMenu('sale')}>
          <a href="#sale">SALE</a>
          {subMenuVisibility.sale && (
            <ul className="sub-menu">
              {/* Add submenu items for Sale */}
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={() => toggleSubMenu('design')} onMouseLeave={() => toggleSubMenu('design')}>
          <a href="#design">DESIGN</a>
          {subMenuVisibility.design && (
            <ul className="sub-menu">
              {/* Add submenu items for Design */}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
