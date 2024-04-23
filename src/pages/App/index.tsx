import { Outlet } from 'react-router-dom';

import Footer from 'layouts/App/Footer';
import Header from 'layouts/App/Header';

import styles from './index.module.scss';

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
