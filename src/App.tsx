import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import { Details } from './pages/details';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'cart/:id',
        element: <Details />,
      },
    ],
  },
]);

export { router };
