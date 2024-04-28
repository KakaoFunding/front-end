import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import ProductItem from 'layouts/Brand/ProductItem';

const meta: Meta<typeof ProductItem> = {
  component: ProductItem,
  title: 'ProductItem/Brand',
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
type Story = StoryObj<typeof ProductItem>;

export const BrandProductItem: Story = {
  args: {
    productId: 1,
    photo:
      'https://img1.kakaocdn.net/thumb/C305x305@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240328171833_8393c1bbb26d4c5195c226d4b3753e64.jpg',
    name: '"숙면/힐링선물" 스트레스케어/퇴사선물 센티카 리추얼 필로우 미스트 200ml 선물세트 I 집들이/섬유향수/섬유탈취제/룸스프레이',
    price: 11800,
  },
};
