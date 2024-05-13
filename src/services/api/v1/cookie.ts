export const getCookie = (key: string) => {
  const cookies = document.cookie.split(';').map((el) => el.split('='));
  console.log(cookies);
  const foundCookie = cookies.find((cookie) => cookie[0] === key);
  console.log(foundCookie);

  return foundCookie ? JSON.parse(foundCookie[1]) : null;
};
