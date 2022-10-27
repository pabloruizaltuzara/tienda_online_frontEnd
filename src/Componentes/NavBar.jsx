import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';


const NavBar = ({ background }) => {
  //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar
  const brand =
    'https://f.hubspotusercontent10.net/hub/206/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png';
  //la lógica va siempre antes del return
  return (
    <header className={`header background--${background}`}>
      
      <div className="header-container">
        
        {/* Botón de menú  */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
          <span>Menu</span>
        </div>

        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li className="products-item">
              <Link to="/products">
                Productos <span className="arrow"></span>
              </Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* logo de la marca */}
        <div className="logo-container">
          <Link to="/">
            <img src={brand} alt="logo" />
          </Link>
        </div>

        {/* cart widget */}
        <Link to="/cart">
          <CartWidget />
        </Link>
          
      </div>
    </header>
  );
};

export default NavBar;
