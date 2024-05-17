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

export const getLocalStorageItem = (keyName: string) => {
  const data = window.localStorage.getItem(keyName);
  const parsedData = JSON.parse(data ?? '');
  console.log(parsedData);
  return parsedData.value;
};

export const clearLocalStorageItem = (keyName: string) => {
  window.localStorage.removeItem(keyName);
};
