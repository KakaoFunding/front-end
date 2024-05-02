export const setSessionStorageItem = (name: string, value: string) => {
  window.sessionStorage.setItem(name, value);
};

export const getSessionStorageItem = (name: string) => {
  try {
    const data = window.sessionStorage.getItem(name);

    return data !== 'undefined' && data !== null ? JSON.parse(data) : data;
  } catch (error) {
    return window.sessionStorage.getItem(name);
  }
};

export const removeSessionStorageItem = (name: string) => {
  window.sessionStorage.removeItem(name);
};

export const clearSessionStorageItem = () => {
  window.sessionStorage.clear();
};
