import React from 'react';
import { api } from '../../service';
import type { ProductProps } from '../home';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import style from './details.module.css';

export function Details() {
  const { addItemCart } = React.useContext(CartContext);
  const navigate = useNavigate();

  const [product, setProducts] = React.useState<ProductProps>();

  const { id } = useParams();
  React.useEffect(() => {
    async function getDetail() {
      const response = await api.get(`/products/${id}`);
      setProducts(response.data);
    }

    getDetail();
  }, [id]);

  function addProductCart(product: ProductProps) {
    addItemCart(product);
    navigate('/cart');
  }

  return (
    <div>
      <main className={style.container}>
        {product && (
          <section className={style.section}>
            <div className={style.content}>
              <div>
                <img
                  className={style.productImagem}
                  src={product?.cover}
                  alt={product?.title}
                />
              </div>
              <div className={style.productInfo}>
                <p className={style.title}>{product?.title}</p>
                <p className={style.description}>{product?.description}</p>
                <div className={style.addCart}>
                  <strong className={style.price}>
                    {product?.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </strong>
                  <button
                    className={style.cartButton}
                    onClick={() => addProductCart(product)}
                  >
                    adicionar ao carrinho
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
