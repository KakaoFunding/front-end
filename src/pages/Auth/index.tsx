import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore, useUserStore } from 'store/index';

import { login } from 'services/api/v1/oauth';

const Auth = () => {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  useEffect(() => {
    const urlString = new URL(window.location.href);
    const code = urlString.searchParams.get('code');
    const loginState = urlString.searchParams.get('state');

    if (!code || !loginState) {
      // Todo: 예외처리
      navigate('/');
      return;
    }

    const result = login({ code });

    result.then((res) => {
      const { accessToken, member } = res.data;
      setAccessToken(accessToken);
      setUserInfo(member);
      navigate(loginState);
    });
  });

  return <div>로그인중 입니다...</div>;
};

export default Auth;
