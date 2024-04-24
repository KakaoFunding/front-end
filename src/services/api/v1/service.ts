/* eslint-disable no-nested-ternary */
// session storage
export const Data = {
  set: ($name: string, $value: boolean | string | object) => {
    const value: string =
      typeof $value === 'object'
        ? JSON.stringify($value)
        : typeof $value === 'boolean'
          ? $value.toString()
          : $value;

    window.sessionStorage.setItem($name, value);
  },

  get: ($name: string) => {
    try {
      const data = window.sessionStorage.getItem($name);

      return data !== 'undefined' && data !== null ? JSON.parse(data) : data;
    } catch (error) {
      return window.sessionStorage.getItem($name);
    }
  },

  remove: ($name: string) => {
    window.sessionStorage.removeItem($name);
  },

  clear: () => {
    window.sessionStorage.clear();
  },
};
