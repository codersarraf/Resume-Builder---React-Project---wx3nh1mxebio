import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cont">
        <div className="footer-left">
          <p>@{new Date().getFullYear()} ResumeBuilder.io</p>
        </div>
        <div className="footer_right">
          <p>@Copyright Amit Sarraf | codersarraf</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
