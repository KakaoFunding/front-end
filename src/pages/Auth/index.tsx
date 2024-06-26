import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Spinner from 'components/ui/Spinner';

import { useUserStore } from 'store/useUserStore';

import { getKakaoOauthToken, login } from 'services/api/v1/oauth';
import { setSessionStorageItem } from 'utils/sessionStorage';

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setUserInfo = useUserStore((state) => state.setUserInfo);
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

        const res = await login({ socialAccessToken });
        const { accessToken, member } = res.data;

        setSessionStorageItem('accessToken', accessToken);
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
