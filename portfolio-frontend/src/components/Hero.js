import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../animations/hero-animation.json";
import "../App.css";

const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Kunal Harinkhede</span>
        </h1>
        <p className="hero-subtitle">MERN Stack Developer | Web Enthusiast</p>
        <button onClick={handleScrollToContact} className="hero-button">
          Contact Me
        </button>
      </div>
      <div className="hero-animation">
        <Lottie animationData={heroAnimation} loop={true} />
      </div>
    </section>
  );
};

export default Hero;
