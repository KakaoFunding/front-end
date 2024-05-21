import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from 'types/user';

type UserState = {
  setUserInfo: (user: User) => void;
  clearUserInfo: () => void;
} & User;

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: null,
      profileUrl: null,
      providerId: null,
      birthDate: null,
      setUserInfo: ({ name, profileUrl, providerId, birthDate }) =>
        set({
          name,
          profileUrl,
          providerId,
          birthDate,
        }),
      clearUserInfo: () =>
        set({
          name: null,
          profileUrl: null,
          providerId: null,
          birthDate: null,
        }),
    }),
    {
      name: 'user',
    },
  ),
);
