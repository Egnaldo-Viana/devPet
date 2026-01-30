import React from 'react';
import style from './cart.module.css';

import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export function Cart() {
  const { cart, total, addItemCart, removeItemCart } =
    React.useContext(CartContext);

  function handleTeste() {
    alert('compra finalizada');
  }

  return (
    <div className={style.cart}>
      <h1 className={style.cartTitle}>Seu carrinho de compras</h1>
      {cart.length === 0 && (
        <div className={style.emptyCart}>
          <p>Ops seu carrinho está vazio...</p>
          <Link to="/" className={style.emptyCartLink}>
            Acessar página home
          </Link>
        </div>
      )}

      <div className={style.cartWrapper}>
        <div className={style.container}>
          {cart.map((item) => (
            <section key={item.id} className={style.cartItem}>
              <img src={item.cover} alt={item.title} />

              <div className={style.cartInfo}>
                <p className={style.cartTitle}>{item.title}</p>
                <strong className={style.TotalInfo}>
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>
                <strong className={style.subInfo}>
                  Subtotal:{' '}
                  {item.total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>
              </div>

              <div className={style.cartActions}>
                <button
                  className={style.cartButton}
                  onClick={() => removeItemCart(item)}
                >
                  -
                </button>
                <span>{item.amount}</span>
                <button
                  onClick={() => addItemCart(item)}
                  className={style.cartButton}
                >
                  +
                </button>
              </div>
            </section>
          ))}
        </div>

        {cart.length !== 0 && (
          <div className={style.cartFinish}>
            <p className={style.total}>
              <span> Total: </span>
              <span className={style.subTotal}> {total}</span>
            </p>
            <button onClick={handleTeste} className={style.finish}>
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
