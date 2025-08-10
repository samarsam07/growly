import React from "react";
import { FaRobot } from "react-icons/fa";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Create High-Converting Ads in Seconds — Powered by AI
          </h1>
          <p className="hero-subtitle">
            No design or copywriting needed. Just enter your product and let
            Growly do the rest.
          </p>
          <button className="cta-button" onClick={scrollToForm}>
            Book Free Demo
          </button>
          <div className="hero-image">
            <div className="placeholder-image">
              <FaRobot
                style={{
                  fontSize: "2.5rem",
                  verticalAlign: "middle",
                  marginRight: "0.5rem",
                }}
              />{" "}
              AI Ad Generator
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
