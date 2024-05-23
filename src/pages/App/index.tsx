import { Outlet, ScrollRestoration } from 'react-router-dom';

import Footer from 'layouts/App/Footer';
import Header from 'layouts/App/Header';

import styles from './index.module.scss';

window.Kakao.init(import.meta.env.VITE_JAVASCRIPT_KEY);

const App = () => (
  <>
    <Header />
    <main className={styles.main}>
      <ScrollRestoration />
      <Outlet />
    </main>
    <Footer />
  </>
);

export default App;
