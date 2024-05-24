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
    status: 'PROGRESS';
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
