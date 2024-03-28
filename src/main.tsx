import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import 'styles/global.css';
import 'styles/hardreset.css';

import Auth from 'pages/Auth';
import CategoryResult from 'pages/CategoryResult';
import GiftBox from 'pages/GiftBox';
import Product from 'pages/Product';

import App from './pages/App';

// eslint-disable-next-line consistent-return
const enableMocking = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('mocks/worker');
    return worker.start();
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        path: '/giftbox',
        element: <Navigate to="/giftbox/inbox" />,
      },
      {
        path: '/giftbox',
        element: <GiftBox />,
        children: [
          {
            path: 'wish',
            element: <div>위시 컴포넌트</div>,
          },
          {
            path: 'funding',
            element: <div>펀딩 컴포넌트</div>,
          },
          {
            path: 'inbox',
            element: <div>선물함 컴포넌트</div>,
          },
        ],
      },
      {
        path: '/product/:productId',
        element: <Product />,
      },
      {
        path: '/categories/:parentId',
        element: <CategoryResult />,
      },
      {
        path: '/categories/:parentId/subcategories/:subId',
        element: <CategoryResult />,
      },
    ],
  },
  { path: '/auth', element: <Auth /> },
]);

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
