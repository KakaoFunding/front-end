import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Spinner from 'components/ui/Spinner';

import { useAuthStore, useUserStore } from 'store/useAuthStore';

import { getKakaoOauthToken, login } from 'services/api/v1/oauth';
import { Data } from 'services/api/v1/service';

const Auth = () => {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const setSocialAccessToken = useAuthStore((state) => state.setSocialToken);
  const urlString = new URL(window.location.href);
  const code = urlString.searchParams.get('code');
  const loginState = urlString.searchParams.get('state');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!code || !loginState) {
          // Todo: 예외처리
          navigate('/');
          return;
        }

        const socialAccessToken = await getKakaoOauthToken({ code });
        setSocialAccessToken(socialAccessToken);

        const res = await login({ socialAccessToken });
        const { accessToken, member } = res.data;

        Data.set('accessToken', accessToken);
        setAccessToken(accessToken);
        setUserInfo(member);
        navigate(loginState);
      } catch (error) {
        console.warn(error);
        // Todo: 에러 처리
      }
    };

    fetchData();
  }, [code]);

  return <Spinner />;
};

export default Auth;
