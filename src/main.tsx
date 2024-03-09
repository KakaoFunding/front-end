import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'styles/global.css';
import 'styles/hardreset.css';

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
        path: '/categories/:parentId/subCategories/:subId',
        element: <CategoryResult />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
