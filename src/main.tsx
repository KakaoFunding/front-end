import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'styles/global.css';
import 'styles/hardreset.css';

import Auth from 'pages/Auth';
import CategoryResult from 'pages/CategoryResult';
import Product from 'pages/Product';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        path: '/product/:productId',
        element: <Product />,
      },
      {
        path: '/category/:categoryId',
        element: <CategoryResult />,
      },
    ],
  },
  { path: '/auth', element: <Auth /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
