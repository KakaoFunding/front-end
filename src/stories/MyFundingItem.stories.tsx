import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import MyFundingItem from 'layouts/MyPage/FundingBox/MyFundingItem';

import { MyFundingItemType } from 'types/funding';

const meta: Meta<typeof MyFundingItem> = {
  title: 'MyFundingItem',
  component: MyFundingItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyFundingItem>;

const fundingItem: MyFundingItemType = {
  id: 1,
  product: {
    productId: 386515,
    name: '디핀다트 구슬아이스크림 기프트팩(50ml* 12개)',
    photo:
      'https://st.kakaocdn.net/product/gift/product/20220422165729_0119e39ca8a14084a3504b85ca4eaf30.jpeg',
    price: 15900,
    brandName: '디핀다트',
  },
  quantity: 1,
  date: '2024-04-24T14:59:42.48152',
};

export const NotUsedGift: Story = {
  args: { fundingItem },
};
