import { useState } from 'react';
import './Header.css'; // Import CSS for header styling
import MobileNavigation from './MobileNavigation';
import logo from '../assets/images/logo.svg';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className="header">
      <div className="MobileNavigation">
        <MobileNavigation />
      </div>
      <div className="search" onClick={toggleSearch}>
        {showSearch ? (
          <form className="search-form">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        ) : (
          <>
            {/* Search Icon */}
            <svg
              className={`icon icon--search ${showSearch ? 'hide' : ''}`}
              role="img"
              aria-label="Icon Search"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>SEARCH</desc>
              <circle
                cx="7"
                cy="7"
                r="6"
                stroke="currentColor"
                fill="transparent"
              ></circle>
              <line
                x1="10.3841"
                y1="11.6799"
                x2="14.8654"
                y2="17.0575"
                stroke="currentColor"
              ></line>
            </svg>
            <span className={`search-text ${showSearch ? 'hide' : ''}`}>
              SEARCH
            </span>
          </>
        )}
      </div>

      <div className="logo-container">
  <a href="./index.html" className="logo-link">  
    <img src={logo} alt="Logo" className="logo" />
  </a>
</div>
      
      <div className="icons">
        {/* Location Icon */}
        <svg
          className="icon icon--location"
          role="img"
          aria-label="Location"
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Icon Location</desc>
          <path d="M13 7C13 10.3137 7 17 7 17C7 17 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="currentColor"></path>
          <circle cx="7" cy="7" r="2.5" stroke="currentColor"></circle>
        </svg>

        {/* Account Icon */}
        <svg
          className="icon icon--account"
          role="img"
          aria-label="Icon Account"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Icon Account</desc>
          <circle cx="8.48047" cy="5" r="4" stroke="currentColor"></circle>
          <path d="M1.48047 17C1.48047 13.6863 4.61448 11 8.48047 11C12.3465 11 15.4805 13.6863 15.4805 17" stroke="currentColor"></path>
        </svg>

        {/* Heart Icon */}
        <svg
          className="icon icon--heart-inactive"
          role="img"
          aria-label="Icon heart"
          width="20"
          height="18"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Icon add to favorite</desc>
          <path d="M0.19043 6.21631C0.19043 3.19946 2.49481 0.981445 5.34517 0.981445C7.40304 0.981445 9.17491 2.20214 10.0036 3.96089C10.8338 2.20358 12.5945 0.981445 14.6547 0.981445C17.5038 0.981445 19.8094 3.1809 19.8094 6.21631C19.8094 7.7165 19.1925 9.12669 18.3117 10.3787C17.4298 11.6322 16.2607 12.7599 15.0982 13.7063C12.7733 15.5992 10.4098 16.819 10.2266 16.9122L9.99992 17.0275L9.77325 16.9122C9.58999 16.819 7.22652 15.5992 4.90161 13.7063C3.73912 12.7599 2.57002 11.6322 1.68815 10.3787C0.807304 9.12669 0.19043 7.7165 0.19043 6.21631ZM5.34517 1.98145C3.04633 1.98145 1.19043 3.75251 1.19043 6.21631C1.19043 7.4391 1.69462 8.64999 2.50602 9.80333C3.31639 10.9552 4.41073 12.0172 5.53298 12.9309C7.42223 14.469 9.34456 15.5501 9.99991 15.9017C10.6553 15.5501 12.5776 14.469 14.4669 12.9309C15.5891 12.0172 16.6834 10.9552 17.4938 9.80333C18.3052 8.64999 18.8094 7.4391 18.8094 6.21631C18.8094 3.73638 16.9547 1.98145 14.6547 1.98145C12.4268 1.98145 10.6066 3.77186 10.4994 6.03188L9.50033 6.0285C9.40862 3.77417 7.5759 1.98145 5.34517 1.98145Z" fill="currentColor"></path>
        </svg>

        {/* Cart Icon */}
        <svg
          className="icon icon--cart"
          role="img"
          aria-label="Icon Cart"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Icon Cart</desc>
          <path d="M11 7V4.42857C11 2.53502 9.65685 1 8 1C6.34315 1 5 2.53502 5 4.42857V7" stroke="currentColor"></path>
          <path d="M1 6H15L14.0667 17H1.93333L1 6Z" stroke="currentColor"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
