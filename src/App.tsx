import { Outlet } from 'react-router-dom';

import { Header } from './components';

import './styles/variable.module.scss';

const App = () => (
  <>
    <Header />
    <Outlet />
    <footer>footer</footer>
  </>
);

export default App;
