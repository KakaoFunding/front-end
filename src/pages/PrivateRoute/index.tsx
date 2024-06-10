import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useLogin } from 'hooks/useLogin';
import { useUserExists } from 'hooks/useUserExists';

const PrivateRoute = () => {
  const isUserLoggedIn = useUserExists();

  if (isUserLoggedIn) {
    return <Outlet />;
  }

  const navigate = useNavigate();
  const { navigateToLoginPage, confirmLogin } = useLogin();
  const result = confirmLogin();

  useEffect(() => {
    if (result) navigateToLoginPage();
    else navigate(-1);
  }, [result]);

  return null;
};

export default PrivateRoute;
