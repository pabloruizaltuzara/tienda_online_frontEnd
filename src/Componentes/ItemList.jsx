import React, { useEffect, useState } from 'react';
import Item from './Item';
import { getAllProductsFromDB } from '../helpers/getData.js';

import './styles/ItemList.css';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsFromDB(setProducts);
  }, []);

  return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  name={product.name}
                  thumbnail={product.thumbnail}
                  price={product.price}
                  stock={product.stock}
                  id={product.id}
                />
              </div>
            );
          })}
        </>
      ) : (
        <img className="load-beer" src={"https://media3.giom/media/2kSfEOhJJApaYXsRJ7/giphy.gif?cid=ecf05e478wmerfim14hkh2fgt8a2tlxlgtq0266hooh25q3&rid=giphy.gif&ct=g"} />
      )}
    </div>
  );
};

export default ItemList;
