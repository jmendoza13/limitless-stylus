import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer class="fixed-bottom navbar navbar-expand-lg bg-light">
      <Link to='/AboutUs'>About Us</Link>
      &nbsp; | &nbsp;
      <Link to='/FAQ'>FAQ</Link>
      &nbsp; | &nbsp;
      <Link to='/PrivacyPolicy'>Privacy Policy</Link>
      &nbsp; | &nbsp;
      <Link to='/ReturnPolicy'>Return Policy</Link>
      &nbsp; | &nbsp;
      
    </footer>
  );
}

export default Footer;