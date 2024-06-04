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
    attributeAmount: number;
    attributedAt: string;
    creatorName: string;
    status: 'PROGRESS' | 'CANCEL_REFUND' | 'COMPLETED';
  };
};

// TODO : 응답 형식에 맞게 타입 변경
export type RegisteredFundingItem = {
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
    attributeAmount: number;
    attributedAt: string;
    creatorName: string;
    status: 'PROGRESS';
  };
};
