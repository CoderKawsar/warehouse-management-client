import React from "react";
import "./FooterBottom.css";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-bottom">
      &copy; {currentYear} Deposito All Rights Reserved.
    </footer>
  );
};

export default FooterBottom;
