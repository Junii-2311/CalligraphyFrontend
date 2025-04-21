import React from "react";
import "../styles/About.css"; // Ensure this file is in styles
import aboutHero from "../assets/sample1.jpg";

const AboutHero = () => {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <h1 className="hero-title">About the Artist</h1>
    </section>
  );
};

export default AboutHero;
