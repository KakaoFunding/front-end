import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from 'types/user';

interface AuthState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      accessToken: null,
      setAccessToken: (token) => set({ accessToken: token }),
      clearAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: 'funding/auth',
    },
  ),
);

interface UserState extends User {
  setUserInfo: (user: User) => void;
  clearUserInfo: () => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      name: null,
      profileUrl: null,
      setUserInfo: ({ name, profileUrl }) =>
        set({
          name,
          profileUrl,
        }),
      clearUserInfo: () => set({ name: null, profileUrl: null }),
    }),
    {
      name: 'funding/user',
    },
  ),
);

export const useUserExists = (): boolean => {
  const name = useUserStore((state) => state.name);
  const accessToken = useAuthStore((state) => state.accessToken);

  if (name && accessToken) return true;

  return false;
};
