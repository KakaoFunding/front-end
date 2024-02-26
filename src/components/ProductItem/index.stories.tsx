import ColumnProductItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ColumnProductItem> = {
  component: ColumnProductItem,
};

export default meta;
type Story = StoryObj<typeof ColumnProductItem>;

// 임시 상품 아이템 데이터
const productData = {
  thumbnailSrc:
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200404101217_091a18bd9a024799ad6d9018f1035614',
  brandName: '설빙',
  name: '오레오초코몬스터설빙',
  price: 12900,
  isWished: true,
  wishCount: 6008,
};

export const ColumnSmall: Story = {
  args: {
    product: productData,
    size: 'small',
  },
};

export const ColumnMedium: Story = {
  args: {
    product: productData,
    size: 'medium',
  },
};
