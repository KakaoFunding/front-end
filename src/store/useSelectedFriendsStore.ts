import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { PickerResponseData, User } from 'types/user';

import friendsDefaultImgUrl from 'assets/profile_default.png';
import peopleImgUrl from 'assets/profile_people.png';

type SelectedFriendsState = {
  isSelected: boolean;
  isSelfSelected: boolean;
  selectedFriends: PickerResponseData[];
  selectedHeadCount: number;
};

type SelectedFriendsAction = {
  setSelectedFriends: (
    state: PickerResponseData[],
    name: User['name'],
    providerId: User['providerId'],
  ) => void;
  getImgUrl: (defaultImgUrl: string) => string;
  clearSelectedFriends: () => void;
};

export const useSelectedFriendsStore = create<
  SelectedFriendsState & SelectedFriendsAction
>()(
  persist(
    (set, get) => ({
      isSelected: false,
      isSelfSelected: false,
      selectedFriends: [],
      selectedHeadCount: 0,
      currentSelectedFriends: [],

      setSelectedFriends: (state, name, providerId) =>
        set(() => ({
          isSelected: !(state.length === 0),
          isSelfSelected:
            state.length === 1 &&
            state[0].profile_nickname === name &&
            state[0].id === providerId,
          selectedFriends: state,
          selectedHeadCount: state.length,
        })),

      clearSelectedFriends: () =>
        set({
          selectedFriends: [],
          isSelected: false,
          isSelfSelected: false,
          selectedHeadCount: 0,
        }),

      getImgUrl: (defaultImgUrl: string) => {
        const selectCount = get().selectedHeadCount;

        if (selectCount > 1) return peopleImgUrl;
        if (selectCount === 1) {
          const friendsProfileImgUrl =
            get().selectedFriends[0].profile_thumbnail_image;

          if (!friendsProfileImgUrl) {
            return friendsDefaultImgUrl;
          }

          return friendsProfileImgUrl;
        }

        return defaultImgUrl;
      },
    }),
    {
      name: 'funding-seleted-friends',
    },
  ),
);
