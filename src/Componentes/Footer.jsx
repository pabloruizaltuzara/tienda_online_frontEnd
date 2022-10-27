import React from 'react';
import PaymentMethod from './presentationals/PaymentMethod';

import './styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>Proyecto eCommerce con React</p>
      <PaymentMethod />
    </footer>
  );
};

export default Footer;
