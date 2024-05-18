import { Outlet } from 'react-router-dom';

import Footer from 'layouts/App/Footer';
import Header from 'layouts/App/Header';

import styles from './index.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Kakao = window as any;

Kakao.init(import.meta.env.VITE_JAVASCRIPT_KEY);
console.log(Kakao.isInitialized());

const App = () => (
  <>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default App;
