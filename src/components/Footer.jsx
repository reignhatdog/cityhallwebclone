import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-wrapper small">
              <img src="/images/qclogo.png" alt="Quezon City Hall" className="logo" />
            </div>
            <span>Quezon City Hall</span>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#announcements">News</a>
            <a href="#offers">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Quezon City Hall.</p>
        </div>
      </div>
    </footer>
  );
}
