import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Spinner from 'components/ui/Spinner';

import { useAuthStore, useUserStore } from 'store/useAuthStore';

import { getKakaoOauthToken, login } from 'services/api/v1/oauth';
import { setSessionStorageItem } from 'services/api/v1/sessionStorage';

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const setSocialAccessToken = useAuthStore((state) => state.setSocialToken);
  const code = searchParams.get('code');
  const loginState = searchParams.get('state');

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

        setSessionStorageItem('accessToken', accessToken);
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
