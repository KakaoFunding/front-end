type ContributedFundingItemStatus = 'PROGRESS' | 'CANCEL_REFUND' | 'COMPLETED';

export type ContributedFundingItemType = {
  product: {
    productId: number;
    name: string;
    photo: string;
    price: number;
    brandName: string;
  };
  fundingDetail: {
    fundingId: number;
    fundingDetailId: number;
    contributedAmount: number;
    contributedAt: string;
    creatorName: string;
    status: ContributedFundingItemStatus;
  };
};

export const REGISTERED_ITEM_STATUS = {
  PROGRESS: '진행중',
  BEFORE_PAYING_REMAINING: '잔여금액 결제대기중',
  COMPLETE: '완료됨',
  EXPIRED: '기간만료',
  CANCEL: '취소됨',
} as const;

type RegisteredFundingItemStatus = keyof typeof REGISTERED_ITEM_STATUS;

export type RegisteredFundingItemType = {
  fundingId: number;
  status: RegisteredFundingItemStatus;
  expiredAt: string;
  createdAt: string;
  goalAmount: number;
  brandName: string;
  productName: string;
  productImage: string;
  accumulateAmount: number;
  productId: number;
};
