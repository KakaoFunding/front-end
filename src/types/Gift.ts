export const BADGE_TEXT = {
  NOT_USED: '미사용',
  USED: '사용완료',
  CANCELED: '취소환불',
} as const;

export type BadgeType = keyof typeof BADGE_TEXT;

export type Gift = {
  giftId: number;
  brandName: string;
  productName: string;
  productThumbnail: string;
  senderName: string;
  receivedAt: string;
  expiredAt: string;
};
