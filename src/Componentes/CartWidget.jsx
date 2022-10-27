import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  //la lógica va siempre antes del return

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <div className="cart-widget">
      {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
      <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
      <div className="qty-display">{cart.length}</div>
    </div>
  );
};

export default CartWidget;
