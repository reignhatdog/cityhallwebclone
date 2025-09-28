import React from "react";

export default function Services({ setSelectedService }) {
  return (
    <section id="offers" className="section alt-section">
      <div className="section-container">
        <h2 className="section-title">City Services</h2>
        <p className="section-description">
          Discover our programs and services designed to serve Quezon City residents.
        </p>
        <div className="services-grid">
          <div className="service-card clickable" onClick={() => setSelectedService("waste")}>
            <h3>Waste Management Program</h3>
            <p>
              Exchange <strong>plastic bottles and cans</strong> for <strong>rice or brooms</strong> using our points system!
            </p>
            <span className="click-hint">Click to calculate your points →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
