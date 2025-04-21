import { useState, useEffect } from "react";
import "./Hero.css"; // Ensure this file exists
import slide1 from "../assets/sample1.jpg";
import slide2 from "../assets/sample2.jpg";
import slide3 from "../assets/sample3.jpg";

const images = [slide1, slide2, slide3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changes image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-slideshow"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="hero-content text-center text-white">
          <h1 className="display-3 fw-bold mb-4">Bringing Words to Life</h1>
          <p className="fs-4 mb-5">Through the Art of Calligraphy</p>
          <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
