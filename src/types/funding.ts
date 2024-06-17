export const STATUS_TEXT = {
  USABLE: '미사용',
  USED: '사용완료',
} as const;

export type FundingItemStatusType = keyof typeof STATUS_TEXT;

export type MyFundingItemType = {
  id: number;
  product: {
    productId: number;
    name: string;
    photo: string;
    price: number;
    brandName: string;
  };
  quantity: number;
  receivedDate: string;
};

type EmptyObject = Record<string, never>;

export type MyInProgressFunding =
  | {
      fundingId: number;
      progressRate: number;
      remainAmount: number;
      goalAmount: number;
      accumulateAmount: number;
      productId: number;
      brandId: number;
      brandPhoto: string;
      productPhoto: string;
      brandName: string;
      productName: string;
    }
  | EmptyObject;
