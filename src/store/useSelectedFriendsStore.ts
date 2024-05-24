import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { PickerResponseData, User } from 'types/user';

const defaultImgUrl =
  'https://github.com/KakaoFunding/front-end/blob/dev/src/assets/bg_profile_default.png?raw=true';
const peopleImgUrl = 'src/assets/profile_people.png';

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
