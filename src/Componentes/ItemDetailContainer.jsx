import React, { useEffect, useState } from 'react';
import { getProductById } from '../helpers/getData.js';
import ItemDetail from './ItemDetail';
import './styles/ItemDetailContainer.css';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id, setProduct);
  }, []);

  return (
    <section>
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;
