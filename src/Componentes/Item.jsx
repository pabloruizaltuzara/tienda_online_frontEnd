import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.js';
import ItemCount from './ItemCount.jsx';

import './styles/Item.css';

const Item = (item) => {

  const cartContext = useContext(CartContext);
  const { addToCart} = cartContext;

  const onAdd = (qty) => {
    addToCart(item, qty)
  }

  return (
    <article className="product-card">
      <img className="product-card__image" src={item.thumbnail} alt="" />
      <Link to={`/detail/${item.id}`}>
          <h3 className="product-card__name">{item.name}</h3>
      </Link>
      
      <span className="product-card__name">${item.price}</span>

      <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
    </article>
  );
};

export default Item;
