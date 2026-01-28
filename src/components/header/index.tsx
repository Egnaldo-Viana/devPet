import React from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/pet-14-svgrepo-com.svg';
import cart from '../../assets/cart-8-svgrepo-com.svg';

import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const { cartAmount } = React.useContext(CartContext);

  return (
    <header className={style.container}>
      <nav className={style.navigate}>
        <Link to="/" className={style.link}>
          <img src={logo} alt="logo da página devPet" width={20} height={20} />
          <h1>DevPet</h1>
        </Link>
        <Link to="/cart" className={`${style.link} ${style.cart}`}>
          <img
            src={cart}
            alt="ícone do carrinho"
            width={40}
            height={40}
            className={style.cart}
          />
          <span>{cartAmount}</span>
        </Link>
      </nav>
    </header>
  );
}
