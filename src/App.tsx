import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import styles from './App.module.scss';

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
