import React from "react";
import "../styles/About.css";
import profileImg from "../assets/Rafat_Hussain.jpg";

const AboutContent = () => {
  return (
    <section className="about-content">
      <div className="about-container">
        <img src={profileImg} alt="Artist" className="about-image" />
        <div className="about-text">
          <h2>Meet the Artist</h2>
          <p>
            Welcome to my world of calligraphy! I'm a passionate artist who
            loves bringing words to life through elegant strokes and intricate
            designs. With years of experience, I specialize in modern and
            traditional calligraphy, crafting stunning artworks that tell a
            story.
          </p>
          <p>
            Each piece I create is made with love and precision, capturing the
            beauty of the written word. Whether it's a custom project or a
            unique design, I pour my heart into every detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
