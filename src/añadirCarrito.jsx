import React from 'react';
import { useHistory } from 'react-router';

import './styles/Hero.css';

const Hero = ({ title }) => {

  let history = useHistory();

  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <img src="/src/logo_shop.jpg" alt=""  width="200px" height="200px"/>
          <p>
            ¡La mente muy clara 
          </p>
          <button 
            className="button-primary"
            onClick={()=>history.push('/products')}
          >
            Comprar
          </button>
        </article>
      </div>
    </section>
  );
};

export default Hero;