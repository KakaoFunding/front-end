import { useUserStore } from 'store/useUserStore';

import { getSessionStorageItem } from 'utils/sessionStorage';

export const useUserExists = (): boolean => {
  const name = useUserStore((state) => state.name);
  const accessToken = getSessionStorageItem('accessToken');

  if (name && accessToken) return true;

  return false;
};
