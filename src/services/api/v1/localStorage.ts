export const setLocalStorageItem = (
  keyName: string,
  value: string,
  expiration: number,
) => {
  const obj = {
    value,
    expire: Date.now() + expiration,
  };

  const objString = JSON.stringify(obj);

  window.localStorage.setItem(keyName, objString);
};
