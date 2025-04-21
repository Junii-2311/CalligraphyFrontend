import React from "react";
import "../styles/About.css";

const AboutCTA = () => {
  return (
    <section className="about-cta">
      <h2>Let's Create Something Beautiful</h2>
      <p>Interested in custom calligraphy art? Get in touch today!</p>
      <a href="/contact" className="btn btn-primary">
        Contact Me
      </a>
    </section>
  );
};

export default AboutCTA;
