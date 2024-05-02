export const BADGE_TEXT = {
  unused: '미사용',
  finish: '사용완료',
  cancel: '취소환불',
} as const;

type BadgeType = keyof typeof BADGE_TEXT;

export type Gift = {
  giftId: number;
  productId: number;
  name: string;
  brandName: string;
  photo: string;
  senderName: string;
  receivedDate: string;
  expiredDate: string;
  status: BadgeType;
};
