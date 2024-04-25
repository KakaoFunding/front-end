export type Gift = {
  giftId: number;
  productId: number;
  name: string;
  brandName: string;
  photo: string;
  senderName: string;
  receivedDate: string;
  expiredDate: string;
  status: 'unused' | 'finish' | 'cancel';
};
