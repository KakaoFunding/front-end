import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';
import { useUserStore } from 'store/useUserStore';

import { PickerResponseTypes, PickerErrorTypes } from 'types/kakaoPicker';

export const useKakaoPicker = () => {
  const { name, providerId } = useUserStore();
  const { setSelectedFriends } = useSelectedFriendsStore();

  const openKakaoPicker = () => {
    window.Kakao?.Picker.selectFriends({
      title: '친구 선택',
      enableSearch: true,
      showMyProfile: true,
      showFavorite: true,
      showPickedFriend: true,
      maxPickableCount: 10,
      minPickableCount: 1,
    })
      .then((response: PickerResponseTypes) => {
        setSelectedFriends(response.users, name, providerId);
      })
      .catch((error: PickerErrorTypes) => {
        const pickerError = error as PickerErrorTypes;
        console.error(pickerError);
      })
      .finally(() => {
        window.Kakao?.Picker.cleanup();
      });
  };

  return { openKakaoPicker };
};
