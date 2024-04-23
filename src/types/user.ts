export type User = {
  name: string | null;
  profileUrl: string | null;
};

export type UserWithUserId = User & {
  id: number;
};
