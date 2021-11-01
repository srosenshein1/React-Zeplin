import React from "react";
import "../App.css";
import "./FormSection.css";

function FormSection() {
  return (
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
  );
}

export default FormSection;
