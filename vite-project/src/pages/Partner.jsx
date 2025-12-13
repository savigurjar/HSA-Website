import React from "react";
import "../style/Partner.css";
// import partner1 from "../assets/partner1.png";
// import partner2 from "../assets/partner2.png";
// import partner3 from "../assets/partner3.png";
// import partner4 from "../assets/partner4.png";

export default function Partners() {
  return (
    <div className="section partners-section">
      <div className="container">
        <h2>Our Partners</h2>
        <p className="partners-intro">
          We proudly collaborate with esteemed organizations and institutions to provide top-quality sports training and opportunities.
        </p>

        <div className="partners-grid">
          <div className="partner-card">
            <img src={partner1} alt="Partner 1" />
          </div>
          <div className="partner-card">
            <img src={partner2} alt="Partner 2" />
          </div>
          <div className="partner-card">
            <img src={partner3} alt="Partner 3" />
          </div>
          <div className="partner-card">
            <img src={partner4} alt="Partner 4" />
          </div>
        </div>
      </div>
    </div>
  );
}
