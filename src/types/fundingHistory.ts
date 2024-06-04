type FundingItemStatus = 'PROGRESS' | 'CANCEL_REFUND' | 'COMPLETED';

export type ContributedFundingItem = {
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
    status: FundingItemStatus;
  };
};

export type RegisteredFundingItem = {
  fundingId: number;
  status: FundingItemStatus;
  expiredAt: string;
  goalAmount: number;
  brandName: string;
  productName: string;
  productImage: string;
  accumulateAmount: number;
  productId: number;
};
