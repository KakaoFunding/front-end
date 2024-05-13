export const getCookie = (key: string) => {
  const cookies = document.cookie.split('; ').map((el) => el.split('='));
  const foundCookie = cookies.find((cookie) => cookie[0] === key);

  return foundCookie ? JSON.parse(foundCookie[1]) : null;
};
