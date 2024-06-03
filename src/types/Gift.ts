export const STATUS_TEXT = {
  NOT_USED: '미사용',
  USED: '사용완료',
} as const;

export type StatusType = keyof typeof STATUS_TEXT;

export type Gift = {
  giftId: number;
  brandName: string;
  productName: string;
  productThumbnail: string;
  senderName: string;
  receivedAt: string;
  expiredAt: string;
};
