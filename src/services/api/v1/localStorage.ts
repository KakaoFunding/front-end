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

  if (data) {
    const parsedData = JSON.parse(data ?? '');
    return parsedData?.value;
  }

  return null;
};

export const clearLocalStorageItem = (keyName: string) => {
  window.localStorage.removeItem(keyName);
};
