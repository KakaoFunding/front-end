export type User = {
  name: string;
  profileUrl: string;
  providerId: string;
  birthDate: string;
};

export type UserWithUserId = User & {
  id: number;
};

export type PickerResponseData = {
  id: string;
  uuid: string;
  favorite: boolean;
  profile_nickname: string;
  profile_thumbnail_image: string;
};
