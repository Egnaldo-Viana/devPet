import React from 'react';
import { CartContext } from '../../contexts/CartContext';
import { api } from '../../service';
import style from './home.module.css';
import { Link } from 'react-router-dom';

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItemCart } = React.useContext(CartContext);
  const [products, setProducts] = React.useState<ProductProps[]>([]);

  React.useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
    }
    getProducts();
  }, []);

  function handleAddCartItem(product: ProductProps) {
    addItemCart(product);
  }

  return (
    <div className={style.divContainer}>
      <main className={style.mainContainer}>
        <h1 className={style.title}>Produtos em alta</h1>

        <div className={style.productsGrid}>
          {products.map((product) => (
            <section key={product.id} className={style.productCard}>
              <Link to={`/cart/${product.id}`}>
                <img
                  className={style.productImage}
                  src={product.cover}
                  alt={product.title}
                />
              </Link>
              <p className={style.productTitle}>{product.title}</p>
              <div className={style.productAction}>
                <strong className={style.productPrice}>
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>
                <button
                  className={style.cartButton}
                  onClick={() => handleAddCartItem(product)}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
