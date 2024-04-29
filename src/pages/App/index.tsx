import { Outlet } from 'react-router-dom';

import Footer from 'layouts/App/Footer';
import Header from 'layouts/App/Header';

import styles from './index.module.scss';

window.Kakao.init(import.meta.env.VITE_JAVASCRIPT_KEY);
console.log(window.Kakao.isInitialized());

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
