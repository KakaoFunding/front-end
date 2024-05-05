import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { PickerResponseData, User } from 'types/user';

const defaultImgUrl = 'src/assets/bg_profile_default.png';
const peopleImgUrl = 'src/assets/profile_people.png';

type SelectedFriendsState = {
  isSelected: boolean;
  isSelfSelected: boolean;
  selectedFriends: PickerResponseData[];
  selectedHeadCount: number;
  currentSelectedFriends: PickerResponseData[];
};

type SelectedFriendsAction = {
  setSelectedFriends: (state: PickerResponseData[], name: User['name']) => void;
  setCurrentSelectedFriends: (state: PickerResponseData[]) => void;
  getImgUrl: () => string;
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

      setSelectedFriends: (state, name) =>
        set(() => ({
          isSelected: !(state.length === 0),
          isSelfSelected:
            state.length === 1 && state[0].profile_nickname === name,
          selectedFriends: state,
          selectedHeadCount: state.length,
        })),

      setCurrentSelectedFriends: (state) =>
        set(() => ({
          currentSelectedFriends: state,
        })),

      clearSelectedFriends: () =>
        set({
          selectedFriends: [],
          isSelected: false,
          isSelfSelected: false,
          selectedHeadCount: 0,
        }),

      getImgUrl: () => {
        if (get().selectedHeadCount > 1) return peopleImgUrl;
        if (get().selectedHeadCount === 1)
          return get().selectedFriends[0].profile_thumbnail_image!;
        return defaultImgUrl;
      },
    }),
    {
      name: 'funding-seleted-friends',
    },
  ),
);
