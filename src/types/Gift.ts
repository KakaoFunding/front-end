export const STATUS_TEXT = {
  not_used: '미사용',
  used: '사용완료',
  canceled: '취소환불',
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
