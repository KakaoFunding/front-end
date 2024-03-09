import { useEffect } from 'react';

const Auth = () => {
  useEffect(() => {
    const urlString = new URL(window.location.href);
    const code = urlString.searchParams.get('code');
  });

  return <div>로그인중 입니다...</div>;
};

export default Auth;
