import { Navigate, Outlet } from 'react-router-dom';

import { useUserExists } from 'hooks/useUserExists';

const UnPrivateRoute = () => {
  const isUserLoggedIn = useUserExists();

  return isUserLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default UnPrivateRoute;
