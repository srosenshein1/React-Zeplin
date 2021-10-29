import React from "react";
import "../App.css";
import "./HeroSection.css";

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
            <div className="form-container">
              <form className="register-form">
                <input
                  id="first-name"
                  className="form-field"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                />
                <input
                  id="last-name"
                  className="form-field"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                />
                <input
                  id="email"
                  className="form-field"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                <input
                  id="password"
                  className="form-field"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <button className="form-field" type="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
