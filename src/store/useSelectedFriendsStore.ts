import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

// import { User } from 'types/user';

const defaultImgUrl = 'src/assets/bg_profile_default.png';
const peopleImgUrl = 'src/assets/profile_people.png';
const profileImgUrl = 'src/assets/profile.png';

type SelectedFriendsState = {
  isSelected: boolean;
  isSelfSelected: boolean;
  // TODO : 받아올 친구 정보에 따라 타입 변환
  selectedFriends: string[];
  selectedHeadCount: number;
};

type SelectedFriendsAction = {
  setSelectedFriends: (state: string[]) => void;
  getImgUrl: () => string;
  getTitle: () => string;
};

type PersistType = (
  config: StateCreator<SelectedFriendsState & SelectedFriendsAction>,
  options: PersistOptions<SelectedFriendsState & SelectedFriendsAction>,
) => StateCreator<SelectedFriendsState & SelectedFriendsAction>;

export const useSelectedFriendsStore = create<
  SelectedFriendsState & SelectedFriendsAction
>(
  (persist as PersistType)(
    (set, get) => ({
      isSelected: false,
      isSelfSelected: false,
      selectedFriends: [],
      selectedHeadCount: 0,

      setSelectedFriends: (state) =>
        set(() => ({
          isSelected: !(state.length === 0),
          selectedFriends: state,
          selectedHeadCount: state.length,
        })),

      getImgUrl: () => {
        // 여러명일 경우
        if (get().selectedHeadCount > 1) return peopleImgUrl;
        if (get().selectedHeadCount === 1) return profileImgUrl;
        // 친구의 정보 이미지 넣기
        return defaultImgUrl;
      },

      getTitle: () => {
        if (!get().isSelected) return '선물 받을 친구를 선택해주세요.';
        if (get().selectedHeadCount > 1)
          return `${get().selectedHeadCount}명의 친구에게 선물하기`;
        if (get().isSelfSelected) return '나를 위한 선물하기';
        return `${get().selectedFriends}에게 선물하기`;
      },
    }),
    {
      name: 'funding-seleted-friends',
    },
  ),
);
