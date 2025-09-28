import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to Quezon City Hall</h2>
          <p className="hero-description">
            Quezon City Hall. Stay updated with news, programs, and city services for all residents.
          </p>
          <div className="hero-actions">
            <a href="#announcements" className="cta-button primary">Latest News</a>
            <a href="#offers" className="cta-button secondary">City Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
