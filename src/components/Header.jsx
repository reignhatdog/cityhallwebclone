import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-wrapper">
          <img src="/images/qclogo.png" alt="Quezon City Hall Logo" className="logo" />
        </div>
        <div className="title-section">
          <h1 className="title">Quezon City Hall</h1>
          <p className="subtitle">Quezon City Hall Website</p>
        </div>
      </div>
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#announcements" className="nav-link">News</a>
        <a href="#offers" className="nav-link">Services</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}
