import React from 'react';
import react from './assets/react.png';


const Footer = () => (
    <div className="footer">
      <p>developed by <b>Bakuliak</b></p>
      <p>
          powered by
      <img src={react} className="react" alt="logo" />
      </p>
    </div>
  );


export default Footer;