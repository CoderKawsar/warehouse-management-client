import React from "react";

import "./FooterBottom.js";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footerBottom">
      &copy; {currentYear} Deposito All Rights Reserved.
    </footer>
  );
};

export default FooterBottom;
