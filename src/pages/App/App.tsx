import { Outlet } from 'react-router-dom';

import Footer from 'src/layouts/App/Footer';
import Header from 'src/layouts/App/Header';

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
