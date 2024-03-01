import './Hero.css'; // Import CSS for styling

import topImage from '../assets/images/hero1.jpg';
import bottomImage from '../assets/images/hero2.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="top-section">
        <img src={topImage} alt="Top Image" />
        <div className="hero-text">
          <h2>INTRODUCING</h2>
          <h1>OUTDOOR 2024</h1>
          <button className="shop-button">SHOP THE COLLECTION</button>
        </div>
      </section>
      <section className="bottom-section">
        <img src={bottomImage} alt="Bottom Image" />
        <div className="bottom-text">
          <p>Discover the collection designed for distinction, durability, and unforgettable moments.</p>
          <button className="shop-button">SHOP OUTDOOR</button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
