import React from "react";
import "../App.css";
import "./HeroSection.css";
import "./FormSection.css";
import FormSection from "./components/FormSection";

function HeroSection() {
  return (
    <div className="hero-section">
      <h2 className="hero-heading">Create the best Norway Wedding Registry</h2>
      <div className="hero-container">
        <div className="account">
          <div className="content">
            <div className="description">
              <p>
                Get exactly what you need to settle into married life! Add gifts
                from any site or store that ships right to Norway. To get
                started, all you need is a FREE MyRegistry account. Sign up now!
              </p>
            </div>
            <FormSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
