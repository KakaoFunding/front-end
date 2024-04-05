import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSelectedFriendsStore = create(
  persist(
    (set) => ({
      isSelected: false,
      selectedFriends: [],
      selectedHeadCount: 0,
      // 친구 타입
      setSelectedFriends: (state: string[]) => {
        set({
          selectedFriends: [...state],
          selectedHeadCount: state.length,
          isSelected: !(state.length === 0),
        });
      },
    }),
    {
      name: 'funding-seleted-friends',
    },
  ),
);
