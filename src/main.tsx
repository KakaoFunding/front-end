import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import 'styles/global.css';
import 'styles/hardreset.css';

import App from 'pages/App';
import Auth from 'pages/Auth';
import Brand from 'pages/Brand';
import Cart from 'pages/Cart';
import CategoryResult from 'pages/CategoryResult';
import FundingComplete from 'pages/FundingComplete';
import FundingPayment from 'pages/FundingPayment';
import GiftComplete from 'pages/GiftComplete';
import GiftPayment from 'pages/GiftPayment';
import Home from 'pages/Home';
import MyPage from 'pages/MyPage';
import Funding from 'pages/MyPage/Funding';
import FundingBox from 'pages/MyPage/FundingBox';
import FundingHistory from 'pages/MyPage/FundingHistory';
import GiftBox from 'pages/MyPage/GiftBox';
import OrderHistory from 'pages/MyPage/OrderHistory';
import Wish from 'pages/MyPage/Wish';
import NotFound from 'pages/NotFound';
import PaymentError from 'pages/PaymentError';
import PrivateRoute from 'pages/PrivateRoute';
import Product from 'pages/Product';
import Search from 'pages/Search';
import SearchResult from 'pages/SearchResult';
import UnPrivateRoute from 'pages/UnPrivateRoute';

// eslint-disable-next-line consistent-return
const enableMocking = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('mocks/worker');
    return worker.start();
  }
};

const queryClient = new QueryClient();

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      {
        element: <UnPrivateRoute />,
        children: [{ path: '/auth', element: <Auth /> }],
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/mypage',
            element: <Navigate to="/mypage/giftbox" />,
          },
          {
            path: '/mypage',
            element: <MyPage />,
            children: [
              {
                path: 'giftbox',
                element: <GiftBox />,
              },
              {
                path: 'fundingbox',
                element: <FundingBox />,
              },

              {
                path: 'wish',
                element: <Wish />,
              },
              {
                path: 'funding',
                element: <Funding />,
              },
              {
                path: 'orderHistory',
                element: <OrderHistory />,
              },
              {
                path: 'fundingHistory',
                element: <FundingHistory />,
              },
            ],
          },
          {
            path: '/bill/gift',
            element: <GiftPayment />,
          },
          {
            path: '/bill/funding',
            element: <FundingPayment />,
          },
          {
            path: '/gift/complete',
            element: <GiftComplete />,
          },
          {
            path: '/funding/complete',
            element: <FundingComplete />,
          },
          {
            path: '/payment/error',
            element: <PaymentError />,
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
      {
        path: '/brand/:brandId',
        element: <Brand />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/search/result',
        element: <SearchResult />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
