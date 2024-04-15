import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from 'types/user';

type AuthState = {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
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
      name: 'funding/user',
    },
  ),
);
