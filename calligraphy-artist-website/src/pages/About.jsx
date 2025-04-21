import React from "react";
import AboutHero from "../components/AboutHero";
import AboutContent from "../components/AboutContent";
import AboutCTA from "../components/AboutCTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <AboutHero />
      <AboutContent />
      <AboutCTA />
    </div>
  );
};

export default About;
