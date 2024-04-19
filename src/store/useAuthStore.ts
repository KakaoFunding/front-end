import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from 'types/user';

type AuthState = {
  accessToken: string | null;
  socialToken: string | null;
  setSocialToken: (token: string) => void;
  setAccessToken: (token: string) => void;
  clearSocialToken: () => void;
  clearAccessToken: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      socialToken: null,
      setSocialToken: (token) => set({ socialToken: token }),
      setAccessToken: (token) => set({ accessToken: token }),
      clearSocialToken: () => set({ socialToken: null }),
      clearAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: 'auth',
    },
  ),
);

type UserState = {
  setUserInfo: (user: User) => void;
  clearUserInfo: () => void;
} & User;

export const useUserStore = create<UserState>()(
  persist(
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
      name: 'user',
    },
  ),
);
