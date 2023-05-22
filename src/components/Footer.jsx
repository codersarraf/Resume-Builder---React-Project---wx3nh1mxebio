import React from 'react';

const Footer = () => {
  return (
    <footer className="font-size:1.3rem;font-size:1.3rem;font-size:1.3rem;">
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
