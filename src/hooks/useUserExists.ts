import { useUserStore } from 'store/useUserStore';

import { getSessionStorageItem } from 'utils/sessionStorage';

export const useUserExists = (): boolean => {
  const providerId = useUserStore((state) => state.providerId);
  const accessToken = getSessionStorageItem('accessToken');

  if (providerId && accessToken) return true;

  return false;
};
