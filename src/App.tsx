import { Outlet } from 'react-router-dom';

// import styles from './app.module.scss';

const App = () => (
  <>
    <header>header</header>
    <Outlet />
    <footer>footer</footer>
  </>
);
export default App;
