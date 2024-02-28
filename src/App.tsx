import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const App = () => (
  <>
    <Header />
    <Outlet />
    <footer>footer</footer>
  </>
);

export default App;
