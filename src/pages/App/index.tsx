import Footer from 'layouts/App/Footer';
import Header from 'layouts/App/Header';
import { Outlet } from 'react-router-dom';

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
