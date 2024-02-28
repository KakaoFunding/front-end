import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <header>header</header>
    <Outlet />
    <footer>footer</footer>
  </>
);

export default App;
