import { useAuthStore, useUserStore } from 'store/useAuthStore';

export const useUserExists = (): boolean => {
  const name = useUserStore((state) => state.name);
  const accessToken = useAuthStore((state) => state.accessToken);

  if (name && accessToken) return true;

  return false;
};
