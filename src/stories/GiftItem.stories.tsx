import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import GiftItem from 'layouts/MyPage/GiftBox/GiftItem';

import { Gift } from 'types/Gift';

const meta: Meta<typeof GiftItem> = {
  title: 'GiftItem',
  component: GiftItem,
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

type Story = StoryObj<typeof GiftItem>;

const giftData: Gift = {
  giftId: 1,
  brandName: '브랜드',
  productName: '상품',
  productThumbnail:
    'https://img1.kakaocdn.net/thumb/C300x300@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20201230180133_cd30cb29560f4f1f8c7f380eb94e3cf1.png',
  senderName: '홍길동',
  receivedAt: '2022-05-23T23:59:59',
  expiredAt: '2024-12-31T23:59:59',
};

export const NotUsedGift: Story = {
  args: { gift: giftData, status: 'NOT_USED' },
};
