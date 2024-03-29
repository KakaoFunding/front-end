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
import Funding from 'pages/Funding';
import Giftbox from 'pages/Giftbox';
import MyPage from 'pages/MyPage';
import Product from 'pages/Product';
import Wish from 'pages/Wish';

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
      { path: 'home', element: <App /> },
      {
        path: '/mypage',
        element: <Navigate to="/mypage/giftbox" />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
        children: [
          {
            path: 'wish',
            element: <Wish />,
          },
          {
            path: 'funding',
            element: <Funding />,
          },
          {
            path: 'giftbox',
            element: <Giftbox />,
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
