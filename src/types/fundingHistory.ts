type FundingItemStatus = 'PROGRESS' | 'CANCEL_REFUND' | 'COMPLETED';

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
    status: FundingItemStatus;
  };
};

export type RegisteredFundingItemType = {
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
